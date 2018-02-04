const electron = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');
const fs = require('fs');
const chokidar = require('chokidar');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const home =
  process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
const file = home + '/.news.json';

const menuTemplate = [
  {
    label: 'News',
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  }
];

let mainWindow;

const sendConfig = () => {
  fs.exists(file, exists => {
    if (exists) {
      delete require.cache[require.resolve(file)];
      mainWindow.webContents.send('config', require(file));
    }
  });
};

const createWindow = () => {
  // Create a new browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    titleBarStyle: 'hidden'
  });

  // Bind browser window to block ads.
  blockWindowAds(mainWindow);

  // Load right url for development or production.
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.on('closed', () => (mainWindow = null));

  // Send config when file is changed.
  const watcher = chokidar.watch(file);
  watcher.on('change', sendConfig);

  // Send config on finish load.
  mainWindow.webContents.on('did-finish-load', sendConfig);

  // If not dev set production menu.
  if (!isDev) {
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
  }
};

// Create window when app is ready.
app.on('ready', createWindow);

// When all window is closed, close the app.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create a new window when no window exists but the app is active.
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
