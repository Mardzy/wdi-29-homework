import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import PhotosForm from './PhotosForm';

class PhotosNew extends React.Component {
  state = {
    photo: {
      image: '',
      description: '',
      location: '',
      camera: '',
      user: Auth.getPayload().userId
    },
    errors: {}
  };

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  handleChange = ({ target: { name, value } }) => {
    const photo = Object.assign({}, this.state.photo, { [name]: value });
    this.setState({ photo });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/photos', this.state.photo, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    console.log(Auth.getPayload().userId);
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

export default PhotosNew;

// import React from 'react';
// import Axios from 'axios';
// import Auth from '../../lib/Auth';
// import PhotosForm from './PhotosForm';
//
// class PhotosNew extends React.Component {
//   state = {
//     photo: {
//       image: '',
//       description: '',
//       location: '',
//       camera: '',
//       user: {}
//     },
//     errors: {}
//   };
//
//
//   handleChange = ({ target: { name, value } }) => {
//     const photo = Object.assign({}, this.state.photo, { [name]: value });
//     this.setState({ photo });
//   }
//
//   // handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   Axios
//   //     .post('/api/photos/', this.state.photo , {
//   //       headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
//   //     })
//   //     .then(() => this.props.history.push('/gallery'))
//   //     .catch(err => this.setState({ errors: err.response.data.errors}/*,
//   //       ()=> console.log(this.state)*/) );
//   // }
//   handleSubmit = (e) => {
//     e.preventDefault();
//
//     Axios
//       .post('/api/photos', this.state.photo, {
//         headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
//       })
//       .then(() => this.props.history.push('/gallery'))
//       .catch(err => this.setState({ errors: err.response.data.errors }));
//   }
//   render() {
//     // console.log('rendering', this.state);
//     return (
//       <PhotosForm
//         history={this.props.history}
//         handleSubmit={this.handleSubmit}
//         handleChange={this.handleChange}
//         photo={this.state}
//         errors={this.state.errors}
//       />
//     );
//   }
// }
//
// export default PhotosNew;
