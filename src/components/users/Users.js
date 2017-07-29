import React from 'react';
import User from './User';
import PropTypes from 'prop-types';
import * as actions from '../../actions/UserActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../Spinner';

class PaginationButton extends React.Component {
    paginationButtonClasses(i) {
        return "page-item" + (i == this.props.page ? " active" : "");
    }

    render() {
        return (
            <li onClick={() => this.props._fetchUsers(this.props.value)}
                className={this.paginationButtonClasses(this.props.value)} >
                <span className="page-link">{this.props.value}</span>
            </li>
        )
    }
}

class Users extends React.Component {

    listUsers() {
        let users = this.props.users;

        if (users && users.length > 0) 
            return users.map((usr) => <User key={usr.id} id={usr.id} first_name={usr.first_name} last_name={usr.last_name} avatar={usr.avatar}/>); 
        else if (!this.props.fetched && !this.props.fetching && this.props.error == null)
            this.props.actions.fetchUsers();
        else if (!this.props.fetched && this.props.fetching)
            return (<div className="text-center col-sm-12"><Spinner /></div>)
        else if (!this.props.fetched && !this.props.fetching && this.props.error != null)
            alert(this.props.error)
        else if (users && users.length == 0)
            return (<p className="text-center col-sm-12">There are no users!</p>)
        else
            console.log("I dont even know what is going on anymore...")
    }

    paginationButtons() {
        let btns = [];

        for (var i = 1; i <= this.props.totalPages; i++)
            btns.push(
                <PaginationButton 
                    key={i} 
                    _fetchUsers={this.props.actions.fetchUsers}
                    value={i}
                    page={this.props.page}
                    />
            );

        return btns;
    }

    pagination() {
        if (this.props.totalPages > 0) {
            return (
                <nav aria-label="..." className="myPagination">
                    <ul className="pagination">
                        {this.paginationButtons()}
                    </ul>
                </nav>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.listUsers()}
                </div>
                <div className="row">
                    {this.pagination()}
                </div>
            </div>
        )
    }
}

Users.PropTypes = {
    users: PropTypes.array,
    page: PropTypes.number,
    fetchUsers: PropTypes.func,
    fetched: PropTypes.bool,
    fetching: PropTypes.bool,
    error: PropTypes.any,
    totalUsers: PropTypes.number,
    totalPages: PropTypes.number
}

const mapStateToProps = (state) => {
    return {
        users: state.users.data,
        page: state.users.page,
        fetching: state.users.fetching,
        fetched: state.users.fetched,
        error: state.users.error,
        totalUsers: state.users.totalUsers,
        totalPages: state.users.totalPages
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Users);