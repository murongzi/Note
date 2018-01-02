class HelloWorld {
    constructor(){}

    alert() {
        console.log('this is HelloWorld Class');
    }
}


const log = () => {
    console.log('this is util code');
}

async function newlog() {
    console.log('this is new newlog');
}

export {
    newlog,
    log,
    HelloWorld
};