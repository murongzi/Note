#### angularjs自定义指令中的scope参数

scope绑定策略 **[就是本指令内部对数据的访问，想从父级scope上共享数据]**

* 本地作用于属性：**@**
* 双向绑定：**=**
* 父级作用域绑定：**&**



为什么要有这个，比如说有一个页面结构

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>ngChange测试</title>
		<script src="../../libs/angular/angular.js"></script>
	</head>
	<body>
		<div ng-app="myApp">
			<div ng-controller="myController">
				<div>
					<button ng-click="btnClick()">我是指令外面的按钮</button>
				</div>
              	<my-directive></my-directive>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

脚本结构

```javascript
var myApp = angular.module('myApp', []),

	template = [
			'<div>',
			'	to somebody:<input ng-model="tosb"/>',
			'</div>',
			'<div>',
			'	from somebody:<input ng-model="fromsb"/>',
			'</div>',
			'<div>',
			'	content:<input ng-model="content"/>',
			'</div>',
			'<div><button>我是里面的按钮</button></div>'
	].join(''),
    myScope;

myApp.controller('myController', function($scope){
	myScope = $scope;
});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		template:template,
      	scope:false,
		link:function(scope, element, attrs, ctrl){
          	//output为true，引用类型全等，只能是同一个对象了
			console.log(myScope === scope);
          	//若配置项中的scope设置为true
          	//console.log(myScope === scope);//output false;
		}
	}
});
```

scope这个参数忽略，就是默认值false，效果和配置为false一致。这个时候**当前指令myDirective中的scope是和父级指令中的scope共用，即为同一个**，也就是说为false的时候，不会为该指令创建新的scope。

如果将这个scope设置为true，那么link中的output为false，这个时候该指令**拥有自己的独立的scope，并且这个指令是从父级指令*[myController]*中继承过来的，prototype设置为myController.scope *[具体实现未查看代码，这里只是为了方便理解]*，所以这个时候 prototype设置为myController中scope中定义的model在myDirective指令中是可以直接使用的**

```javascript
var myApp = angular.module('myApp', []),

	template = [
			'<div>',
			'	to somebody:<input ng-model="tosb"/>',
			'</div>',
			'<div>',
			'	from somebody:<input ng-model="fromsb"/>',
			'</div>',
			'<div>',
			'	content:<input ng-model="content"/>',
			'</div>',
			'<div><button>我是里面的按钮</button></div>'
	].join(''),

	myScope;

myApp.controller('myController', function($scope){
	myScope = $scope;

	$scope.tosb = 'tosb';
	$scope.fromsb = 'fromsb';

	$scope.btnClick = function(){

	};
});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		template:template,
		link:function(scope, element, attrs, ctrl){
		}
	}
});
```

这个时候，指令中对应的ng-model的值，为myController指令中定义在scope上的数据



当scope配置项的值为对象的时候，是什么情况，保持页面结构不动

```javascript
var myApp = angular.module('myApp', []),

	template = [
			'<div>',
			'	to somebody:<input ng-model="tosb"/>',
			'</div>',
			'<div>',
			'	from somebody:<input ng-model="fromsb"/>',
			'</div>',
			'<div>',
			'	content:<input ng-model="content"/>',
			'</div>',
			'<div><button>我是里面的按钮</button></div>'
	].join(''),

	myScope;

myApp.controller('myController', function($scope){
	myScope = $scope;

	$scope.tosb = 'tosb';
	$scope.fromsb = 'fromsb';

	$scope.btnClick = function(){

	};
});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		template:template,
      	scope:{},
		link:function(scope, element, attrs, ctrl){
		}
	}
});
```

这个时候两个输入框to somebody和from somebody对应的ng-model没有实时和myController指令中的modeld对应显示。

解决这个问题就用到了开头的  **@  =  &**  这三个绑定策略

页面结构

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>ngChange测试</title>
		<script src="../../libs/angular/angular.js"></script>
	</head>
	<body>
		<div ng-app="myApp">
			<div ng-controller="myController">
				<div>
					<button ng-click="onsendOuter()">我是指令外面的按钮</button>
					<div>发给某人：<input ng-model="tosbOuter" /></div>
					<div>来自某人：<input ng-model="fromsbOuter" /></div>
					<div>内容: <input ng-model="content"/></div>
					<div>来个分割线</div>
					<hr>
				</div>
              	<my-directive tosb-inner="{{tosbOuter}}" fromsb-inner="fromsbOuter" onsend-inner="onsendOuter()" content="content"></my-directive>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

脚本结构

```javascript
var myApp = angular.module('myApp', []),

	template = [
			'<div>',
			'	to somebody:<input ng-model="tosbInner"/>',
			'</div>',
			'<div>',
			'	from somebody:<input ng-model="fromsbInner"/>',
			'</div>',
			'<div>',
			'	content:<input ng-model="content"/>',
			'</div>',
			'<div><button ng-click="onsendInner()">我是里面的按钮</button></div>'
	].join(''),

	myScope;

myApp.controller('myController', function($scope){
	myScope = $scope;

	$scope.tosbOuter = 'tosb';
	$scope.fromsbOuter = 'fromsb';

	$scope.onsendOuter = function(){
		console.log('tosbOuter: ' + $scope.tosbOuter + ' ======= fromsbOuter: ' + $scope.fromsbOuter);
	}

});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		template:template,
		scope:{
			tosbInner:'@',
			fromsbInner:'=',
			onsendInner:'&',
			content:'='
		},
		link:function(scope, element, attrs, ctrl){
		}
	}
});
```

**scope配置项配置为对象的时候，可以实现作用域scope与父作用域的隔离，父作用域无法访问本地指令不想暴露的数据**

