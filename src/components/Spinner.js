import React from 'react';

export default class Spinner extends React.Component {
    render () {
        return (
            <div className="spinner">
                Loading...
                <br />
                <br />
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        )
    }
}