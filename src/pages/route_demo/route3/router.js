import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Info from "./Info";
import About from "../route1/About";
import Topics from "../route1/Topics";
import Home from './Home'
import NoMatch from './NoMatch'

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:mainId" component={Info}/>
                            </Main>
                        }/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Home>
            </Router>
        );
    }
}
