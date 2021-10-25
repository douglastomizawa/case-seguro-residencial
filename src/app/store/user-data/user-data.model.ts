// export interface IPessoal {
//   pessoalData: IPessoalData
// };
export interface IPessoalData {
  nome: string,
  sobrenome: string,
  cpf: number | null,
  birthDate: string,
  phone: string,
  email: string
  pais: string
};
export const INITIAL_STATE_PESSOAL_DATA: IPessoalData = {
  nome: "",
  sobrenome: "",
  cpf: null,
  birthDate: "",
  phone: "",
  email: "",
  pais: "BRA"
};
// export const INITIAL_STATE_PESSOAL: IPessoal = {
//   pessoalData: INITIAL_STATE_PESSOAL_DATA
// };
