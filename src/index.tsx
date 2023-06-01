import { init } from '@neutralinojs/lib';
import DisableDevtool from 'disable-devtool';
import FiredRice from './core';
import middlewares from './middlewares';
import App from './App';

const app = new FiredRice();

app.use(middlewares);

app.injectRouters(<App />);

app.start(document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
    const authInfo = require('../.tmp/auth_info.json');
    window['NL_PORT'] = authInfo.port;
    window['NL_TOKEN'] = authInfo.accessToken;
    window['NL_ARGS'] = [];
} else {
    // 禁用控制台
    DisableDevtool({
        clearIntervalWhenDevOpenTrigger: true
    });
}

// 禁用F5
window.onkeydown = function (event: KeyboardEvent) {
    if (event.key === 'F5') {
        event.preventDefault();
    }
};

init();