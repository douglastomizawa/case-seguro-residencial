import { IPersistenciaSend } from './persistencia-send/persistencia-send.model';
import { IResidencialData } from "./imovel-data/imovel-data.model";
import { IValidatorsData } from "./input-validators/input-validators.model";
import { ISimuladorResponseData } from "./simulador-data/simulador-data.model";
import { IPessoalData  } from "./user-data/user-data.model";
import { IReponsePersistencia } from './persistencia/persistencia.model';

export interface IAppState {
  pessoalData: IPessoalData,
  residencialData: IResidencialData,
  validatorsData: IValidatorsData,
  simuladorData: ISimuladorResponseData,
  presistenciaSend: IPersistenciaSend,
  presistenciaData: IReponsePersistencia,
}
