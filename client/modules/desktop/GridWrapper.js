/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import RGL, { WidthProvider } from 'react-grid-layout';
// const ReactGridLayout = WidthProvider(RGL);
import { Responsive, WidthProvider } from 'react-grid-layout';
const ReactGridLayout = WidthProvider(Responsive);

export default class BasicLayout extends React.PureComponent {
    static defaultProps = {
        className: 'layout',
        items: 20,
        rowHeight: 80,
        onLayoutChange: function() {}
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        return _.map(_.range(this.props.items), function(i) {
            return (
                <div key={i}>
                    <span className="text">{i}</span>
                </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items), function(item, i) {
            const y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: 0,
                w: 2,
                h: 2,
                i: i.toString(),
                isResizable: false
            };
        });
    }

    onLayoutChange(layout) {
        console.log('---->', layout);
        this.props.onLayoutChange(layout);
    }

    render() {
        console.log(this.state.layout);
        return (
            <ReactGridLayout
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                layout={this.state.layout}
                margin={[10, 10]}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}
