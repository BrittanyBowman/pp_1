import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dash from './Components/Dash/Dash';
import Parts from './Components/Parts/Parts';

export default (
      <Switch>
        <Route path="/" exact component={Dash} />
        <Route path="/Parts" component={Parts} /> 
        <Redirect to="/" />  
      </Switch>
    )