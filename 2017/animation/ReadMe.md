##动画
###animation
animation-delay:动画延迟多久执行

animation-duration：动画执行的时间

animation-iteration-count：定义动画循环的次数

* <number>: 具体执行的次数
* infinite：为循环播放

animation-timing-function：动画执行的速度

* ease：逐渐变慢
* ease-in：加速
* ease-out：减速
* ease-in-out：先加速在减速
* linear：匀速
* cubic-bezier：

animation-direction：动画播放的方向

* normal：是向前播放
* alternate：偶数次向前，奇数次向后

[参考](http://www.w3cplus.com/content/css3-animation)


###Transform

1：旋转rotate

2D旋转

```CSS

//语法
//transform: rotate(<angle>);
transform: rotate(30deg);

```
angle为正数则表示顺时针，负数则表示为逆时针

通过transform-origin来定义旋转的中心店


2：扭曲skew

3：缩放

4：scale和移动translate


