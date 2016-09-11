'use strict';

const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, ipcMain, dialog, shell, Menu} = electron;
import 	{ AppRouter } from './helpers/app_router';
import 	AppReporter from './helpers/app_reporter';
import { AppMenu } from './helpers/app_menu';
import { DevMenu } from './helpers/dev_menu';
import { EditMenu } from './helpers/edit_menu';
const is_WIN32 = process.platform == "win32";

const setApplicationMenu = function () {
  const menus = [AppMenu, EditMenu];

  if (process.env.NODE_ENV === 'development') {
    menus.push(DevMenu);
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};
let mainWindow = void 0;

let createWindow = () => {
  // SETS APPLICATION MENU
   setApplicationMenu();
   // PROTOCOL MODULE
   require('./helpers/app_protocol');
   // CRASH REPORTER
   require('./helpers/app_reporter');

  var winW = 1156;
  var winH = 600;
  var atomScreen = electron.screen;
  var size = atomScreen.getPrimaryDisplay().workAreaSize;
  var vertL = Math.floor(size.width / 2);
  var horzL = Math.floor(size.height / 2);

  mainWindow = new BrowserWindow({
    backgroundColor: '#282c3a',
    width: winW,
    height: winH,
    minWidth: winW,
    minHeight: winH,
    frame: false
  });

  mainWindow.setPosition(
    vertL - (winW / 2),
    horzL - (winH / 2)
  );

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools({ detach: true });
  }

  mainWindow.loadURL(`file://${__dirname}/views/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle('evolition | playmaster');
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  ipcMain.on('app_minimize', (event) => {
    mainWindow.minimize();
  });

  ipcMain.on('app_maximize', (event, val) => {
    val == true ? mainWindow.maximize() : mainWindow.unmaximize();
  });

  ipcMain.on('config-paths', (e, arg) => {
    const routePaths = AppRouter.getAppDataPath();
    e.returnValue = routePaths;
  });
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Windows data directory correction since Electron's default is backwards
// as ref'd here... https://github.com/electron/electron/issues/1404
if (is_WIN32) {
    app.setPath("appData", process.env.LOCALAPPDATA);
    app.setPath("userData", path.join(process.env.LOCALAPPDATA, app.getName()));
}
app.on('ready', createWindow);
