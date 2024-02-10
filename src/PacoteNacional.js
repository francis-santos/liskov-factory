import PacoteViagem from "./PacoteViagem.js";

// Subclasse que estende a classe PacoteViagem
export default class PacoteNacional extends PacoteViagem {
  constructor({ destino, preco, detalheAdicional } = {}) {
    super({ destino, preco });
    this.transporte = detalheAdicional;
  }

  // Sobrescreve o método exibirDetalhes para incluir informações sobre o transporte
  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Transporte: ${this.transporte}`;
  }
}
