import React from 'react';
import {Route,Switch} from 'react-router-dom'
import loadable from '@loadable/component'

// const Calendar = loadable(()=> import("./components/Calendar"))
const Trend = loadable(()=> import("@/pages/Trend"))
const Recent = loadable(()=> import("@/pages/Recent"))

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Trend}/>
      <Route exact path="/recent" component={Recent}/>
    </Switch>
  );
}

export default App;
