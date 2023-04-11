const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        resizable: false,
        icon: `./public/img/logo.png`,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#02111B',
            symbolColor: '#119DA4',
            height: 30
        }
    
    })

    win.loadURL('http://localhost:7007')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})