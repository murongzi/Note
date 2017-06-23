import React, {Component} from "react";
import { Link } from 'react-router'

export default class extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>test
                <Link to="/">go main page</Link>
            </div>
        );
    }
};