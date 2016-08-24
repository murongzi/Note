### 自定义指令中对配置项中require自引用指令的解释

先说一下原生JS中的一些问题
```javascript
function A(){
  this.propery = 'this.propery';
  this.show = function(){
    console.log('this.show');
  }
}

var a = new A;

console.log(a.propery);//正常输出
a.show();//正常输出
```
那么下面的结构会出现一些问题

```javascript
function A(){
  this.propery = 'this.propery';
  this.show = function(){
    console.log('this.show');
  }

  /**
   *这里return了一个引用类型的数据，所下面实例化的操作符new，有和没有的效果是一致的，虽然JS引擎是走了new
   *当一个Constructor里面有return，并且这个return的值为引用类型的时候【这两个条件为and】，
   *实例化new Constructor，结果就是Constructor中return的那个引用类型的数据
   **/
  return {};
}

var a = new A;

console.log(a.propery);//output:   undefined
a.show();//会报错，说找不到show方法

```


再来看下angularjs中*自定义指令中对配置项中require自引用指令的使用中有哪些不同的地方*，代码下面。


页面结构
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>自定义指令中对配置项中require自引用指令的解释</title>
    <script src="./angular.js"></script>
  </head>
  <body>
    <div ng-app="myApp">
      <div ng-controller="ionicViewController">
        <ionic-view></ionic-view>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

脚本结构
```javascript
var myApp = angular.module('myApp', []);

myApp.controller('ionicViewController', function ionicViewController($scope){
  $scope.showTest = function(){
    console.log('ionicViewController $scope.showTest');
  };

  this.myProperty = 'this.myProperty';

  this.myMethod = function(){
    console.log('ionicViewController this.showTest');
  }
});

myApp.directive('ionicView', function ionicViewDirective(){
  return {
    restrict:'E',
    require:'ionicView',
    controller:'ionicViewController',
    link:function(scope, element, attrs, ionicViewControll){
      console.log(ionicViewControll.myProperty);

      ionicViewControll.myMethod();
    }
  }
});
```
或者把脚本的结构更改为这样
```javascript
var myApp = angular.module('myApp', []);

myApp.controller('ionicViewController', function ionicViewController($scope){
  $scope.showTest = function(){
    console.log('ionicViewController $scope.showTest');
  };

  this.myProperty = 'this.myProperty';

  this.myMethod = function(){
    console.log('ionicViewController this.showTest');
  }

  return {};//这里返回引用类型
});

myApp.directive('ionicView', function ionicViewDirective(){
  return {
    restrict:'E',
    require:'ionicView',
    controller:'ionicViewController',
    link:function(scope, element, attrs, ionicViewControll){
      console.log(ionicViewControll.myProperty);

      ionicViewControll.myMethod();
    }
  }
});
```
或者把脚本的结构更改为这样
```javascript
var myApp = angular.module('myApp', []);

var ionicViewController = function($scope){
  $scope.showTest = function(){
    console.log('ionicViewController $scope.showTest');
  };

  this.myProperty = 'this.myProperty';

  return {};//这里返回引用类型
}

ionicViewController.prototype.myMethod = function(){
  console.log('ionicViewController this.showTest');
}

myApp.controller('ionicViewController', ionicViewController);

myApp.directive('ionicView', function ionicViewDirective(){
  return {
    restrict:'E',
    require:'ionicView',
    controller:'ionicViewController',
    link:function(scope, element, attrs, ionicViewControll){
      console.log(ionicViewControll.myProperty);

      ionicViewControll.myMethod();
    }
  }
});
```
**上面的三段脚本的output行为一致**

那么这个时候ionicViewControll理应为上面定义的ionicViewController的实例对象
*【angularjs的官方引导文档上的确是这么描述的，而且把定义controller的第二个参数ionicViewController放到外面，并且添加了prototype属性，行为和原型链继承行为一直】*
那么这个时候ionicViewController，综上代码示例，这个ionicViewController的确是一个Constructor的行为，那么为什么我在Constructor中加了```return {}```之后
angular里的表现形式和最上面例子中原生JS的表现形式不一致了！！！



**angular里实际的实现是这样的**
```javascript
//第一步定义了一个空函数
var Constructor = function(){};

//第二步，将ionicViewController的prototype赋值给Constructor的prototype上 参见源码line8348
//当ionicViewController为数组的时候，取最后一项的进行相应的赋值操作
//  myApp.controller('ionicViewController', ['$scope', '$http', function($scope, $http){
//    //TODO CODE
//  }]);
Constructor.prototype = ionicViewController.prototype;

//官方文档上所谓的实例化其实就是这样的[见源码 line8350]，看下面
instance = new Constructor();//这里的对之前的空对象进行了实例化

//在看下面[见源码4118]
fn.apply(self, args);//[line8357]调用$injector.invoke，代码流程转至[见源码line4089]中，fn即是定义controller的第二个参数的引用，即ionicViewController.apply(instance, [$scope, $http])

//最后在将执行完的组装好的instance返回出去[见源码line8358]
return instance;
```
