import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import WondersIndex from './components/WondersIndex';
import WondersShow from './components/WondersShow';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <Switch>
            <Route exact path="/" component={WondersIndex} />
            <Route exact path="/:id" component={WondersShow} />
          </Switch>
        </main>
      </BrowserRouter>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
