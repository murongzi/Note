import React from "react";

export default class extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>dialog--------{this.props.random || "父页面未设置！！！"}</div>
        );
    }
}
