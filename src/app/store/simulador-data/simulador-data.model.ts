

export interface ISimulacaoData {
  imovelSituacao: number,
  imovelConstrucao: string,
  imovelTipo: string,
  condominioFechado: boolean | null,
  imovelUse: string,
};
export const INITIAL_STATE_SIMULACAO: ISimulacaoData = {
  imovelSituacao: 0,
  imovelConstrucao: "",
  imovelTipo: "",
  condominioFechado: null,
  imovelUse: "",
};
export interface ISimuladorResponseData {
  questions?: any,
  questionsIds?: any,
  coberturasIds?: any,
  coberturasSend?: any,
  tipoImovel?: number,
  todasCoberturas?: any,
};
export const INITIAL_STATE_QUESTIONS_RESPONSE: ISimuladorResponseData = {
  questions: [],
  questionsIds: [],
  coberturasIds: [],
  coberturasSend: []
}

