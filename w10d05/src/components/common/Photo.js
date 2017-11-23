import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Photo =  ({location, image, description, camera, id, index, user}) => {

  let imageHTML = null;
  if(index) imageHTML = <Link to={`/photos/${id}`}><img src={image} alt={name}/></Link>;
  else imageHTML = <img className="image" src={image} alt={name} />;

  return (

    <Grid className="container show-container">
      <Row id="image">
        {imageHTML}
      </Row>
      <Row id="info">
        {/* <h2>{createdBy.username}</h2> */}
        <h4><em>{location}</em></h4>
        <h5>{description}</h5>
         &&<h5>{user.username}</h5>
        <p>With: {camera}</p>
      </Row>
    </Grid>

  );
};



export default Photo;
