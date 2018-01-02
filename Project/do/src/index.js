import util from './util';
import './styles/index.scss';

let btnComponent = document.createElement('BUTTON');
btnComponent.innerHTML = 'Click Me!';
btnComponent.onclick = () => {
    /* import('./dys').then(() => {
        //debugger
    }); */
}

document.querySelector('#container').appendChild(btnComponent);
util();


async function aa() {
    console.log('aa');
}

aa();