import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import library from './library';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route exact path="/library" component={library}/>
    {/* <Route path="/some/where" component={SomePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} /> */}
  </Route>
);