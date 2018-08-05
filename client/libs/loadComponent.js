/**
 * Created by ximing on 2018/8/3.
 */
'use strict';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/loading-component/loading';

export default function(loader, { delay = 200, timeout = 10000, Loading = LoadingComponent } = {}) {
    return Loadable({
        loader: () => loader,
        loading: Loading,
        delay: delay,
        timeout: timeout
    });
}
