import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import LoadingScreen from 'src/components/loadingScreen';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/home" />
  },
  // {
  //   exact: true,
  //   path: '/404',
  //   component: lazy(() => import('src/views/Error404'))
  // }, 
  // {
  //   exact: true,
  //   path: '/503',
  //   component: lazy(() => import('src/views/ErrorConstruction'))
  // },
  {
    path: '*',
    //layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/home',
        component: lazy(() => import('src/layers'))
      },
    ]
  }
];

const renderRoutes = (routes: any) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route: any, i: number) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                  <Layout>
                    {route.routes
                      ? renderRoutes(route.routes)
                      : <Component {...props} />
                    }
                  </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
return renderRoutes(routesConfig);
}

export default Routes;