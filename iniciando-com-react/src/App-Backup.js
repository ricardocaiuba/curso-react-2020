import React, { Component, Fragment } from "react";

class AppBackup extends Component {
  state = {
    nome: "",
  };

  constructor() {
    super();
    this.handleChangeAux = this.handleChangeAux.bind(this);
  }

  handleChange = (e) => {
    let nome = e.target.value;
    this.setState({
      nome: nome,
    });
  };

  handleChangeAux(e) {
    let nome = e.target.value;
    this.setState({
      nome: nome,
    });
  }

  ComboboxCreate = () => {
    const options = [
      "Americana",
      "Santa Bárbara D´Oeste",
      "Piracicaba",
      "Limeira",
      "Nova Odessa",
      "Campinas",
      "Sumaré",
    ];
    const comboBoxOptions = options.map((opc) => (
      <option key={opc}>{opc}</option>
    ));

    return <select>{comboBoxOptions}</select>;
  };

  componentDidMount() {
    console.log("Executou o componentDidMount");
  }

  render() {
    console.log("Executou o render");

    const MyCombobox = () => this.ComboboxCreate();

    return (
      <Fragment>
        <h1>
          Hello {this.props.nome}. You are {this.props.idade} yers old
        </h1>
        <input
          type="text"
          value={this.state.nome}
          onChange={this.handleChangeAux}
        />
        <MyCombobox />
      </Fragment>
    );
  }
}

export default AppBackup;
