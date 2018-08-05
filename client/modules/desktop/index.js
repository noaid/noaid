/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
import './index.scss';
import React, { Component } from 'react';

import Taskbar from '../taskbar';
import Viewport from './viewport';

export default class Desktop extends Component {
    render() {
        return (
            <div className="desktop-container">
                <div className="desktop-background"></div>
                <Viewport />
                <Taskbar />
            </div>
        );
    }
}
