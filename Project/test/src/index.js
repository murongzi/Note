import './styles/index.css';
import MyImage from './images/icon_kongtai.png';
import * as math from './math';

import printMe from './print';

printMe();

let btnComponent = document.createElement('button');

btnComponent.innerHTML = 'click mexxx!';

document.body.appendChild(btnComponent);

btnComponent.onclick = () => {
    console.log('xxxx!!!!!', Math.random().toString());
}


/* alert('test', MyImage); */