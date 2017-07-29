import React from 'react';
import Programmer from './Programmer';
import PropTypes from 'prop-types';
import * as actions from '../../actions/ProgrammerActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../Spinner';

class Programmers extends React.Component {

    listProgrammers() {
        let programmers = this.props.data;

        if (programmers && programmers.length > 0) 
            return programmers.map((x) => <Programmer key={x.id} data={x} _fetchProgrammer={this.props.actions.fetchProgrammer}/>); 
        else if (!this.props.fetched && !this.props.fetching && this.props.error == null)
            this.props.actions.fetchProgrammers();
        else if (!this.props.fetched && this.props.fetching)
            return (<div className="text-center col-sm-12"><Spinner /></div>)
        else if (!this.props.fetched && !this.props.fetching && this.props.error != null)
            alert(this.props.error)
        else if (programmers && programmers.length == 0)
            return (<p className="text-center col-sm-12">There are no programmers!</p>)
        else
            console.log("I dont even know what is going on anymore...")
    }

    render() {
        return (
            <div className="row">
                {this.listProgrammers()}
            </div>
        )
    }
}

Programmers.PropTypes = {
    data: PropTypes.array,
    fetchProgrammers: PropTypes.func,
    fetchProgrammer: PropTypes.func,
    fetched: PropTypes.bool,
    fetching: PropTypes.bool,
    error: PropTypes.any,
}

const mapStateToProps = (state) => {
    return {
        data: state.programmers.data,
        fetching: state.programmers.fetching,
        fetched: state.programmers.fetched,
        error: state.programmers.error
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Programmers);