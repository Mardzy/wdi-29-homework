import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CheesesIndex from './components/cheeses/CheesesIndex';
import CheesesShow from './components/cheeses/CheesesShow';
import Navbar from './components/common/Navbar';
import './scss/style.scss';
import 'bootstrap-css-only';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path = "/"
              component = { CheesesIndex } />
            <Route exact path = "/:id"
              component = { CheesesShow } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
