import React from "react";
import ReactDOM from "react-dom";

/*
 * 提供方的webpack打包，会排除掉react，主动的从window下来拿这个
 */
window.React = React;

ReactDOM.render(class extends React.Component{
    constructor(props) {
        debugger;
        super(props);

        this.state = {
            random:null,
            thirdPartyComponent:null
        };
    }

    componentDidMount() {
        /* 
         * 预先定义一个js方法，放到window下，js执行完了之后，三方脚本会主动调用这个方法
         * 和JSONP类似，只不过这个是用来处理组件的
         * */
        window.getElementFromThirdPart = (thirdPartyComponent) => {
            this.setState({thirdPartyComponent});
        };

        var script = document.createElement("SCRIPT");
        script.src = "提供方脚本地址";

        document.querySelector("head").appendChild(script);
    }

    handleClickMe = () => {
        this.setState({
            random:Math.random().toString(36).substr(2)
        })
    }

    /* render() {
        return (
            <div>
                <button onClick={this.handleClickMe}>Click Me!</button>
                {this.thirdPartyComponent ? <thirdPartyComponent random={this.state.random} /> : ''}
            </div>
        );
    } */
    //上一中方式和下一种方式都可以
    render() {
        return (
            <div>
                <button onClick={this.handleClickMe}>Click Me!</button>
                {this.state.thirdPartyComponent ? React.createElement(this.state.thirdPartyComponent, {
                    random:this.state.random
                }): ''}
            </div>
        );
    }
}, document.getElementById("rootApp"));
