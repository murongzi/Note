### Function的书写格式

#### 1: ES3，ES5…都支持的命名函数和匿名函数

```typescript
function add (x, y) {
  return x + y;
};

let myAdd = function(x, y){return x + y};
```

#### 2:

```typescript
function add(x:number, y:number):number{
  return x + y;
}

add(20, 15);

let myAdd = function(x: number, y: number): number { return x+y; };
```

编译成ES5

```javascript
function add(x, y) {
    return x + y;
}
add(20, 15);

var myAdd = function (x, y) { return x + y; };
```

*参数add(x:number, y:number), 这个括号的x:number和 y:number，这个意思是x，y必须为数字类型的，而最靠近花括号:number表示的意思add的返回值也必须为数字类型，否则在编译的时候，会报error TS2322: Type 'string' is not assignable to type 'number'.这类的错误*

