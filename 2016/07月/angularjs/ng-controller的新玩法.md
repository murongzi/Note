#### ng-controller

**传统玩法**

页面结构

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>angularjs指令</title>
		<script src="../libs//angular/angular.js"></script>
	</head>
	<body>
		<div ng-app="myApp">
			<div ng-controller="myCtrl">
				<div>{{name}}</div>
				<div><input ng-model="name" style="width:300px;"/></div>

				<button ng-click="btnClick()">Click me!</button>
			</div>
		</div>
		<script src="./index.js"></script>
	</body>
</html>
```

脚本结构

```javascript
//依赖注入
var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', function($scope){
	var basicStr = 'this is a test!';
	$scope.name = basicStr;

	$scope.btnClick = function(){
		$scope.name = basicStr + (+new Date);
	}
});
```



**新玩法**

页面结构

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>angularjs指令</title>
		<script src="../libs//angular/angular.js"></script>
	</head>
	<body>
		<div ng-app="myApp">
			<div ng-controller="myCtrl as myVar">
				<div>{{myVar.name}}</div>
				<div><input ng-model="myVar.name" style="width:300px;"/></div>

				<button ng-click="myVar.btnClick()">Click me!</button>
			</div>
		</div>
		<script src="./index.js"></script>
	</body>
</html>
```

脚本结构

```javascript
//依赖注入
var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('myCtrl', function(){
	var basicStr = 'this is a test!';
	this.name = basicStr;

	this.btnClick = function(){
		this.name = basicStr + (+new Date);
	}
});
```

