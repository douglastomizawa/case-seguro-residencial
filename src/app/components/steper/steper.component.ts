import { FunctionsService } from 'src/app/shared/utils/functions.service';
import { SimuladorService } from './../../core/services/simulador.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomeDataService } from 'src/app/core/factories/home-data.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { SizeModalService } from 'src/app/core/factories/size-modal.service';
import { take, takeUntil } from 'rxjs/operators';

import { InfosSeguroHomeComponent } from '../infos-home-insurance/infos-seguro-home.component';
import { DadosPessoaisService } from 'src/app/shared/dados-pessoais.service';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.model';
import {  IPessoalData } from 'src/app/store/user-data/user-data.model';
import { Observable, ReplaySubject } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';
import { ValidateFieldsService } from 'src/app/shared/utils/validate-fields.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { INITIAL_STATE_VALIDATORS_DATA, IValidators, IValidatorsData } from 'src/app/store/input-validators/input-validators.model';
import { IReponsePersistencia } from 'src/app/store/persistencia/persistencia.model';
import { setPersistenciaData } from 'src/app/store/persistencia/persistencia.actions';
@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {
  smallScreen: boolean = false;
  buttonReadyNextS2: boolean = false;
  // buttonReadyNextS3: boolean = false;
  // buttonReadyNextS4: boolean = false;
  validators: IValidatorsData = INITIAL_STATE_VALIDATORS_DATA

  buttonInfosHomeReady!: boolean;

  secondActive!: FormGroup;
  thirdActive!: FormGroup;
  fourtActive!: FormGroup;
  stepperTrue!: string;
  stepperTrue2!: string;

  teste: any

  pessoalData$: Observable<IPessoalData>;
  validatorData$: Observable<IValidatorsData>;
  state$: Observable<IAppState>;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @ViewChild('stepper') private myStepper!: MatStepper;

  constructor(

    public dialog: MatDialog,
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private breakpointObserver: BreakpointObserver,
    private sizeModal: SizeModalService,
    private personalData: DadosPessoaisService,
    private formBuilder: FormBuilder,
    private validateFieldsService: ValidateFieldsService,
    private simuladorService: SimuladorService,
    private functionsService: FunctionsService


  ) {
    this.pessoalData$ = this.store.select((state :IAppState)=> state.pessoalData);
    this.validatorData$ = this.store.select((state :IAppState)=> state.validatorsData);
    this.state$ = this.store.select((state :IAppState)=> state);

    breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
      ]).subscribe(result => {
        this.smallScreen = result.matches;
    });
  }

  ngOnInit(): void{
    this.disableStepper();

    this.state$
    .pipe(takeUntil(this.destroyed$))
    .subscribe((state: IAppState) => {
      console.log(state);

    })
    this.validatorData$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((validators: IValidatorsData) => {
        this.validators = validators;
        if( validators.pessoalDataValid) {
          this.secondActive.setValue({stepper: "true"});
        } else {
          this.secondActive.reset();
        }

        if (validators.residencialDataValid) {
          this.thirdActive.setValue({stepper: "true"})
        } else {
          this.thirdActive.reset();
        }

        if (validators.simulacaoDataValid) {
          this.fourtActive.setValue({stepper: "true"})
        } else {
          this.fourtActive.reset();
        }
    //    if (validatorData.pessoalDataValid) this.buttonReadyNextS2 = validatorData.pessoalDataValid;
    //  if (validatorData.pessoalDataValid) this.buttonReadyNextS3 = validatorData.pessoalDataValid;
  })
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  disableStepper(): void{
    this.secondActive = this.formBuilder.group({
      stepper: ['', [Validators.required]]
    });
    this.thirdActive = this.formBuilder.group({
      stepper: ['', [Validators.required]]
    });
    this.fourtActive = this.formBuilder.group({
      stepper: ['', [Validators.required]]
    });
  }
  nextPage(clicked: boolean, stepperNext: MatStepper): any {
    stepperNext.next() ;
    this.personalData.nextStepClicked.emit(clicked);
  }
  validatePessoalData() {
    return this.validateFieldsService.validateFieldObjectEmpty(this.state.getValue().pessoalData);
  }
  openInFullScreenInfosHomeInsurance(): void {
    const dialogRef = this.dialog.open(InfosSeguroHomeComponent, {
      width: 'calc(100% - 50px)',
      maxWidth: '100vw',
      panelClass: 'container-profile',
    });
    this.sizeModal.setSizeModal(dialogRef);
    dialogRef
    .afterClosed()
    .pipe(take(1))
    .subscribe((result => {
      console.log('dialog was closed')
    }));
  }
  getPersistencia() {
    this.simuladorService.postPersistencia(this.functionsService.setPropsPersistencia())
    .pipe(takeUntil(this.destroyed$))
    .subscribe((propsPersistenciaData: IReponsePersistencia) => {
      this.store.dispatch(setPersistenciaData({propsPersistenciaData}));

    });
  }
}
