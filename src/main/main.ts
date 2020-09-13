import { app, BrowserWindow } from 'electron';
import * as system from 'systeminformation'
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    autoHideMenuBar: true,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

async function cpuData() {
  try {
    const data = await system.cpu();
    console.log('CPU Information:');
    console.log('- manufucturer: ' + data.manufacturer);
    console.log('- brand: ' + data.brand);
    console.log('- speed: ' + data.speed);
    console.log('- cores: ' + data.cores);
    console.log('- physical cores: ' + data.physicalCores);
    console.log('...');
  } catch (e) {
    console.log(e)
  }
}

cpuData()