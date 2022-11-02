import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { appRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <Suspense fallback={'加载中...'}>
        {/* <Switch> */}
          {appRoutes?.map((route, i) => (
            <Route
              key={`route-${route.path}-${i}`}
              path={route.path}
              exact={route.exact ? route.exact : false}
              component={route.component}
            />
          ))}
        {/* </Switch> */}
      </Suspense>
    </Router>
  );
};

// export default hot(App);
export default App;