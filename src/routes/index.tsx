import { Route, Switch, useRouteMatch } from "react-router-dom";
import { memo } from "react";

// PAGE IMPORTS
import ComingSoonPage from "../pages/ComingSoon";
import Error404Page from "../pages/Error404Page";
import Forbidden403Page from "../pages/Forbidden403Page";

const App = () => {
  const match = useRouteMatch();

  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        {/* Coming Soon */}
        <Route exact path={`${match.path}coming-soon`} component={ComingSoonPage} />

        {/* Forbidden Page */}
        <Route exact path={`${match.path}forbidden403Page`} component={Forbidden403Page} />

        {/* Page not found */}
        <Route exact path={`*`} component={Error404Page} />
      </Switch>
    </div>
  );
};

export default memo(App);
