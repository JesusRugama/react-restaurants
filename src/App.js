import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Reservations from './pages/reservations/reservations.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Reservations} />
      </Switch>
    </div>
  );
}

export default App;
