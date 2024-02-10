import PacoteViagem from "./PacoteViagem.js";

// Subclasse que estende a classe PacoteViagem
export default class PacoteInternacional extends PacoteViagem {
  constructor({ destino, preco, detalheAdicional } = {}) {
    super({ destino, preco });
    this.seguroViagem = detalheAdicional;
  }

  // Sobrescreve o método exibirDetalhes para incluir informações do seguro de viagem
  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Seguro Viagem: ${this.seguroViagem}`;
  }
}
