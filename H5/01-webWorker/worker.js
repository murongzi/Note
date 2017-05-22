onmessage = function(e) {
    console.log('webwork接受到数据了', e);

    postMessage({a:"fasdfadf", b:"fasdfasdfasdf"});
}