import React, { Component } from 'react';

class SuccessLaunch extends Component {

    constructor(props) {
        super(props)
    }

    successLaunch = (value) => {
        this.props.filterSuccessLaunch(value)
    }

    render() {
        return (
            <div>
            <div className="filter-details">
            <span><u>Successful Launch</u></span>
        </div>
        <div className="row top-buffer">
            <div className="col-md-6 col-xs-6" align="center">
                <button type="button" class="btn btn-success" onClick={() => this.successLaunch(true)}>True</button>
            </div>
            <div className="col-md-6 col-xs-6" align="center">
                <button type="button" class="btn btn-success" onClick={() => this.successLaunch(false)}>False</button>
            </div>
        </div>
            </div>
        );
    }
}

export default SuccessLaunch;