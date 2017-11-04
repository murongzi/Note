const electron = require('electron')
const { ipcRenderer } = electron

const ul = document.querySelector('ul')

//Catch Add Item
ipcRenderer.on('item:add', (e, item) => {
    ul.className = 'collection'

    const li = document.createElement('li')

    li.className = "collection-item"

    const itemText = document.createTextNode(item)

    li.appendChild(itemText)

    ul.appendChild(li)
})

//Clear item
ipcRenderer.on('item:clear', () => {
    ul.innerHTML = ''
    ul.className = ''
})

ul.addEventListener('dblclick', (e) => {
    e.target.remove()

    if (!ul.children.length) {
        ul.className = ''
    }
})

document.querySelector('#download').addEventListener('click', () => {
    ipcRenderer.sendSync('down:file', "https://www.baidu.com")
})