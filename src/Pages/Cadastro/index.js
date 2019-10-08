import React, { Component, Fragment } from "react";
import { FormBox, InputLabel, InputText, ConfirmButton } from "./Style";

class CadastroLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endereco: "",
      descricao: ""
    };
  }

  updateField = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createLocation = () => {
    console.log("location", this.state);
  };

  render() {
    return (
      <Fragment>
        <FormBox>
          <InputLabel>Endereço</InputLabel>
          <InputText
            placeholder="endereço"
            name="endereco"
            onChange={this.updateField.bind(this)}
          />
          <InputLabel>Descrição</InputLabel>
          <InputText
            placeholder="descrição"
            name="descricao"
            onChange={this.updateField.bind(this)}
          />
          <ConfirmButton onClick={this.createLocation.bind(this)}>
            Cadastrar
          </ConfirmButton>
        </FormBox>
      </Fragment>
    );
  }
}

export default CadastroLocal;
