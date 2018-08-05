/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import React, { Component } from 'react';
import AppItem from './appItem';
import { connect } from 'rabjs';
@connect((state) => ({
    apps: state.desktop.apps,
    selectApps: state.desktop.selectApps
}))
export default class ViewPort extends Component {
    render() {
        const { apps, selectApps } = this.props;
        return (
            <div className="viewport-container">
                <div className="viewport-inner">
                    {apps.map((item, index) => (
                        <AppItem selected={selectApps[item.id]} {...item} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}
