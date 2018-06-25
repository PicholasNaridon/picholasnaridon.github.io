import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Board from '../Hangman/Board'
import Portfolio from '../Homepage/Portfolio'
import Homepage from '../Homepage/Homepage'
import Contact from '../Homepage/Contact'
import StarWars from '../StarWars/StarWars'
import Giphy from '../Giphy/Giphy'
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";


const AppRouter = () => (
  <Router>
      <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Hangman" component={Board} />
          <Route path="/StarWars" component={StarWars} />
          <Route path="/Giphy" component={Giphy} />
          <Route path="/rps" component={RockPaperScissors} />

      </div>
  </Router>
);



export default AppRouter;