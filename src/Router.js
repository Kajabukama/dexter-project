import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/Pages/Home/Home';
import Story from './components/Pages/Story/OurStory';
import Contact from './components/Pages/Contact/Contact';
import NotFound from './components/Pages/404/404';
import People from './components/Pages/People/People';
import News from './components/Pages/News/News';
import Person from './components/Pages/People/Person';
import Corporate from './components/Pages/Services/Corporate';
import Banking from './components/Pages/Services/Banking';
import Immigration from './components/Pages/Services/Immigration';
import Acquisition from './components/Pages/Services/MergerAcquisitions';
import Competition from './components/Pages/Services/Competition';
import Taxation from './components/Pages/Services/Taxation';
import Intellectual from './components/Pages/Services/Intellectual';
import Resolution from './components/Pages/Services/Resolution';
import RealEstate from './components/Pages/Services/RealEstate';

const Routes = () => {
   return (
      <Switch>
         <Route exact path="/" component={ HomePage }/>
         <Route exact path="/our-story" component={ Story }/>
         <Route exact path="/contact-us" component={ Contact }/>
         <Route exact path="/our-people" component={ People }/>
         <Route exact path="/court-updates" component={ News }/>
         <Route exact path="/person" component={ Person }/>
         <Route exact path="/corporate-commercial" component={ Corporate }/>
         <Route exact path="/banking" component={ Banking }/>
         <Route exact path="/labour-immigration" component={ Immigration }/>
         <Route exact path="/mergers-acquisitions" component={ Acquisition }/>
         <Route exact path="/competition-law" component={ Competition }/>
         <Route exact path="/taxation" component={ Taxation }/>
         <Route exact path="/intellectual-property" component={ Intellectual }/>
         <Route exact path="/dispute-resolution" component={ Resolution }/>
         <Route exact path="/real-estate" component={ RealEstate }/>
         <Route exact path="*" component={ NotFound }/>
      </Switch>
   )
}

export default Routes;