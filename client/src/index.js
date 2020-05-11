import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import './App.css';
import { Landing, Home, Project } from './pages/Pages';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from "react-router-dom";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={withRouter(Landing)} />
                    <Route path="/home" component={withRouter(Home)} />
                    <Route path="/projects" component={withRouter(Project)} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
