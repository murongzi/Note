import React from "react";
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from "react-redux";
import Button from 'antd/lib/button';
import {IDetailModel} from './IDetail';
import * as actions from './action';
import 'antd/dist/antd.css';

import Tabs from "../../components/Tabs";
import TabModel from "../../components/Tabs/model/tab.model";

interface IStateProps {
  DetailReducers?: IDetailModel;
  routeParams?:any
}

interface IDispatchProps {
    actions?:any
}

interface IDetailContainer extends IStateProps, IDispatchProps {
}

const mapStateToProps = (state:IStateProps, ownProps) => Object.assign({}, ownProps, {DetailReducers:state.DetailReducers});
const mapDispatchToProps = (dispatch: Dispatch<any>) => Object.assign({}, {actions:bindActionCreators<any>(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(class Detail extends React.Component<IDetailContainer> {
    constructor(props:IDetailContainer, context) {
        super(props, context);
    }

    componentWillMount() {
        const {routeParams:{id}} = this.props;

        this.props.actions.getDetail({No:id});
    }

    render() {
        let dom:React.ReactNode = <span>span</span>;

        let o = [
            new TabModel({id:1, title:"name1"}), 
            new TabModel({id:2, title:"name2"}), 
            new TabModel({id:3, title:"name3"})
        ];

        return (<div>
            Detail
            <a href="#">to home</a>

            {this.renderUI()}

            {dom}

            <Tabs tabs={ o } hasMore={false}/>
        </div>)
    }

    renderUI() {
        const {DetailReducers:{detailShow}} = this.props;

        if (!detailShow) return <div>未查到数据</div>

        return (
                <div style={{color:"red"}}>
                    <div>序号：{detailShow.id}</div>
                    <div>姓名：{detailShow.name}</div>
                    <div>年龄：{detailShow.age}</div>
                </div>
        );
           
    }
});






//其他测试代码
/* interface O {
    test:string;
    bb:string
}

let b:keyof O = "test"; */

/* type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n:NameOrResolver) : Name{
    if (typeof n == "string") {
        return n;
    } else {
        return n();
    }
}

getName(function() {
    return "test"
}) */




/* interface IFun {
    foo():string;
}

let o:IFun = {
    foo:function() {
        return '123123';
    }
}

o.foo(); */


/* function Fun<number>(arg) {
console.log(arg);
} */

/* interface AA {
    name:string
}

function identity<AA, String>(name:string, na:string):number {//IArguments
    console.log(name.length, na);
    return name.length;
}

identity<AA, String>('xxxxxxxx', "213"); */

/* function identity<string[]>(arg:string[]):number {//IArguments
    console.log(arg.length);
    return arg.length;
}

identity(["fasdf"])
 */


/* class Employee {
    private _fullName:string;
    private _fullName2:string;

    get fullName():string {
        return this._fullName;
    }

    set fullName(value:string) {
        this._fullName = value;
    }

    get fullName2():string {
        return this._fullName2;
    }

    set fullName2(value:string) {
        this._fullName2 = value;
    }
}

var em = new Employee();

debugger
em.fullName = "test";
console.log(em.fullName); */





/* class Animal {
    private name:string;
    num:number = 1000;

    constructor(theName:string) {this.name = theName;}

    getName() {
        return this.name;
    }

    static aaa = function() {
        console.log('test');
    }
}

class Rhino extends Animal {
    constructor() {super('Rhino');}
}

class Employee {
    private name:string;
    constructor(theName:string) {this.name = theName;}
}

let animal:Rhino = new Animal('Goat');

let rhino = new Rhino();

let employee = new Employee('Bob');

animal = rhino;

debugger;

console.log(animal.getName()); */
