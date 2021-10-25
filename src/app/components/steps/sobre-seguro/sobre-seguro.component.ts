import { INITIAL_STATE_QUESTIONS_RESPONSE } from './../../../store/simulador-data/simulador-data.model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';
import { State, Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { HomeDataService } from 'src/app/core/factories/home-data.service';
import { ResponseQuestions } from 'src/app/core/interfaces/questions.interface';
import { SimuladorService } from 'src/app/core/services/simulador.service';
import { FunctionsService } from 'src/app/shared/utils/functions.service';
import { IAppState } from 'src/app/store/app.model';
import { ISimuladorResponseData } from 'src/app/store/simulador-data/simulador-data.model';

@Component({
  selector: 'app-sobre-seguro',
  templateUrl: './sobre-seguro.component.html',
  styleUrls: ['./sobre-seguro.component.scss']
})
export class SobreSeguroComponent implements OnInit {
  idSelectCasa: string = 'c456ed99-1f9a-495d-b87b-d7245cb86ca0';
  idTipoImovel: string = '8045c56a-a07c-416c-ac2e-4ee530076822';
  optionSelect: number = 0;
  optionSelectId: string = '';
  selectCasa: boolean = false;

  questions!: any;

  questions$ : Observable<ISimuladorResponseData>;
  listQuestaoRespondidas: ISimuladorResponseData = {
    questions:[]
  };
  listQuestionsIdsSelected: string[] = [];
  listQuestionsIdsSelected$: Observable<string[]>
  listAll$: Observable<any>;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    public functionService: FunctionsService,
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private formBuilder: FormBuilder,
    private homeDataService: HomeDataService,
    private simuladorService: SimuladorService,
    ) {
      this.questions$ = store.select((state: IAppState)=> state.simuladorData.questions);
      this.listQuestionsIdsSelected$ = store.select((state: IAppState) => state.simuladorData.questionsIds);
      this.listAll$ = store.select((state: IAppState) => state.simuladorData);

      this.questions$.subscribe(res => {
      })
      this.listQuestionsIdsSelected$.subscribe((questionsIds: string[]) => {
        this.listQuestionsIdsSelected = questionsIds || [];

      })
      this.questions$.subscribe((questions: any) => {
        const findIdQuestion = this.listQuestionsIdsSelected.indexOf(this.idTipoImovel);
        if (findIdQuestion != -1 && this.questions.length >= 4 ) {
          this.functionService.changeValidatorValueRedux('simulacaoDataValid',  true);
        } else {
          this.functionService.changeValidatorValueRedux('simulacaoDataValid',  false);
        }
      })
    }
  ngOnInit(): void {
    this.simuladorService.getQuestions().subscribe((questions: ResponseQuestions[])=> {
      // const index3 = questions.splice(2,1);
      this.questions = questions

    })
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  checkQuestion(id_questao: string, resposta: number) {
  // this.optionSelect = resposta;
  this.validacaoSelectCasa(id_questao, resposta)
  const index = this.listQuestionsIdsSelected.indexOf(id_questao);
  const questions = {id_questao, resposta};
    this.verificaTipoImovel(id_questao, resposta);
  if (index == -1) {
    this.functionService.pushSimuladorSend('questions',questions);
    this.functionService.changeSimuladorPushCobertura('questionsIds',id_questao);
    return true;

  } else {
    this.functionService.removeSimuladorSend('questionsIds','questions',questions);
    this.functionService.changeSimuladorPushCobertura('questionsIds',id_questao);
    this.functionService.changeSimuladorRemoveCobertura('questionsIds',id_questao);
    return true;

  }

  return false
    // this.validacaoSelectCasa();
  }
  validacaoSelectCasa (id_questao: string, resposta: number) {
    if (id_questao == this.idTipoImovel && resposta == 1) {
      this.selectCasa = true;
    }else if (id_questao == this.idTipoImovel && resposta != 1) {
      this.selectCasa = false
    };
  }
  verificaTipoImovel(id_questao: string, resposta: number) {
    if(id_questao == this.idTipoImovel) this.functionService.changeSimuladorValuesRedux('tipoImovel', resposta);
    return id_questao;
  }
}
