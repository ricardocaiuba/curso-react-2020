import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ProdutoService from "../../app/produtoService";
import Card from "../../components/card";

const initialState = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  showMessageSuccess: false,
  errors: [],
  isUpdate: false,
};

class CadastroProduto extends Component {
  state = initialState;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };
    try {
      this.service.Salvar(produto);
      this.handleCleanFields();
      this.setState({ showMessageSuccess: true });
    } catch (error) {
      const erros = error.errors;
      this.setState({ errors: erros });
    }
  };

  handleCloseSuccess = () => {
    this.props.history.push("/consulta-produtos");
  };

  handleCleanFields = () => {
    this.setState(initialState);
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;

    if (sku) {
      const result = this.service.ObterProdutos().filter((p) => p.sku === sku);
      if (result.length === 1) {
        const produtoEncontrado = result[0];
        this.setState({ ...produtoEncontrado, isUpdate: true });
      }
    }
  }

  render() {
    return (
      <Card
        header={
          this.state.isUpdate ? "Atualização de Produto" : "Cadastro de Produto"
        }
      >
        <form id="frmProduto" onSubmit={this.onSubmit}>
          {this.state.showMessageSuccess && (
            <div className="alert alert-dismissible alert-success">
              <button
                type="button"
                onClick={this.handleCloseSuccess}
                className="close"
                data-dismiss="alert"
              >
                &times;
              </button>
              <strong>Muito bem!</strong>
              &nbsp; Cadastro realizado com sucesso!
            </div>
          )}

          {this.state.errors.length > 0 &&
            this.state.errors.map((msg) => {
              return (
                <div key={msg} className="alert alert-dismissible alert-danger">
                  <button type="button" className="close" data-dismiss="alert">
                    &times;
                  </button>
                  <strong>Atenção!</strong> &nbsp; {msg}
                </div>
              );
            })}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nome">Nome: *</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={this.state.nome}
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="codigoSku">SKU: *</label>
                <input
                  id="codigoSku"
                  name="sku"
                  disabled={this.state.isUpdate}
                  type="text"
                  value={this.state.sku}
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="descricao">Descrição:</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  type="text"
                  value={this.state.descricao}
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="preco">Preço: *</label>
                <input
                  id="preco"
                  name="preco"
                  type="text"
                  value={this.state.preco}
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fornecedor">Fornecedor: *</label>
                <input
                  id="fornecedor"
                  name="fornecedor"
                  type="text"
                  value={this.state.fornecedor}
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button type="submit" className="btn btn-success">
                {this.state.isUpdate ? "Atualizar" : "Salvar"}
              </button>
            </div>
            <div className="col-md-1">
              <button
                onClick={this.handleCleanFields}
                className="btn btn-primary"
              >
                Limpar
              </button>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default withRouter(CadastroProduto);
