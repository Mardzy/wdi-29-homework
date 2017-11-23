import React from 'react';
import Axios from 'axios';

import Cheese from '../common/Cheese';


class CheesesShow extends React.Component {
  state = {
    cheese: {}
  };

  componentDidMount() {
    // load the food item from the API
    Axios.get(`/api/cheeses/${this.props.match.params.id}`)
      .then(res => this.setState({ cheese: res.data },() => console.log(res.data)))
      .catch(err => console.log(err));
  }


  render() {
    console.log(this.state.cheese);
    return (
      <div className="row show">
        <Cheese {...this.state.cheese}></Cheese>
      </div>
    );
  }
}

export default CheesesShow;
