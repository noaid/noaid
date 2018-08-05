/**
 * Created by ximing on 2018/8/5.
 */
'use strict';
import './index.scss';
import React, { Component } from 'react';
import { parse } from '../../libs/queryString';

export default class Login extends Component {
    render() {
        const parsed = parse(window.location.search);
        console.log(parsed);
        const state = Date.now();
        return (
            <div
                className="login-container"
                style={{
                    backgroundImage:
                        'url(https://s3plus.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/distribute/97b34e93-0d0d-4fb2-a74c-ba207f6a2df6_1533399247569?filename=timg+%281%29.jpeg)'
                }}
            >
                <div className="login-inner">
                    <img src="https://s3plus.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/distribute/46c19d08-25ea-4721-ac27-a7b8fd040c4c_1533399733331?filename=fluidicon.png" />
                    <a
                        href={`https://github.com/login/oauth/authorize?client_id=${
                            parsed['client_id']
                        }&state=${state}&scope=user&redirect_uri=${encodeURIComponent(
                            `${window.location.origin}/oauth/callback?callback_url=${
                                parsed['callback_url']
                            }`
                        )}`}
                    >
                        去登陆
                    </a>
                </div>
            </div>
        );
    }
}
