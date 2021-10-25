export interface ICobertura {
    id_oferta: string,
    nome: string,
    produtos: IProdutos[]
}
export interface IProdutos {
  id_produto: string,
  id_parceiro:  string,
  nome: string,
  vigencia: IVigencia,
  importancia_base: IImportanciaBase,
  coberturas: ICoberturas[],
  assistencias: IAssistencia[]
}
export interface IVigencia {
  quantidade: number,
  unidade: string
}

export interface IImportanciaBase {
  incremento: number,
  maximo: number,
  minimo: number,
  valor_sugerido: IValorSugerido[]

}
export interface ICoberturas {
  id_cobertura: string,
  nome: string,
  descricao:string,
  resumo: string,
  cobertura_obrigatoria: boolean,
  identificador: string,
  importancias_segurada: IImportanciaSegurada[],
  nao_incluso: [],
  dependencias: [],
  ocultar_descricao: boolean
}
export interface IImportanciaSegurada {
  tipo: string,
  minimo: number,
  maximo: number,
  incremento: number,
  valor_sugerido:IValorSugerido

}
export interface IValorSugerido {
  tipo_imovel: number,
  valor: number
}
export interface IAssistencia {
  id_assistencia: string,
  nome: string,
  descricao: string,
  resumo: string,
  assistencia_obrigatoria: boolean,
  identificador: string

}
