import React from "react";
import CadastroLocal from "./Pages/Cadastro";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * App colors
 * main #a8ff76
 * secondary #76ff9b
 * terciary #edff76
 */

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={CadastroLocal} />
      </Router>
    </div>
  );
}

export default App;
