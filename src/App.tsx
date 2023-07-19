import { BrowserRouter, MemoryRouter, Switch, Route } from 'react-router-dom';
import PrimaryRoutes from './pages/layouts/PrimaryRouter';
import './style/index.less';

const App = () => {
    return (
        <BrowserRouter>
            <MemoryRouter>
                <Switch>
                    <Route path='/' component={PrimaryRoutes} />
                </Switch>
            </MemoryRouter>
        </BrowserRouter>
    );
};

export default App;