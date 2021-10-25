import { IReponsePersistencia } from './../../store/persistencia/persistencia.model';
import { IPersistenciaSend } from '../../store/persistencia-send/persistencia-send.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ResponseInfosCEp } from '../interfaces/cep.interface';
import { ResponseQuestions } from '../interfaces/questions.interface';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {

  constructor(
    private http: HttpClient,
  ) {}

  getInfosCep( cep: string,) {
    return this.http.get<ResponseInfosCEp>(environment.api.getCep.replace('{key}', environment.key).replace('{cep}', cep))
      .pipe(
        tap(console.log));
  }
  getQuestions() {
    return this.http.get<ResponseQuestions>(environment.api.getQuestions)
      .pipe(
        tap(console.log));
  }
  getCobertura() {
    return this.http.get<ResponseInfosCEp>(environment.api.getCoverage)
      .pipe(
        tap(console.log));
  }
  postPersistencia(payload: IPersistenciaSend) {
    return this.http.post<IReponsePersistencia>(environment.api.persistence, payload)
      .pipe(
        tap(console.log));
  }
}
