/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
import './index.scss';
import React, { Component } from 'react';
import Trigger from 'rc-trigger';
import TaskbarItem from './item';
import DateTime from './datetime';
import loadComponent from '../../libs/loadComponent';
const StartMenu = loadComponent(
    import(/* webpackChunkName: "StartMenu" */ '../startMenu/index.js')
);
import { connect } from 'rabjs';
@connect((state) => ({
    startMenuOpen: state.startMenu.open
}))
export default class Taskbar extends Component {
    toggleStartMenu = () => {
        this.props.dispatch({ type: 'startMenu.toggle' });
    };
    render() {
        return (
            <div className="taskbar-container">
                {this.props.startMenuOpen && <StartMenu />}

                <div className="taskbar-left">
                    <TaskbarItem icon="start" onClick={this.toggleStartMenu} />
                </div>
                <div className="taskbar-right">
                    <DateTime />
                    <TaskbarItem icon="inbox-empty" />
                </div>
            </div>
        );
    }
}
