#### angularjs 指令 directive 了解

一个栗子

**HTML代码**

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>angularjs指令</title>
		<script src="../libs//angular/angular.js"></script>
		<script src="../libs/angular-resource/angular-resource.js"></script>
	</head>
	<body>
		<div ng-app="myApp">
			<div ng-controller="myController">
				<hello-world/>
			</div>
			<div hello-world></div>
			<div hello:world></div>
			<div class="hello-world"></div>
		</div>

		<script src="./index.js"></script>
	</body>
</html>
```

**JavaScript代码**

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	//TODO
});

myApp.directive('helloWorld', function(){
	return {
		restrict:'AE',
		//replace:true,//将这行代码注释掉，到dev tool中查看下DOM的区别
		template:"<h3>Hello World!☞☞☞☞☞My name is Jack!</h3>"
	}
});
```

angularjs中directive方法接收两个参数：

* name:指令名字，视图中引用的指令
* factory_function:这个是个函数，返回一个对象，内部定义了这个指令的所有的行为



##### restrict

该参数告诉angularjs这个指令在DOM中可以以何种方式被声明，默认是值为A，即属性形式来进行声明

**E（元素）**

```html
<div>
  <my-directive/>
  <my-directive></my-custom>
</div>
```

**A(属性，默认值)**

```html
<div my-directive></div>
```

**C(类名)**

```html
<div class="my-directive"></div>
```

**M(注释)**

……



##### terminal

该参数值为布尔类型的，值为true/false

这个参数用来告诉angularjs停止运行当前元素上比本指令优先级低的指令，优先级与当前指令相同还是会继续执行的

比如ngView和ngIf。ngIf的优先级高于ngView。如果ngIf的表达式值为true，ngView就可以正常执行，

如果ngIf值为false，那么ngView就不会被执行



**template**

该参数为可选的，只可为一下两种形式

* 一段HTML文本
* 一个可以接收两个参数的函数，，参数为eElement和tAttrs，并返回一个表示模板的字符串






​			
​		
​	

