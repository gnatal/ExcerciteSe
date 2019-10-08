import React, { Component, Fragment } from "react";

const localData = [
  {
    endereco: "rua dos bobos",
    descricao: "ótimo local para ver pombos"
  },
  {
    endereco: "rua Augusta",
    descricao: "ótimo local para ver as pombas"
  }
];

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div>{localData[0].endereco}</div>
        <div>{localData[1].endereco}</div>
      </Fragment>
    );
  }
}

export default Home;
