### MVC与MVVM

后端发展久远，相比前端更为成熟，MVC架构模式应用在后端也更加清晰。近几年，前端的迅速发展，自动web2.0的概念提出到现在，富客户端的应用也越来越多。JavaScript的角色也从人人不屑的小角色，发展成为现在承载着用户体验的重要角色。从简单的特效转变为越来越复杂的逻辑都会放在前端处理。

[Google](www.google.com) 自主开发的浏览器Chrome，自从与Webkit分道扬镳之后，为了提升JavaScript的运行效率，开发了V8……

后来Ryan Dahl这个人，通过开源后的V8，将JavaScript应用到了服务器端，虽然现在NodeJs的应用场景在即时通讯、前端自动化、各种中间件。应用的场景虽不是太多，但现在各大公司都在尝试，下一块的蛋糕应该就是它了，额，与主题有所偏差，但应用在了服务器端，恩，那后端的一些场景就能够复制到NodeJS中（真希望JS中数字的精度能有所提高）。

好吧，扯远了……

#### 什么是MVC

* **M**(Model) ：数据模型
* **V**(View) ：视图（前端中叫做用户界面，UI界面）
* **C**(Controller) ：控制器（业务逻辑）


用户临幸一个网站，并不是只是看看，相信网站的站长或者运营团队并不是这样希望的。个人站可能会有广告，给一些大网站做导流，就是广告收入。购物类的网站运营人员更想要用户的信息能够持久化到数据库中，并且能够发生购买行为，产生收益。

那么各自的功能是什么，又是怎样协调的？

**V** 即使View，直接呈现在用户面前，也就是HTML和CSS。

用户进入网站中最直接看到页面的标题，图片等，就是开发人员口中的View层

假设用户想要注册，填完信息后，点击注册，然后下次进入这个网站只要登录就可以了。是因为用户的信息已经被持久化到后端的数据库中。

用户点击注册按钮，JavaScript需要做逻辑处理，数据格式校验，完整性校验，把数据组织成对应的结构给到后端，进行持久化操作。

那么用户通过点击按钮，也就是**事件**（Event），来实现业务逻辑，即：

**C** 即Controller，不管是PC端还是移动端，用户与界面进行交互只能通过鼠标，键盘，或者手势点击这三种简单的方式。（*还有语音*）

**鼠标点击**与**enter回车**这两个最常用数据持久化的操作。

链接标签`<a>Click Me</a>`，通过鼠标点击，可以在JS中通过监听click事件，也可以通过href给一个锚点（hashchange），或者是一个服务器的RESTful接口，whatever……，that's enough，我只想说，Controller可以由Event，也可以由Router，来承担这个角色。

还是刚刚用户注册的那个功能，通过Controller，数据输入完整了，合法性也满足要求了，组织好的数据结构给到后端，通过:

* AJax
* Form表单提交
* JSONP
* 实例化一个Image（`var img = new Image();img.src="RESTful接口"`）
* iframe.src
* …

好吧，我不列了……

就是通过以上的方式去和后端进行交互

**M** 即Model，就是我们组织好的数据（承接上面的那个注册的提交功能来说的），给到后端接口的数据，持久化。

用户通过**View**界面，发起业务逻辑**Controller**（*事件*或者*Router*），最终组织成符合要求的数据**Model**，通过RESTful接口，提交后端进行持久化（就是入库了）



还有一个MVVM，未完待续……



```
参考资料：
http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html

http://www.ruanyifeng.com/blog/2007/11/mvc.html

http://kb.cnblogs.com/page/120678/

https://blog.nodejitsu.com/scaling-isomorphic-javascript-code/

https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel

http://www.teehanlax.com/blog/model-view-viewmodel-for-ios/

https://developer.apple.com/library/ios/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html

http://www.infoq.com/cn/news/2011/12/mvvm-frameworks-net

https://msdn.microsoft.com/zh-cn/magazine/dn745866.aspx
```





