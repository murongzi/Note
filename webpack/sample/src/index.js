
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory, Link, Redirect} from 'react-router';

var Test = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <App>
                <div>Test页
                    <a href="/">去首页</a>xxxx
                    <a href="users">去用户页</a>
                    哈哈哈哈哈哈哈哈哈 about页面
                </div>
            </App>
        );
    }
};


var App = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.children || ''}
            </div>
        );
    }
};

var Hello =  class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <App>
                Hello页面
                <a href="/">去首页</a>xxxx
                <a href="about">去about页</a>
            </App>
        );
    }
};

var Home = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <App>
                Home页
                <a href="about">about页面</a>xxxx
                <a href="users">去用户页</a>
            </App>
        );
    }
};

render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='about' component={Test} />
            <Route path='users' component={Hello} />
        </Route>
    </Router>
), document.querySelector('#rootApp'));

/*render((
    <Router>
        <Route path="/" component={App}>
            <Route path="/about" component={Test}/>
            <Route path="/users" component={Hello}/>
        </Route>
    </Router>
), document.querySelector('#rootApp'));*/

/*render((
    <Router>
        <Route history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="about" component={Test}/>
                <Route path="users" component={Hello}/>
            </Route>
        </Route>
    </Router>
), document.querySelector('#rootApp'));*/




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