'use strict';
const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, ipcMain, dialog, shell, Menu } = electron;
import { AppRouter } from './helpers/app_router';
import AppReporter from './helpers/app_reporter';
import { AppMenu } from './helpers/app_menu';
import { DevMenu } from './helpers/dev_menu';
import { EditMenu } from './helpers/edit_menu';
import { chromeExt } from './helpers/dev_chromeExt';
const IS_WIN32 = process.platform == 'win32';

const setApplicationMenu = function () {
  const menus = [AppMenu, EditMenu];
  if (process.env.NODE_ENV === 'development') {
    menus.push(DevMenu);
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

let mainWindow = void 0;
let chatWindow = void 0;

// let createChatWindow = (id) => {
//
//
// };

if (chatWindow !== undefined) {
  chatWindow.on('close', (event) => {
    // chatWindow.hide();
    event.preventDefault();
  });
};


let createWindow = () => {
  AppRouter.initDatabases(
    [
      'settings',
      'player',
      'preferences',
      'character',
      'campaign',
      'game_system',
      'conversation',
    ]
  );

  // SETS APPLICATION MENU
  setApplicationMenu();

  // PROTOCOL MODULE
  require('./helpers/app_protocol');

  // CRASH REPORTER
  require('./helpers/app_reporter');

  let WINDOW_WIDTH = 520;
  let WINDOW_HEIGHT = 800;
  let ATOM_SCREEN = electron.screen;
  let size = ATOM_SCREEN.getPrimaryDisplay().workAreaSize;
  let workArea = ATOM_SCREEN.getPrimaryDisplay().workArea;
  let HORIZONTAL_LENGTH = Math.floor(size.width / 2);
  let VERTICAL_LENGTH = Math.floor(size.height / 2);

  mainWindow = new BrowserWindow({
    backgroundColor: '#282c3a',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    minWidth: WINDOW_WIDTH,
    minHeight: WINDOW_HEIGHT,
    frame: false,
    enableLargerThanScreen: true,
    flashFrame: true,
    alwaysOnTop: true,
  });

  mainWindow.setPosition(
    HORIZONTAL_LENGTH - (WINDOW_WIDTH / 2),
    VERTICAL_LENGTH - (WINDOW_HEIGHT / 2)
  );

  // console.log(`[WINDOW MAXIMUMS]`, mainWindow.getMaximumSize());
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools({ detach: true });
  }

  // ADD REACT DEVTOOLS  For more info: https://goo.gl/HAip0t
  let appDataPath = app.getPath('appData');

  let chromeExtPath = IS_WIN32
    ? '/Google/Chrome/User Data/Default/Extensions/'
    : '/Google/Chrome/Default/Extensions/'; // OSX CHROME EXTENSION PATH

  let devToolsExtPath = path.join(
    appDataPath,
    chromeExtPath,
    chromeExt.id,
    chromeExt.version);

  // console.log('RDToolsPath: ', RDToolsPath);
  BrowserWindow.addDevToolsExtension(devToolsExtPath);

  mainWindow.loadURL(`file://${__dirname}/views/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle('evolition | playmaster');
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  ipcMain.on('config-paths', (e, arg) => {
    const routePaths = AppRouter.getAppDataPath();
    e.returnValue = routePaths;
  });

  ipcMain.on('resize-to-login', (e, arg) => {
    var options = { width: 400, height: 800 };
    options.x = HORIZONTAL_LENGTH  - (options.width / 2);
    options.y = VERTICAL_LENGTH - (options.height / 2);
    mainWindow.setMinimumSize(WINDOW_WIDTH, WINDOW_HEIGHT);
    mainWindow.setBounds(options, true);
  });

  ipcMain.on('resize-to-main', (e, arg) => {
    var options = { width: 1170, height: size.height };
    options.x = size.width - options.width;
    options.y = VERTICAL_LENGTH - (size.height / 2 - workArea.y);
    mainWindow.show();
    mainWindow.setMinimumSize(options.width, 800);
    mainWindow.setBounds(options, true);
  });

};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('send_file', (event, path, newContext,  name, newFileName) => {
  event.returnValue = AppRouter.saveAsset(path, newContext,  name, newFileName);
});

ipcMain.on('update_avatar', (event, uri) => {
  event.returnValue = uri;
  event.sender.send('asynchronous-reply', uri);
});

ipcMain.on('config-paths', (e, arg) => {
  const routePaths = AppRouter.getAppDataPath();
  e.returnValue = routePaths;
});

// ipcMain.on('openConversation', (event, player, id) => {
//   createChatWindow(id);
// });
ipcMain.on('closeConversation', (event, windowId) => {
  BrowserWindow.fromId(windowId).close();
  // console.log(BrowserWindow)
});

// Windows data directory correction since Electron's default is backwards
// as ref'd here... https://github.com/electron/electron/issues/1404
if (IS_WIN32) {
  app.setPath('appData', process.env.LOCALAPPDATA);
  app.setPath('userData', path.join(process.env.LOCALAPPDATA, app.getName()));
}

app.on('ready', createWindow);
