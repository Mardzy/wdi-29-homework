
import React from 'react';
// import { Link } from 'react-router-dom';

const CheesesSearch =  ({countries, handleSort, handleSearch, handleOrigin}) => {
  // console.log('search', cheeses);
  return (
    <div className="container">
      <form className="navbar-form navbar-left row" role="search">
        <div className="form-group col-md-3 col-sm-6 col-xs-12">
          <label>Sort By Name</label>
          <input type="text" className="form-control" placeholder="Search" onChange={handleSearch}/>
        </div>
        <div className="form-group col-md-3 col-sm-6 col-xs-12">
          <label>Filter By Country</label>
          <select className="form-control" onChange={handleOrigin}>
            <option value="">All</option>
            {countries.map((country)=>
              <option key={country.id}>{country.name}</option>
            )}
          </select>
        </div>
        <div className="form-group col-md-3 col-sm-6 col-xs-12">
          <label>Sort</label>
          <select className="form-control" onChange={handleSort}>
            <option value="name|asc">Name A - Z</option>
            <option value="name|desc">Name Z - A</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
        </div>
      </form>
    </div>
  );
};



export default CheesesSearch;
