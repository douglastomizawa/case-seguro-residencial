import { INITIAL_STATE_PESSOAL_DATA } from './../../../store/user-data/user-data.model';
import { Component, OnInit, EventEmitter} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule} from '@angular/forms';
import { DadosPessoaisService } from 'src/app/shared/dados-pessoais.service';
import { PersonalDataFactoryService } from 'src/app/core/factories/personal-data-factory.service';
import { FunctionsService } from '../../../shared/utils/functions.service';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.model';
import { Observable } from 'rxjs';
import { IPessoalData } from 'src/app/store/user-data/user-data.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})

export class DadosPessoaisComponent implements OnInit {
  minDate: string;
  maxDate: string;

  formIsValid!: boolean;
  submit: boolean = false;

  dataPersonal!: FormGroup;
  pessoalData: IPessoalData = INITIAL_STATE_PESSOAL_DATA;
  pessoalData$: Observable<IPessoalData>;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  formIsValidator = new EventEmitter();
  matcher = new MyErrorStateMatcher();

  phoneModel = '';

  constructor(
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private formBuilder: FormBuilder,
    public functionsService: FunctionsService,

  ) {
    this.pessoalData$ = this.store.select((state :IAppState)=> state.pessoalData);
    this.pessoalData$.subscribe(pessoalData => {
      this.pessoalData = pessoalData
    })
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100).toISOString().split('T')[0];
    this.maxDate = new Date(currentYear - 18, new Date().getMonth() , new Date().getDate()).toISOString().split('T')[0];
  }
  ngOnInit():void {
    this._createFormDataPersonal();
    this.validatorForm();
  }
  public validatorForm(): any {
    this.functionsService.changeValidatorValueRedux('pessoalDataValid', this.dataPersonal.valid)
  }
  private _createFormDataPersonal(): void {
    this.dataPersonal = this.formBuilder.group({
      name: [this.pessoalData.nome, [Validators.required]],
      surname: [this.pessoalData.sobrenome,[Validators.required]],
      cpf: [this.pessoalData.cpf, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]],
      email: [this.pessoalData.email, [
        Validators.required,
        Validators.email
      ]],
      phone: [this.pessoalData.phone, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]]
    });
  }
}
