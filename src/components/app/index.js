import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "../AboutMe";
import Article from "../Article";
import HomePage from "../HomePage";
import Projects from "../Projects";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <div className="App">
          <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
