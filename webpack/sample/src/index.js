
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './main';

var Test = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>Test

                <Hello/>
            </div>
        );
    }
};

ReactDOM.render(
    <Hello />,
    document.querySelector('#rootApp')
);





/*class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enen:null
        }
    }

    componentWillMount() {
        var me = this;

        window.autoExec = (callback) => {
            const MyComponent = callback({
                React:React,
                ReactDOM:ReactDOM
            });

            me.setState({
                enen:MyComponent
            });
        }
    }

    _renderMyComponent() {
        return this.state.enen ? <this.state.enen /> : ''
    }

    render(){
        return (
            <div>
                this is a test
                {this._renderMyComponent()}
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.querySelector('#rootApp')
);
*/