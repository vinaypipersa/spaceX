import React from 'react';
import './App.css';
import Filter from './Components/Filter';
import List from './Components/List';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    launchedStatus: undefined,
    landStatus: undefined,
    launchYear: undefined
  };

  filterSuccessMainLaunch = (value) => {
    this.setState(() => ({ launchedStatus: value }));
  }

  filterSuccessMainLand = (value) => {
    this.setState(() => ({ landStatus: value }));
  }

  filterSuccessMainYear = (value) => {
    this.setState(() => ({ launchYear: value }));
  }

  render(){
  return (
    <div className="App">
      <div className="container">
      <h1>SpaceX Launch Programs</h1>
        <div className="row top-buffer">
          <div className="col-md-3 col-xs-3" align="left">
            <Filter filterSuccessMainLaunch={this.filterSuccessMainLaunch} filterSuccessMainLand={this.filterSuccessMainLand} filterSuccessMainYear={this.filterSuccessMainYear}/>
          </div>
          <div className="col-md-9 col-xs-9" align="left">
            <List launchedStatus={this.state.launchedStatus} landStatus={this.state.landStatus} launchYear={this.state.launchYear}/>
          </div>  
        </div>
      </div>
    </div>
  );
}
}


export default App;
