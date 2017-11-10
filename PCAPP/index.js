const url = require('url')
const path = require('path')
const { app, BrowserWindow, Menu, ipcMain } = require('electron')

//SET ENV
//process.env.NODE_ENV = 'production'

console.log(process.env.NODE_ENV);

let mainWindow, addWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        icon:path.join(__dirname, './webapp/images/iMac-icon.png')
        /* title:'Shopping List' */
        /* titleBarStyle: 'hidden' */
    })

    /* 这里的url带有hash，必须用这个方法处理，否则会出现#被转义的情况，导致页面静态资源加载失败 */
    mainWindow.loadURL(url.format({
        pathname:`/`,
        hostname:'localhost',
        protocol:'http',
        port:'8082',
        hash:'!/hello',
        slashes:true
    }))

    //个性化window的title
    mainWindow.webContents.on('did-finish-load',() => {
        mainWindow.setTitle('hahahaha');
    });

    //页面跳转触发的事件
    mainWindow.webContents.on('did-navigate', () => {
        console.log('did-navigate');
    })

    //页面hashchange触发的事件
    mainWindow.webContents.on('did-navigate-in-page', () => {
        console.log('did-navigate-in-page');
    })

    //Quit aoo when closed
    mainWindow.on('closed', () => {
        app.quit();
    })

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)

    //设置top 主菜单
    Menu.setApplicationMenu(mainMenu)
;})

// Handle create add window
let createAddWindow = () => {
    addWindow = new BrowserWindow({
        width:200,
        height:300,
        title:'add shopping list item'
    })

    addWindow.loadURL(url.format({
        pathname:path.join(__dirname, './webapp/addWindow.html'),
        protocol:'file',
        slashes:true
    }))

    addWindow.on('close', () => {
        addWindow = null;
    })
}

ipcMain.on('item:add', (e, item) => {
    console.log('here is main window', item)
    mainWindow.webContents.send('item:add', item)
    addWindow.close()
})
ipcMain.on('down:file', (e, url) => {
    //debugger
    mainWindow.webContents.downloadURL(url)
})

const mainMenuTemplate = [
    {},//添加这个去掉mac上的默认按钮electron
    {
        label:'file',
        submenu:[
            {
                label:'Add Item',
                click() {
                    createAddWindow()
                }
            },
            {
                label:'Clear Items',
                click() {
                    mainWindow.webContents.send('item:clear')
                }
            },
            {
                label:'Quit',
                accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
]

//If mac add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift()
}

//开发过程中添加dev tool，方便调试
if (process.env.NODE_ENV === 'dev') {
    mainMenuTemplate.push({
        label:'Developer Tools',
        submenu:[{
            label:'Toggle DevTools',
            click(iten, focusedWindow) {
                focusedWindow.toggleDevTools()
            }
        },
        {
            role:'reload'
        }
    ]
    })
}