import React from 'react';
import Axios from 'axios';
import Cheese from '../common/Cheese';
import CheesesSearch from '../common/CheesesSearch';
import _ from 'lodash';



class CheeseIndex extends React.Component {
  state = {
    cheeses: [],
    countries: [],
    sortBy: 'name',
    sortDirection: 'asc',
    query: '',
    filter: ''
  }
  componentWillMount() {
    Axios
      .get('/api/cheeses')
      .then(res => this.setState({ cheeses: res.data }/*, () => console.log(res.data)*/))
      .catch(err => console.log(err));
    Axios
      .get('/api/countries')
      .then(res => this.setState({ countries: res.data }/*, () => console.log(res.data)*/))
      .catch(err => console.log(err));
  }
  handleOrigin = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
  }
  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  //  console.log(sortBy, sortDirection);
  }
  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    // console.log(this.state.cheeses);
    console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');

    const orderedCheeses = _.orderBy(this.state.cheeses, sortBy, sortDirection, query);
    let cheeses = _.filter(orderedCheeses, (cheese) => regex.test(cheese.name));
    if(this.state.filter) cheeses = _.filter(cheeses, (cheese) => this.state.filter === cheese.country.name);
    return (

      <div className="container">
        <div className="row">
          <CheesesSearch
            countries={this.state.countries}
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
            handleOrigin={this.handleOrigin}
          ></CheesesSearch>
        </div>
        <div className="row">
          {cheeses.map(cheese =>
            <div key={cheese.id} className="image-tile col-md-3 col-sm-6 col-xs-12">
              <Cheese {...cheese} index={true}></Cheese>
            </div>
          )}
        </div>
      </div>

    );
  }
}

export default CheeseIndex;
