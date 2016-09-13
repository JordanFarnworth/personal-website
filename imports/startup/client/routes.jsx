import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
import { About } from '../../ui/components/about.jsx';
import { Chat } from '../../ui/components/chat.jsx';
import { Blog } from '../../ui/components/blog.jsx';


Meteor.startup( () => {
  render(<Chat />,document.getElementById( 'render-target' )
  );
});
