import { TIPO_VIAGEM } from "./src/constants.js";
import PacoteViagemFactory from "./src/PacoteViagemFactory.js";

// Exemplo de uso do Factory para criar um pacote de viagem internacional
const pacoteInternacional = PacoteViagemFactory.criarPacoteViagem({
  tipo: TIPO_VIAGEM.INTERNACIONAL,
  destino: 'Londres',
  preco: 5000,
  detalheAdicional: 'Seguro saúde incluso',
});

console.log(pacoteInternacional.exibirDetalhes());

// Exemplo de uso do Factory para criar um pacote de viagem nacional
const pacoteNacional = PacoteViagemFactory.criarPacoteViagem({
  tipo: TIPO_VIAGEM.NACIONAL,
  destino: 'Fortaleza',
  preco: 2500,
  detalheAdicional: 'Translado hotel incluso',
});

console.log(pacoteNacional.exibirDetalhes());