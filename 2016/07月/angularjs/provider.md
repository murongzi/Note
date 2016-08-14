### angularjs-----Service之茴香豆的茴有几种写法

angularjs的service在我们的应用中可以用来组织和共享代码（比如公共code）

特点:

* 直到有依赖与定义的service的时候才会实例化
* 单例—每个组件使用的service都是对service factory实例化的引用，不管注入了多少次，都是引用的同一个

**页面结构**

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>inject</title>
	<script src="../libs/angular/angular.js"></script>
  </head>
  <body>
    <div ng-app="myApp">
      <div ng-controller="ServiceController">
        <button ng-click="btnClick()">Click Me!</button>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

**写法1**

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
  		myFirst.sendRequest('./data.json').success(function(json){
            console.log(json);
        });
  }
}]);

myApp.factory('myFirst', ['$http', function($http){
  	return {
  		sendRequest:function(url){
  			return $http({
  				url:url,
              	cache:true,
              	method:'get'
			});
		}
	}
}]);
```

**写法2**

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
  		myFirst.sendRequest('./data.json').success(function(json){
            console.log(myFirst);
            console.log(myFirst.getVersion());
        });
  }
}]);

myApp.service('myFirst', ['$http', function($http){
    var version = 'default';

    this.sendRequest = function(url){
			return $http({
				url:url,
          	cache:true,
          	method:'get'
		});
	};
    this.setVersion = function(v){
        version = v;
    };
    this.getVersion = function(){
        return version;
    }

}]);
```

以上两种写法，是无法再myApp中进行config配置的，如果硬要用下面的代码进行配置，也可以试一下

```javascript
var myApp = angular.module('myApp', []);

//这里进行配置
myApp.config(['myFirstProvider', function(myFirstProvider){
    var o = myFirstProvider.$get();

    o.setVersion('this was modified by provider');
    console.log(myFirstProvider.$get());
}]);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
  		myFirst.sendRequest('./data.json').success(function(json){
            console.log(myFirst);
            console.log(myFirst.getVersion());
        });
  }
}]);

myApp.service('myFirst', ['$http', function($http){
    var version = 'default';

    this.sendRequest = function(url){
			return $http({
				url:url,
          	cache:true,
          	method:'get'
		});
	};
    this.setVersion = function(v){
        version = v;
    };
    this.getVersion = function(){
        return version;
    }
}]);
```

运行起来，点击页面上的按钮，发现我想要初始化的时候配置的version的值，没有效果，也并没什么卵用，虽说通过provider.$get()，获取到了东西……

**写法3**

```javascript
var myApp = angular.module('myApp', []);

myApp.config(['$provide', function($provide){
    $provide.provider('myFirst', function(){
        var version = 'default';

        this.setVersion = function(v){
            version = v;
        };
        this.getVersion = function(){
            return version;
        };
      	//这个method必须有重构
        this.$get = function(){
            return this;
        }
    });
}]);

myApp.config(['myFirstProvider', function(myFirstProvider){
    console.log(myFirstProvider);
    myFirstProvider.setVersion('this was modified by provider');
}]);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
      console.log(myFirst);
      console.log(myFirst.getVersion());
  }
}]);
```

或者这样

```javascript
var myApp = angular.module('myApp', []);

myApp.config(['$provide', function($provide){
    $provide.provider('myFirst', {
        version:'default',
        setVersion:function(v){
            this.version = v;
        },
        getVersion:function(){
            return this.version;
        },
      	//这个method必须有重构
        $get:function(){
            return this;
        }
    });
}]);

/**
 *由provider注册的服务，是可以通过provider进行配置，通过这种方式注册的服务，
 *配置必须放在注册服务的后面
 */
myApp.config(['myFirstProvider', function(myFirstProvider){
    console.log(myFirstProvider.getVersion());
    myFirstProvider.setVersion('this was modified by provider');
}]);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
      console.log(myFirst);
      console.log(myFirst.getVersion());
  }
}]);
```

**写法4**

```javascript
var myApp = angular.module('myApp', []);

myApp.config(['$provide', function($provide){
    //第二个参数为constructor
    $provide.service('myFirst', function(){
        var version = 'default';

        this.setVersion = function(v){
            version = v;
        };
        this.getVersion = function(){
            return version;
        };
      	//这个method必须有重构
        this.$get = function(){
            return this;
        }
    });
}]);

//无法通过provider进行配置
/*myApp.config(['myFirstProvider', function(myFirstProvider){
    console.log(myFirstProvider);
    myFirstProvider.setVersion('this was modified by provider');
}]);*/

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
      console.log(myFirst);
      //可以通过这里进行配置
      myFirst.setVersion('ssssssssssssss');
      console.log(myFirst.getVersion());
  }
}]);

```

**写法5**(不完全)

```javascript
var myApp = angular.module('myApp', []);

myApp.config(['$provide', function($provide){
    //第二个参数为a string, a number, an array, an object or a function
    $provide.value('myFirst', {
        version:'default',

        setVersion:function(v){
            this.version = v;
        },
        getVersion:function(){
            return this.version;
        }
    });
}]);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
      console.log(myFirst.getVersion());
      //可以通过这里进行配置
      myFirst.setVersion('ssssssssssssss');
      console.log(myFirst.getVersion());
  }
}]);

```

**写法6**

```javascript
var myApp = angular.module('myApp', []);

myApp.config(['$provide', function($provide){
    //第二个参数为 a string, a number, an array, an object or a function
    $provide.constant('myFirst', {
        version:'default',

        setVersion:function(v){
            this.version = v;
        },
        getVersion:function(){
            return this.version;
        }
    });
}]);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
      console.log(myFirst.getVersion());
      //可以通过这里进行配置
      myFirst.setVersion('ssssssssssssss');
      console.log(myFirst.getVersion());
  }
}]);

```

**写法7**

```javascript
var myApp = angular.module('myApp', []);

var myFirst = function(){
    this.list = [];
};

myApp.service('myFirst', myFirst);

myApp.config(['$provide', function($provide){
    $provide.decorator('myFirst', function($delegate){
        $delegate.addItem = function(v){
            this.list.push(v);
        }
        $delegate.logItem = function(v){
            console.log(this.list);
        }

        return $delegate;
    });
}]);

myApp.controller('ServiceController',
                 ['$scope',
                  'myFirst',
                  function($scope, myFirst){
  $scope.btnClick = function(){
      myFirst.addItem(+new Date);
      console.log(myFirst.logItem());
  }
}]);
```

*以上的如果想通过config的方式对注册的服务进行相应的配置，必须要在注册代码的后面通过对应的服务名+provider进行配置，如果放在注册的代码前面会报错*

