#### TypeScript

typescript的语法是ES2015语法的超集。

包含了ES2015中的的所有的特性【class、module】，并且能够将ts的代码编译成es3，es5的兼容代码



#### 1、枚举

```typescript
const enum Operator {
    ADD = 100,
        DIV = 101,
        MUL = 102,
        SUB = 103
}

function compute(op: Operator, a ? : number, b ? : number) {
    console.log("the operator is" + op);
    // ...
}
```

编译为原生js

```javascript
function compute(op, a, b) {
    console.log("the operator is" + op);
    // ...
}
compute(101 /* DIV */);
```

*typescript的枚举是基于数字的常量，若未用等号赋值， 则从0开始，值依次递增*

### 2、类

```typescript
class BankAccount {
    constructor(public balance: number) {}
    deposit(credit: number) {
        this.balance += credit;
        return this.balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(balance: number) {
        super(balance);//只能在构造函数中调用super，并且不能嵌套在构造函数中嵌套的function中
    }
    writeCheck(debit: number) {
        this.balance -= debit;
    }
}
```

对应的js代码

```javascript
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BankAccount = (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (credit) {
        this.balance += credit;
        return this.balance;
    };
    return BankAccount;
}());
var CheckingAccount = (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(balance) {
        _super.call(this, balance);
    }
    CheckingAccount.prototype.writeCheck = function (debit) {
        this.balance -= debit;
    };
    return CheckingAccount;
}(BankAccount));
```

### 3、给class添加静态的属性

```typescript
class E {
    static hello = "hello";
    static world = "world";
}

let a = new E;
```

编译成原生js

```javascript
var E = (function () {
    function E() {
    }
    E.hello = "hello";
    E.world = "world";
    return E;
}());
var a = new E;
```

### 4、namespace命名空间

```typescript
namespace M{
  var s = 'hello';

  export function f(){
    return s;
  }
}
```

编译后的代码

```javascript
var M;
(function (M) {
    var s = 'hello';
    function f() {
        return s;
    }
    M.f = f;
})(M || (M = {}));
```

### 5、module

页面中的code

```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8" >
    <title>this is a test</title>
  </head>
  <body>
    <script src="//requirejs.org/docs/release/2.3.2/minified/require.js" data-main="./index"></script>
  </body>
</html>
```

index.ts中的code

```typescript
import O = require('./log');

O.message('hello world!!!!!!!!!!!!');

```

log中的code

```typescript
export function message(s:string){
  console.log(s);
}
```

命令行运行

tsc --module amd index.ts

打开页面运行，即可看到控制台打印出的日志



