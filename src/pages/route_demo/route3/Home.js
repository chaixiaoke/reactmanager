import React from 'react'
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/imooc">imooc</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}
