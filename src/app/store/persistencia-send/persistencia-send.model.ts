import { INITIAL_STATE_PESSOAL_DATA } from '../user-data/user-data.model';
import { IPessoalData } from "../user-data/user-data.model";
import { IAssistencia, ICobertura, IProdutos } from 'src/app/core/interfaces/cobertura.interface';

export interface IPersistenciaSend {
  item_risco: IItemRisco,
  oferta: IOferta,
  proponente: IProponente,
  questoes: IQuestaoSend[],
};
export interface IItemRisco {
    imovel:IImovel,
};
export interface IImovel {
    endereco: IPessoalData
}
export interface IOferta {
  id_oferta: string,
  produtos:IProdtosSend[]
}
export interface IProdtosSend {
  assistencias?: IAssitenciaSend[]
  coberturas?: ICoberturaSend[],
  id_produto?: string,
  importancia_base?: number | null
}
export interface IAssitenciaSend {
  id_assistencia: string
}
export interface ICoberturaSend {
  id_cobertura: string,
  importancia_segurada: number | null
}
export interface IProponente {
  contatos: IContatoSend[]
  cpf: string,
  data_nascimento: string,
  nome: string,
}

export interface IContatoSend {
  valor:string,
  tipo: string
}

export interface IQuestaoSend {
  id_questao:string,
  resposta: number | null,
}

const INITAL_STATE_IMOVEL: IImovel = {
  endereco: INITIAL_STATE_PESSOAL_DATA
}
const INITAL_STATE_ITEM_RISCO: IItemRisco = {
  imovel: INITAL_STATE_IMOVEL
}
const INITAL_STATE_COBERTURA: ICoberturaSend[] = []
const INITAL_STATE_ASSITENCIA: IAssitenciaSend[] = [
  {id_assistencia: "9d872f3f-16ac-4bbb-b4b9-c35dfed63605"},
{id_assistencia: "94effb8d-2ef0-48c5-b27e-acc86982939b"}
]

const INITAL_STATE_PRODUTOS: IProdtosSend[] = [{
  id_produto: "64",
  importancia_base: 350000,
  coberturas: INITAL_STATE_COBERTURA,
  assistencias: INITAL_STATE_ASSITENCIA
}]
const INITAL_STATE_OFERTA: IOferta = {
  id_oferta: "47",
  produtos: INITAL_STATE_PRODUTOS
}
const INITAL_STATE_PROPONENTE: IProponente = {
  contatos: [],
  cpf: '',
  data_nascimento: '',
  nome: '',
}
const INITAL_STATE_QUESTION_SEND: IQuestaoSend[] = []
export const INITAL_STATE_PERSISTENCIA: IPersistenciaSend = {
  item_risco: INITAL_STATE_ITEM_RISCO,
  oferta: INITAL_STATE_OFERTA,
  proponente: INITAL_STATE_PROPONENTE,
  questoes: INITAL_STATE_QUESTION_SEND
}
