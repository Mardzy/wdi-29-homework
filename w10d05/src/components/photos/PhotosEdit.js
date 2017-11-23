import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';


import PhotosForm from './PhotosForm';

class PhotosEdit extends React.Component {
  state = {
    photo: {
      image: '',
      description: '',
      location: '',
      camera: ''
    },
    errors: { }
  };


  componentDidMount() {
    Axios
      .get(`/api/photos/${this.props.match.params.id}`)
      .then(res => this.setState({ photo: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const photo = Object.assign({}, this.state.photo, { [name]: value });
    this.setState({ photo });
  }

  handleSubmit = (e) => {
    console.log('pe', this.state.data);
    e.preventDefault();

    Axios
      .put(`/api/photos/${this.props.match.params.id}`, this.state.photo , {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/gallery'))
      .catch(err => this.setState({ errors: err.response.data.errors}/*,
        ()=> console.log(this.state)*/));
  }

  render() {
    return (
      <PhotosForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        photo={this.state.photo}
        errors={this.state.errors}
      />
    );
  }
}

export default PhotosEdit;
