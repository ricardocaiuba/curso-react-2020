import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ProdutoService from "../../app/produtoService";
import Card from "../../components/card";
import ProdutosTable from "./produtosTable";

class ConsultaProdutos extends Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  componentDidMount() {
    const produtos = this.service.ObterProdutos();
    this.setState({ produtos });
  }

  prepareEdit = (sku) => {
    this.props.history.push(`/cadastro-produtos/${sku}`);
  };

  toDelete = (sku) => {
    const produtos = this.service.Deletar(sku);
    this.setState({ produtos });
  };

  render() {
    return (
      <Card header={"Consulta de Produto"}>
        <ProdutosTable
          produtos={this.state.produtos}
          prepareEditAction={this.prepareEdit}
          toDeleteAction={this.toDelete}
        />
      </Card>
    );
  }
}

export default withRouter(ConsultaProdutos);
