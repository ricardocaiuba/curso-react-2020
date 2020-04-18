import React from "react";

export default (props) => (
  <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>SKU</th>
          <th>Preço</th>
          <th>Fornecedor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.produtos.map((produto, index) => {
          return (
            <tr key={index}>
              <td>{produto.nome}</td>
              <td>{produto.sku}</td>
              <td>{produto.preco}</td>
              <td>{produto.fornecedor}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => props.prepareEditAction(produto.sku)}
                >
                  Editar
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => props.toDeleteAction(produto.sku)}
                >
                  Remover
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
