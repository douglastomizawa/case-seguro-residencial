export interface IReponsePersistencia {
  id_simulacao:        string;
  id_cotacao_parceiro: string;
  corretora:           Corretora;
  produtos:            Produto[];
  opcoes_pagamento:    OpcoesPagamento[];
  metodos_pagamento:   MetodosPagamento[];
}

export interface Corretora {
  taxa_corretagem: number | null;
}

export interface MetodosPagamento {
  metodo:   Metodo;
  cartoes?: Cartoe[];
  bancos?:  Banco[];
}

export interface Banco {
  nome:   string;
  codigo: string;
}

export interface Cartoe {
  tipo: string;
}

export enum Metodo {
  CreditCard = "credit_card",
  CreditCardPorto = "credit_card_porto",
  DirectDebit = "direct_debit",
}

export interface OpcoesPagamento {
  id_opcao_pagamento: string;
  recorrencia:        boolean;
  metodo:             Metodo;
  parcelas:           number;
  valor_parcela:      number;
  valor_total:        number;
  variante:           Variante;
  iof:                number;
  iof_percentual:     number;
  juros:              number;
  juros_percentual:   number;
}

export enum Variante {
  Padrao = "padrao",
}

export interface Produto {
  id_produto:   string;
  coberturas:   IResponseCobertura[];
  assistencias: Assistencia[];
}

export interface Assistencia {
  nome:              string;
  valor_assistencia: number;
  atendimento:       string;
  uso:               string;
  descricao:         string;
  servicos:          Servico[];
  id_assistencia?:   string;
}

export interface Servico {
  nome: string;
  tipo: Tipo;
}

export enum Tipo {
  Emergencial = "emergencial",
  HelpDeskCasa = "help_desk_casa",
  HelpDeskTelefonico = "help_desk_telefonico",
  PetResidencia = "pet_residencia",
  Sinistro = "sinistro",
}

export interface IResponseCobertura {
  id_cobertura:         string;
  importancia_segurada: number;
  valor:                number;
  franquia:             number;
  franquia_percentual:  number;
  texto_franquia:       string;
  identificador:        string;
}
const INITIAL_STATE_CORRETORA: Corretora = {
  taxa_corretagem: null,
}
const INITIAL_STATE_PRODUTO: Produto[] = [];
const INITIAL_STATE_OPCOES_PAGAMENTO: OpcoesPagamento[] = [];
const INITIAL_STATE_METODOS_PAGAMENTO: MetodosPagamento[] = []
export const INITIAL_STATE_PERSISTENCIA_DATA: IReponsePersistencia  = {
  id_simulacao:        '',
  id_cotacao_parceiro: '',
  corretora:           INITIAL_STATE_CORRETORA,
  produtos:            INITIAL_STATE_PRODUTO,
  opcoes_pagamento:    INITIAL_STATE_OPCOES_PAGAMENTO,
  metodos_pagamento:   INITIAL_STATE_METODOS_PAGAMENTO
}
