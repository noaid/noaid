/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import rab, { call } from 'rabjs';
import { Route, routerRedux, Redirect, Switch } from 'rabjs/router';
const { ConnectedRouter: Router } = routerRedux;
import config from '../models/config';
import desktop from '../models/desktop';
import startMenu from '../models/startMenu';
import taskbar from '../models/taskbar';
import loadComponent from '../libs/loadComponent';
import WrapContainer from '../components/wrap';
const Desktop = loadComponent(
    import(/* webpackChunkName: "desktop" */ '../modules/desktop/index.js')
);
const Login = loadComponent(import(/* webpackChunkName: "login" */ '../modules/login/index.js'));
export default class BootStrap {
    static getSingleton() {
        return globalSingleton;
    }

    initModels() {
        this.app.addModel(config);
        this.app.addModel(desktop);
        this.app.addModel(startMenu);
        this.app.addModel(taskbar);
    }
    initApp() {
        this.app = rab({
            debug: true,
            initialState: {}
        });
        this.initModels();
        this.app.router(({ history }) => {
            return (
                <Router history={history}>
                    <WrapContainer>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/" component={Desktop} />
                        </Switch>
                    </WrapContainer>
                </Router>
            );
        });
        this.provider = this.app.start();
        window.wendangApp = this.app;
        window.wendangApp.call = call;
    }

    renderApp() {
        ReactDOM.render(
            React.createElement(this.provider),
            document.getElementById('wrap_container')
        );
    }

    init() {
        this.initApp();
        this.renderApp();
    }
}
const globalSingleton = new BootStrap();
