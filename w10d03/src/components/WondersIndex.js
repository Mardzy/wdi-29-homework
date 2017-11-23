import React from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';
import WondersShow from './WondersShow';

class WondersIndex extends React.Component {
  state = {
    wonders: []
  };

  componentDidMount(){
    Axios.get('/api/wonders')
      .then(res => this.setState({ wonders: res.data}/*,()=>console.log(res.data)*/))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Wonders of the World</h1>
        <div>
          <div className="row">
            {this.state.wonders.map( wonder=>
              <div key={wonder.id} className="col-sm-3">
                <Link to={wonder.id}><img src={wonder.image} alt={wonder.name}/></Link>
                <p>{wonder.name}</p>

              </div>)}
          </div>
          <Route path="/:id" component={WondersShow} />
        </div>
      </div>
    );
  }

}

export default WondersIndex;
