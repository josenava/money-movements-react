import { render } from 'react-dom';
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import store from './store';

// test components to make it understandable
const home = () => (<div>Test 1</div>);
const logout = () => (<div>Logout</div>);

const router = (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <hr />

        <Route exact path="/" component={home} />
        <Route path="/categories" component={App} />
        <Route path="/logout" component={logout} />
      </div>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
