import FiredRice from './core';
import middlewares from './middlewares';
import App from './App';
import { init } from '@neutralinojs/lib';

const app = new FiredRice();

app.use(middlewares);

app.injectRouters(<App />);

app.start(document.getElementById('root'));

init();