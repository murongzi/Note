import React from "react";
import Dialog from "./dialog";
import Model from "./model";

//提供方的入口脚本
class App extends React.Component{
    constructor(props) {
        debugger;
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        debugger
    }

    render() {
        return (
            <div>
                <button onClick={() => console.log("works fine!")}>Click Me!</button>

                {
                    this.props.random ? <Dialog random={this.props.random}/> : <Model />
                }
            </div>
        );
    }
}

//主动调用使用方暴露的全局方法
window.getElementFromThirdPart(App);