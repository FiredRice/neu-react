import { Route, Switch, useHistory } from 'react-router-dom';
import { useAsyncEffect } from 'ahooks';
import LoadingPage from '../loading';
import Home from '../home';

const PrimaryRoutes = () => {
    const history = useHistory();

    useAsyncEffect(async () => {
        history.replace('/home');
    }, []);

    return (
        <Switch>
            <Route path='/' exact component={LoadingPage} />
            <Route path='/home' component={Home} />
        </Switch>
    );
};

export default PrimaryRoutes;
