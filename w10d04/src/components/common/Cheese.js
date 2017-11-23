import React from 'react';
import {Link} from 'react-router-dom';

const Cheese =  ({country, name, image, tastingNotes, strength, id, index}) => {
  let imageHTML = null;
  if(index) imageHTML = <Link to={`/${id}`}><img src={image} alt={name}/></Link>;
  else imageHTML = <img src={image} alt={name}/>;

  return (
    <div className="thumbnail">
      {imageHTML}
      <div className="caption">
        <h2>{name}</h2>
        <h4><em>{country && country.name}</em></h4>
        <p>{tastingNotes}<br/>
        Strength: {strength}</p>
      </div>
    </div>
  );
};



export default Cheese;
