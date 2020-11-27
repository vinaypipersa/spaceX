import React from 'react';

export default class ListComponents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }

    componentDidMount() {
      const API =`https://api.spaceXdata.com/v3/launches?limit=100`;
        fetch(API)
          .then(res => res.json())
          .then(
            (result) => {
            console.log('result: ', result.items)
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

  componentDidUpdate(prevProps, prevState) {
    if( prevProps.launchedStatus != this.props.launchedStatus || prevProps.landStatus != this.props.landStatus || prevProps.launchYear != this.props.launchYear){
      const API_U =`https://api.spaceXdata.com/v3/launches?limit=100${this.props.launchedStatus!=undefined ? `&launch_success=${this.props.launchedStatus}` : ''}${this.props.landStatus!=undefined ? `&land_success=${this.props.landStatus}` : ''}${this.props.launchYear!=undefined ? `&launch_year=${this.props.launchYear}` : ''}`;
      fetch(API_U)
      .then(res => res.json())
      .then(
        (result) => {
        console.log('result: ', result.items)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          {items.map(item => (
            <div className="list-details">
        <div className="col-md-4 col-xs-4">
            <div className="m_image">
                <img src={item.links.mission_patch_small} height="250" width="200"/>
            </div>
            <div className="m_name">
                {item.mission_name}
            </div>
            <div className="m_id">
                <b>Mission Id:</b>{item.flight_number}
            </div>
            <div className="lyear">
                <b>Launch Year:</b>{item.launch_year}
            </div>
            <div className="launch_succ">
                <b>Successful launch:</b>{item.launch_success ? 'True' : 'False'}
            </div>
            <div className="land_succ">
                <b>Successfull landing:</b>{item.rocket.first_stage.cores.land_success ? 'True' : 'False'}
            </div>
        </div>
    </div>
          ))}
        </React.Fragment>
      );
    }
  }

}