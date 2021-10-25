export interface IResidencialData {
  cep: number | null,
  logradouro: string,
  complemento: string,
  localidade: string,
  numero: number | null,
  bairro: string,
  uf: string

};
export const INITIAL_STATE_RESIDENCIAL:IResidencialData = {
  cep: null,
  logradouro: "",
  complemento: "",
  localidade: "",
  numero: null,
  bairro: "",
  uf: ""
};
