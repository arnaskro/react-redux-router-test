import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './reducers/'
import Users from './components/users/Users';
import Programmers from './components/programmers/Programmers';
import css from './App.scss';
import { BrowserRouter, Route, Link }  from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <br />
                    <div className="text-center">
                        <Link to={'/'} className="btn btn-link">Home</Link>
                        <Link to={'/programmers'} className="btn btn-link">Programmers</Link>
                        <Link to={'/users'} className="btn btn-link">Users</Link>
                    </div><br />
                    <Route exact path="/" render={(props) => {
                        return (
                            <div className="text-center">
                                <h1>App is ready!</h1>
                            </div>
                        )
                    }} />
                    <Route exact path="/programmers" render={(props) => {
                        return (
                            <div> 
                                <h1 className="text-center">Programmers</h1><br />
                                <Programmers />
                            </div>
                        )
                    }} />
                    <Route exact path="/users" render={(props) => {
                        return (
                            <div>
                                <h1 className="text-center">Users</h1><br />
                                <Users />
                            </div>
                        )
                    }} />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);