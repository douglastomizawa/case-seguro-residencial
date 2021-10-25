export interface IValidators {
  validatorsData: IValidatorsData
};
export interface IValidatorsData {
  pessoalDataValid: boolean | null,
  residencialDataValid: boolean | null,
  simulacaoDataValid: boolean | null
};
export const INITIAL_STATE_VALIDATORS_DATA:IValidatorsData = {
  pessoalDataValid: null,
  residencialDataValid: null,
  simulacaoDataValid: null
};
export const INITIAL_STATE_VALIDATORS:IValidators = {
  validatorsData: INITIAL_STATE_VALIDATORS_DATA
};
