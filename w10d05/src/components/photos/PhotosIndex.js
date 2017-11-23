import React from 'react';
import Axios from 'axios';
import Photo from '../common/Photo';
import {Grid, Row, Col } from 'react-bootstrap';


class PhotosIndex extends React.Component{
  state = {
    photos: [],
    user: []
  }

  componentWillMount(){
    Axios
      .get('/api/photos')
      .then(res => this.setState({photos: res.data}/*, ()=> console.log(res.data)*/))
      .catch(err=> console.log(err));
    Axios
      .get('/api/users')
      .then(res => this.setState({users: res.data}/*, ()=> console.log(res.data)*/))
      .catch(err=> console.log(err));
  }

  render(){
    console.log('rendering', this.state);

    return(

      <Grid>
        <h2>Gallery</h2>
        <Row>
          {this.state.photos && this.state.photos.map(photo =>
            <Col xs={12} sm={6} md={4} key={photo.id}>
              <Photo {...photo} index={true}></Photo>
            </Col>
          )}
        </Row>
      </Grid>

    );
  }
}
export default PhotosIndex;
