const PRODUTOS = "_PRODUTOS";

export function ValidationError(errors) {
  this.errors = errors;
}

class ProdutoService {
  ObterProdutos = () => {
    const produtos = localStorage.getItem(PRODUTOS);
    if (!produtos) {
      return [];
    }
    return JSON.parse(produtos);
  };

  Validar = (produto) => {
    const errors = [];

    if (!produto.nome) {
      errors.push("O campo 'Nome' é obrigatório.");
    }
    if (!produto.sku) {
      errors.push("O campo 'SKU' é obrigatório.");
    }
    if (!produto.preco || produto.preco <= 0) {
      errors.push("O campo 'Preço' deve ter um valor maior que zero(0).");
    }
    if (!produto.fornecedor) {
      errors.push("O campo 'Fornecedor' é obrigatório.");
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }
  };

  ObterIndex = (sku) => {
    let index = null;
    this.ObterProdutos().forEach((element, i) => {
      if (element.sku === sku) {
        index = i;
      }
    });
    return index;
  };

  Deletar = (sku) => {
    const produtos = this.ObterProdutos();
    const index = this.ObterIndex(sku);
    if (index !== null) {
      produtos.splice(index, 1);
      localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
    return produtos;
  };

  Salvar = (produto) => {
    this.Validar(produto);

    let produtos = localStorage.getItem(PRODUTOS);

    if (!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    const index = this.ObterIndex(produto.sku);
    if (index === null) {
      produtos.push(produto);
    } else {
      produtos[index] = produto;
    }

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
  };
}

export default ProdutoService;
