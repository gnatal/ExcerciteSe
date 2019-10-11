import React, { Component, Fragment } from "react";
import { Card, CardText, CardImage } from "./Style";

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
        {localData.map((local, index) => {
          return (
            <Card key={index}>
              <CardImage src="logo192.png" />
              <Fragment>
                <CardText>
                  local:
                  <br />
                  {local.endereco}
                </CardText>
                <CardText>descricao: {local.descricao}</CardText>
              </Fragment>
            </Card>
          );
        })}
      </Fragment>
    );
  }
}

export default Home;
