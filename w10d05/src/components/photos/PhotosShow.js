import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Photo from '../common/Photo';
import Auth from '../../lib/Auth';



class PhotosShow extends React.Component {
  state = {
    photo: {}
  };

  componentDidMount() {
    // load the photo item from the API
    Axios.get(`/api/photos/${this.props.match.params.id}`)
      .then(res => this.setState({ photo: res.data },/*() => console.log(res.data)*/))
      .catch(err => console.log(err));
  }


  render() {
    // console.log(this.state.photo);
    return (
      <div className="row show">
        {this.state.photos && <Photo {...this.state.photo}></Photo>}
        {Auth.isAuthenticated() && <Link to={`/photos/${this.state.photo.id}/edit`} className="btn">Edit</Link>}
        {' '}
        {Auth.isAuthenticated() &&
          <button className="btn" onClick={this.deletePhoto}>Delete</button>}
      </div>
    );
  }
}

export default PhotosShow;
