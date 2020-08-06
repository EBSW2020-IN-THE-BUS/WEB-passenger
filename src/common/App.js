import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    RouteMapPage,
    BusInfoPage
} from 'containers';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={RouteMapPage} />
                    <Route path="/busInfo" component={BusInfoPage} />
                    {/* <Route path="/main" component={Main} />
                    <Route path="/device" component={DynamicRoute} />
                    <Route path="/hub" component={DynamicRoute} />
                    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
                    <Route component={NotFound} /> */}
                </Switch> 
            </div>
        );
    }
}

export default App;