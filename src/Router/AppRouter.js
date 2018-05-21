import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Board from '../Hangman/Board'
import Portfolio from '../Portfolio/Portfolio'
import Homepage from '../Homepage/Homepage'
import Contact from '../Contact/Contact'

const AppRouter = () => (
  <Router>
      <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Hangman" component={Board} />
      </div>
  </Router>
);



export default AppRouter;