import {HelloWorld, log, newlog} from './util';
import { InputI } from './interface';

(new HelloWorld()).alert()

let a:number = 100;

//alert(a);

log();

newlog();

function aa(p: InputI): InputI {
    console.log(p);
    return p
}

aa({name:'hshshshshshshshshs'});

let dom = document.getElementById('btnClick');

if (dom) {
    dom.onclick = () => {
        console.log('this ia a test!');
    }
}