import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom";
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Spin from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Message from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/ui/buttons" component={Buttons}/>
                                    <Route path="/ui/modals" component={Modals}/>
                                    <Route path="/ui/loadings" component={Spin}/>
                                    <Route path="/ui/notification" component={Notice}/>
                                    <Route path="/ui/messages" component={Message}/>
                                    <Route path="/ui/tabs" component={Tabs}/>
                                    <Route path="/ui/gallery" component={Gallery}/>
                                    <Route path="/ui/carousel" component={Carousel}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                        <Route path="/order/detail" component={Login}/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
