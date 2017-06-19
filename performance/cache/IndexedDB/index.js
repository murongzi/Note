(function() {
    var $ = function(_) {return document.querySelector(_);}

    $('#btnClick').onclick = function() {
        console.log('test');
    }



    /**
     * open:
     */
    var openRequest = indexedDB.open('test', 1);

    openRequest.onerror = function(e) {
        console.log('error');
    }

    openRequest.onsuccess = function(e) {
        console.log('onsuccess');
        var db = e.target.result;

        var table = db.transaction('table', 'readwrite').objectStore("table").add({id:123, value:"this is a testqqqq"});
    }

    /**
     * 第一次open本地数据库，会执行onupgradeneeded，然后在执行onsuccess
     * 第二次会直接执行onsuccess
     */
    openRequest.onupgradeneeded = function(e) {
        console.log('onupgradeneeded');
        var db = e.target.result;

        if(!db.objectStoreNames.contains('table')){
            var store = db.createObjectStore('table', {autoIncrement:true});
        }
    }




    var indexedDBClass = function(dbName) {
        var opt = {
            name:'myDB',
            version:1
        };

        //打开数据库
        var openDB = window.indexedDB.open(opt.dbName, 1);

        openDB.onupgradeneeded = function() {
            var db = e.target.result;
        }

        openDB.onsuccess = function() {
            
        }

        openDB.onerror = function() {
            
        }
    }

    indexedDBClass.prototype.db = !0;

    indexedDBClass.prototype.addData = function() {
        
    }

    indexedDBClass.prototype.deleteData = function() {
        
    }

    indexedDBClass.prototype.getData = function() {
        
    }

    indexedDBClass.prototype.modifyData = function() {
        
    }




})();