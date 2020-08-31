import React from "react";
import Layout from "./components/layout";
import routes from "./routes";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

require("dotenv").config();

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  console.log(process.env);
  return (
    <div>
      <Layout>
      <HashRouter>
        <React.Suspense fallback={loading()}>
        {routes.map((route, idx) => {
                return route.component ? (
                  <Switch>
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={() => <route.component />}
                      />
                  </Switch>
                ) : null;
                })}
                </React.Suspense>
      </HashRouter>
      </Layout>
    </div>
  );
}

export default App;
