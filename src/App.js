import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./configs";
import PAGES from "./pages";

function App() {
  return (
    <BrowserRouter basename="/musichub-web">
      <Switch>
        <Route exact path={ROUTES.dashboard} component={PAGES.Dashboard} />
        <Route exact path={ROUTES.musicBizz} component={PAGES.MusicBizz} />
        <Redirect from="*" to={ROUTES.dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
