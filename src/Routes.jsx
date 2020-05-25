import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Portfolio from './Pages/Portfolio/Portfolio';
import Start from './Pages/Start/Start';
import Contato from './Pages/Contact/Contact';

const Routes = () =>  {
  return (
      <>
      <Switch>
        <Route path="/posts" component={Portfolio}/>
        <Route path="/" exact component={Start}/>
        <Route path="/contato" component={Contato}/>
      </Switch>


      </>
  )
}

export default Routes;