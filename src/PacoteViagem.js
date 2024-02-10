// Classe base para representar um pacote de viagem
export default class PacoteViagem {
  constructor({ destino, preco } = {}) {
    this.destino = destino;
    this.preco = preco;
  }

  // Método para exibir os detalhes do pacote de viagem
  exibirDetalhes() {
    return `Destino: ${this.destino}, Preço: ${this.preco}`;
  }
}
