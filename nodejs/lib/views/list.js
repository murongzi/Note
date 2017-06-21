import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>this is a detail page</p>
                <a href="/detail">go detail</a>
            </div>
        );
    }
}