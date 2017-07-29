import React from 'react';

export default class Programmer extends React.Component {

    showInfo(e) {
        e.preventDefault();
        this.props._fetchProgrammer(this.props.data.login);

        return false;
    }

    render() {
        let data = this.props.data;

        return (
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="card programmer-card">
                    <img className="card-img" src={data.avatar_url} alt="Card image cap" />
                    <div className="card-block">
                        <h6 className="card-title">{data.login}</h6>
                        <p className="card-text"><small><b>ID:</b> {data.id}</small></p>
                        <a href="#" onClick={(e) => this.showInfo(e)} className="card-link">Info</a>
                    </div>
                </div>
            </div>
        )
    }
}