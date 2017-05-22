var $ = function(_){
    return document.querySelector(_);
}, myWorker;

if (window.Worker) {
    myWorker = new Worker('worker.js');
}

$('btnClick').onclick = function(){
    if (!myWorker) return;

    myWorker.postMessage(['first', 'second', 'third', 'fouth']);
}

myWorker.onmessage = function(e) {
    console.log('Receive 数据了');
}