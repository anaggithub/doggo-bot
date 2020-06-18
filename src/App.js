import React from "react";
import Home from "./pages/home";
import Chat from "./pages/chat";
import store from "./store/index.js";
import { Provider as StoreProvider } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Router>
          <Switch history={history}>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
