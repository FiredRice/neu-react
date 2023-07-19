import { init } from '@neutralinojs/lib';
import DisableDevtool from 'disable-devtool';
import FiredRice from './core';
import middlewares from './middlewares';
import App from './App';

const app = new FiredRice();

app.use(middlewares);

app.injectRouters(<App />);

app.start(document.getElementById('root'));

if (process.env.NODE_ENV !== 'development') {
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