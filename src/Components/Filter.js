import React from 'react';
import LaunchYear from './LaunchYear';
import SuccessLaunch from './SuccessLaunch';
import SuccessLand from './SuccessLand';

export default class Filter extends React.Component {

	constructor(props){
		super(props)
	}


  filterSuccessLaunch = (value) => {
    this.props.filterSuccessMainLaunch(value)
	}

	filterSuccessLand = (value) => {
    this.props.filterSuccessMainLand(value)
	}

	filterSuccessYear = (value) => {
    this.props.filterSuccessMainYear(value)
	}

  render() {
    return (
      <div className="filter">
        <div className="filter-details"><h4>Filters</h4></div>
            <LaunchYear filterSuccessYear={this.filterSuccessYear}/>
            <SuccessLaunch filterSuccessLaunch={this.filterSuccessLaunch}/>
            <SuccessLand filterSuccessLand={this.filterSuccessLand}/>
      </div>
    );
  }
}