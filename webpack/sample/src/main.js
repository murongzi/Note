/*window.autoExec((o) => {
    const {React, ReactDOM} = o;

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>子组件哈哈哈哈哈哈哈哈哈哈哈</div>
            );
        }
    }

    return MyComponent;
});*/
import React from 'react';
export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                this is a test,hahaha
            </div>
        );
    }
};