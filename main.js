const electron = require('electron')
const  {app, BrowserWindow} = require ('electron')
const path = require('path')
const url = require('url')

//////////////////////////////////////
const fs = require ('fs');
const os = require ('os');
const ipc = electron.ipcMain;
const shell = electron.shell;


let win

function createWindow () {
  win = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

//win.webContents.openDevTools()


win.on('closed', () => {

  win = null
})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
