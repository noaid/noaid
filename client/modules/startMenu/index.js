/**
 * Created by yeanzhi on 2018/8/4.
 */
'use strict';
import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'rabjs';

import Layer from '../../components/layer';
import { stop, contains } from '../../libs/dom';

@connect((state) => ({
    startMenu: state.startMenu
}))
export default class StartMenu extends Component {
    componentDidMount() {
        this.target = $('.noaid-layer-start-menu')[0];
        setTimeout(() => {
            $(document).on('click', this.otherDOMClick);
        }, 0);
    }

    componentWillUnmount() {
        $(document).off('click', this.otherDOMClick);
    }

    closeLayer = () => {
        this.props.dispatch({ type: 'startMenu.toggle' });
    };
    otherDOMClick = (e) => {
        let node = e.target;
        let target = this.target;
        console.log(node, target, contains(target, node));
        if (!contains(target, node)) {
            this.closeLayer();
        }
    };
    render() {
        return (
            <Layer
                className="noaid-layer-start-menu"
                style={{
                    display: this.props.startMenu.open ? 'block' : 'none',
                    zIndex: 10000,
                    cursor: 'default'
                }}
            >
                <div>zhelishi kaishi caidan</div>
            </Layer>
        );
    }
}
