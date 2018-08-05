/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'rabjs';
import CancelOrAddSelectItem from './command/cancelOrAddSelectItem';

@connect(() => ({}))
export default class AppItem extends Component {
    openApp = () => {};

    selectApp = () => {
        this.props.dispatch({
            type: 'desktop.exec',
            payload: [new CancelOrAddSelectItem(this.props.id)]
        });
    };

    render() {
        const { name, url, selected } = this.props;
        return (
            <div
                className={classNames({
                    'app-item-outer': true,
                    selected: selected
                })}
                onClick={this.selectApp}
            >
                <div className="app-item-inner" onDoubleClick={this.openApp}>
                    <div className="app-item-icon">
                        <img src={url} alt="" />
                    </div>
                    <div className="app-item-name">{name}</div>
                </div>
            </div>
        );
    }
}
