import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/Pages/Home/Home';
import Story from './components/Pages/Story/OurStory';
import Contact from './components/Pages/Contact/Contact';
import NotFound from './components/Pages/404/404';

const Routes = () => {
   return (
      <Switch>
         <Route exact path="/" component={ HomePage }/>
         <Route exact path="/our-story" component={ Story }/>
         <Route exact path="/contact-us" component={ Contact }/>
         <Route exact path="*" component={ NotFound }/>
      </Switch>
   )
}

export default Routes;