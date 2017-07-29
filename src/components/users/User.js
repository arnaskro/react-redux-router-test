import React from 'react';

export default class User extends React.Component {

    getName() {
        return this.props.first_name + " " + this.props.last_name;
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: "30px" }}>
                <div className="card">
                    <img className="card-img-top" src={this.props.avatar} alt="Card image cap" />
                    <div className="card-block">
                        <h3 className="card-title">{this.getName()}</h3>
                        <p className="card-text">Hello, my ID is {this.props.id}</p>
                    </div>
                </div>
            </div>
        )
    }
}