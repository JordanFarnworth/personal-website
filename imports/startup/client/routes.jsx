import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
import { About } from '../../ui/components/about.jsx';
import { Blog } from '../../ui/components/blog.jsx';


Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="/index" component={ Index } />
        <Route path="/about" component={ About } />
        <Route path="/blog" component={ Blog } />
      </Route>
    </Router>,
    document.getElementById( 'render-target' )
  );
});
