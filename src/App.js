import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './reducers/'
import Users from './components/users/Users';
import Programmers from './components/programmers/Programmers';
import css from './App.scss';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="text-center">
                    <h1>App is ready!</h1>
                </div>
                <h1 className="text-center">Programmers</h1><br />
                <Programmers />
                <h1 className="text-center">Users</h1><br />
                <Users />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);