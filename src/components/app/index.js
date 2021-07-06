import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "../AboutMe";
import Article from "../Article";
import HomePage from "../HomePage";
import Projects from "../Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/article">Article</Link>
        </div>

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
