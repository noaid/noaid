/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import React, { Component } from 'react';
import moment from 'moment';
export default class DateTime extends Component {
    componentDidMount() {
        this.timmer = setInterval(() => {
            this.forceUpdate();
        }, 60000);
    }
    componentWillUnmount() {
        clearInterval(this.timmer);
    }
    render() {
        return (
            <div className="taskbar-datetime">
                <p>{moment().format('HH:mm')}</p>
                <p>{moment().format('YYYY/M/D')}</p>
            </div>
        );
    }
}
