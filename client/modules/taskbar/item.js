/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import React, { Component } from 'react';
import Icon from '../../components/icon';

export default class TaskbarItem extends Component {
    static defaultProps = {
        onClick: () => {}
    };
    render() {
        const { icon, url, onClick } = this.props;
        return (
            <button onClick={onClick}>
                {do {
                    if (icon) {
                        <Icon type={icon} />;
                    } else {
                        <img src={url} />;
                    }
                }}
            </button>
        );
    }
}
