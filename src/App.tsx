import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/Home";
import Search from "./search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
