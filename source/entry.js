'use strict';

const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, ipcMain, dialog, shell, Menu } = electron;


let createWindow = () => {
  let mainWindow = void 0;
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

};
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('ready', createWindow);
