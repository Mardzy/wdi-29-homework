import React from 'react';
import { Link, Route } from 'react-router-dom';
import WondersIndex from './WondersIndex';
import GoogleMap from './GoogleMap';
import Axios from 'axios';

class WondersShow  extends React.Component {
  state = {
    wonder: {}
  };

  componentDidMount(){
    Axios.get(`/api/wonders/${this.props.match.params.id}`)
      .then(res => this.setState({ wonder: res.data },))
      .catch(err => console.log(err));
  }

  render(){

    return(
      <div>
        <h1>{this.state.wonder.name}</h1>
        <div className="row">
          <div className="col-sm-6">
            <img src={this.state.wonder.image} alt={this.state.wonder.name} />
            <h3>{this.state.wonder.country}</h3>
          </div>
          <div className="col-sm-6">
            {!this.state.wonder.location && <p>Loading map...</p>}

            {
              this.state.wonder.location &&
                <GoogleMap
                  center={this.state.wonder.location}
                  position={this.state.wonder.location}
                />
            }
          </div>
        </div>
        <Link to="/">All Wonders</Link>
        <Route exact path="/" component={WondersIndex} />
      </div>
    );
  }
}

export default WondersShow;
