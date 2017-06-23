import React, {Component} from "react";

import { Link } from 'react-router'

export default class extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Home
                <Link to="/detail/123">Click me</Link>
            </div>
        );
    }
};