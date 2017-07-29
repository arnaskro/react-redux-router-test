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