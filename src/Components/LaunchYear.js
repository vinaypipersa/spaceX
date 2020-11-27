import React, { Component } from 'react';

class LaunchYear extends Component {
    constructor(props) {
        super(props)
    }

    launchYear = (value) => {
        this.props.filterSuccessYear(value)
    }
    render() {
        return (
            <div>
            <div className="filter-details">
            <span><u>Launch Year</u></span>
        </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2006)}>2006</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2007)}>2007</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2008)}>2008</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2009)}>2009</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2010)}>2010</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2011)}>2011</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2012)}>2012</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2013)}>2013</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2014)}>2014</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2015)}>2015</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2016)}>2016</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2017)}>2017</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2018)}>2018</button>
                </div>
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2019)}>2019</button>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-6 col-xs-6" align="center">
                    <button type="button" class="btn btn-success" onClick={() => this.launchYear(2020)}>2020</button>
                </div>
            </div>
            </div>
        );
    }
}

export default LaunchYear;