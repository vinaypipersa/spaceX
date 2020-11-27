import React from 'react';
import ListComponents from './ListComponents';

    const List = (props) => (
      <div>
        <ListComponents launchedStatus={props.launchedStatus} landStatus={props.landStatus} launchYear={props.launchYear}/> 
      </div>
    );
    export default List;
  
