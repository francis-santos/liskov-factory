import PacoteInternacional from "./PacoteInternacional.js";
import PacoteNacional from "./PacoteNacional.js";
import { TIPO_VIAGEM } from "./constants.js";

// Mapa de ações para criar diferentes tipos de pacotes de viagem
const actions = {
  [TIPO_VIAGEM.INTERNACIONAL]: ({ destino, preco, detalheAdicional }) => new PacoteInternacional({ destino, preco, detalheAdicional }),
  [TIPO_VIAGEM.NACIONAL]: ({ destino, preco, detalheAdicional }) => new PacoteNacional({ destino, preco, detalheAdicional }),
}

// Factory para criar diferentes tipos de pacotes de viagem
export default class PacoteViagemFactory {
  static criarPacoteViagem({ tipo, destino, preco, detalheAdicional }) {
    const criarPacote = actions[tipo];
    if (!criarPacote) {
      throw new Error("Tipo de pacote de viagem não encontrado.");
    }

    return criarPacote({ destino, preco, detalheAdicional });
  };
}
