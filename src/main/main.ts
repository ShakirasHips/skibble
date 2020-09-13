import { app, BrowserWindow, ipcMain } from 'electron';
import * as system from 'systeminformation'
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

class Main {
  private mWindow: BrowserWindow

  public init(): void {
    app.on('ready', this.createWindow)
    app.on('window-all-closed', this.onWindowAllClosed)
    app.on('activate', this.onActivate)
  }

  private createWindow(): void {
    const mainWindow = new BrowserWindow({
      height: 600,
      width: 800,
      autoHideMenuBar: true,
    });
  
    // and load the index.html of the app.
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
  }

  private onWindowAllClosed(): void {
    if (process.platform !== 'darwin') 
      app.quit();
  }

  private onActivate(): void {
    if (!this.mWindow)
      this.createWindow()
  }
}

new Main().init()