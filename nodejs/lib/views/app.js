import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>this is a app class</p>
                <a href="/detail">go detail</a>
                <a href="/list">go list</a>
            </div>
        );
    }
}