// Modules to control application life and create native browser window
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('path');
app.commandLine.appendSwitch('--force-high-performance-gpu');
//app.commandLine.appendSwitch('--disable-gpu-vsync');
app.commandLine.appendSwitch('--limit-fps', 60);

function createWindow() {
    // Create the browser window.
    var mainWindow = new BrowserWindow({
        width: 1080,
        height: 720,
        webPreferences: {
	    contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    // and load the index.html of the app.
	//mainWindow.loadURL("gpu://")
	mainWindow.loadURL('https://playcanvas.com/editor/scene/1086241');
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(function () {
    createWindow();
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
