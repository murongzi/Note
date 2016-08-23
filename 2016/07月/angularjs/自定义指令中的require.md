#### 自定义指令中的require

*require参数可以为字符串或数组。require会将参数对应的控制器注入到指令中，并将其作为当前指令的链接函数的第四个参数。*

```javascript
require:'ngModel'
//or
require:['ngModel']
```

require参数的值可以通过下面的前缀进行修饰，会改变查找控制器时的行为：



**？**

如果当前指令中没有找的所需的控制器，会将null作为link函数的第四个参数



**^**

如果添加了^前缀，指令会在上游的指令链中查找require参数对应的控制器



**?^**

组合起来，可选择地加载需要的指令并在父指令链中进行查找



**没有前缀**

指令将在自身所提供的控制器中进行查找，如果没有找到任何控制器（或具有指定名字的指令）会抛出一个错误



**一、**没有前缀

**1：**页面结构

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>指令中的require作用</title>
		<script src="../../libs/angular/angular.js"></script>
	</head>
	<body>
		<div ng-app="myApp">
			<div ng-controller="myController">
				<my-directive/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

javascript结构*【无require】*

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){

});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		link:function(scope, element, attrs, ctrl){
			console.log(ctrl);
		}
	}
});
```

控制台打印出undefined，第四个参数没有东西

**2：**页面结构

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
				<my-directive/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>

```

javascript结构

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){

});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		require:'ngModel',
		link:function(scope, element, attrs, ctrl){
			console.log(ctrl);
		}
	}
});
```

没有前缀的时候，这时候控制台报错

*angular.js:11383 Error: [$compile:ctreq] Controller 'ngModel', required by directive 'myDirective', can't be found!*

如果代码更改为

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
				<my-directive ng-model="modelA"/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

脚本代码更改为

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){

});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		require:'ngModel',
		link:function(scope, element, attrs, ctrl){
			console.log(ctrl);
		}
	}
});
```

**二、**？前缀

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
				<my-directive  ng-model="modelA"/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

脚本结构

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){

});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		require:'?ngModel',
		link:function(scope, element, attrs, ctrl){
			console.log(ctrl);
		}
	}
});
```

这个时候控制台打印出了angular封装的对象

*如果这个时候页面的结构更改为*

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
				<div  ng-model="modelA"></div>
				<my-directive />
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
或者更该为
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
				<my-directive />
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>

```

这个时候按照 **?** 前缀的规则，link的第四个参数将为null，因为当前指令上没有使用ng-model的控制器，所以控制台打印出null

**三、**^ 前缀

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
			<div ng-controller="myController"  ng-model="modelA">
				<my-directive />
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>

```

脚本的结构

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){

});

myApp.directive('myDirective', function(){
	return {
		restrict:"EA",
		require:'^ngModel',
		link:function(scope, element, attrs, ctrl){
			console.log(ctrl);
		}
	}
});
```

*^前缀的规则是，会在上游**指令链**中查找对应的控制器，上面的页面结构中的ngModel指令是放在了带有ng-controll的指令上，这样就可以了，必须是在指令上*

如果没有放在指令上，页面结构更改为

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
              <div ng-model="modelA"></div>
              <my-directive/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

指令的父级指令对应的没有使用ngModel指令，所以会报错**是在父级上找的指令，同级兄弟指令无用** 

**四、**?^组合前缀

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
			<div ng-controller="myController" ng-model="modelA">
                <!--当前div不为angular的指令，所以会报错-->
              	<my-directive/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
或者为
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
                <!--当前div不为angular的指令，所以会报错-->
              	<my-directive  ng-model="modelA"/>
			</div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

上面两者都可

