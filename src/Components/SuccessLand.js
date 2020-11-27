import React, { Component } from 'react';

class SuccessLand extends Component {

    constructor(props) {
        super(props)
    }

    successLand = (value) => {
        this.props.filterSuccessLand(value)
    }
    
    render() {
        return (
            <div>
            <div className="filter-details">
            <span><u>Successful Landing</u></span>
        </div>
        <div className="row top-buffer">
            <div className="col-md-6 col-xs-6" align="center">
                <button type="button" class="btn btn-success" onClick={() => this.successLand(true)}>True</button>
            </div>
            <div className="col-md-6 col-xs-6" align="center">
                <button type="button" class="btn btn-success" onClick={() => this.successLand(false)}>False</button>
            </div>
        </div>
            </div>
        );
    }
}

export default SuccessLand;