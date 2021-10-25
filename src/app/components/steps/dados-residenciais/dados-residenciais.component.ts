import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SimuladorService } from 'src/app/core/services/simulador.service';
import { FunctionsService } from 'src/app/shared/utils/functions.service';
import { IAppState } from 'src/app/store/app.model';
import { INITIAL_STATE_RESIDENCIAL, IResidencialData } from 'src/app/store/imovel-data/imovel-data.model';
import { MyErrorStateMatcher } from '../dados-pessoais/dados-pessoais.component';

@Component({
  selector: 'app-dados-residenciais',
  templateUrl: './dados-residenciais.component.html',
  styleUrls: ['./dados-residenciais.component.scss']
})
export class DadosResidenciaisComponent implements OnInit {

  inputName!: string;
  inputSurName!: string;

  formIsValid!: boolean;
  submit: boolean = false;

  residencialData!: FormGroup;
  residencialDataV: IResidencialData = INITIAL_STATE_RESIDENCIAL;
  residencialData$: Observable<IResidencialData>;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  formIsValidator = new EventEmitter();
  matcher = new MyErrorStateMatcher();

  phoneModel = '';
  constructor(
    public functionsService: FunctionsService,
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private formBuilder: FormBuilder,
    private simuladorService: SimuladorService


  ) {
    this.residencialData$ = store.select((state: IAppState)=> state.residencialData);
    this.residencialData$.subscribe((residencialData: IResidencialData) => {
      this.residencialDataV = residencialData
    })
  }
  ngOnInit():void {
    this._createFormDataPersonal();
    this.validatorForm();

  }
  ngOnDestroy(): void {
  }
  getInfoCep(cep: any) {
    if (cep.length == 8) {
      this.simuladorService.getInfosCep(cep.toString()).subscribe((residencialData: IResidencialData) => {
        this.functionsService.changelResidencialDataRedux(residencialData);
        this.enableCampos(residencialData)
      })
    }
  }
  enableCampos(data: any) {
    for (const key in data) {
      if ((data[key] == "" || data[key] == null || data[key] == undefined) && this.residencialData.controls[key]) {
        this.residencialData.controls[key].enable();
      } else {
        if (this.residencialData.controls[key]?.status == "INVALID") this.residencialData.controls[key].disable();

      }
    }
  }
  public validatorForm(): any {
    this.functionsService.changeValidatorValueRedux('residencialDataValid', this.residencialData.valid)
  }
  private _createFormDataPersonal(): void {
    this.residencialData = this.formBuilder.group({
      cep: [this.residencialDataV.cep,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)]],
      logradouro: [{ value: this.residencialDataV.logradouro, disabled: true },[Validators.required]],
      numero: [ this.residencialDataV.numero, [
        Validators.required,


      ]],
      complemento: [ this.residencialDataV.complemento,],
      bairro: [{ value: this.residencialDataV.bairro, disabled: true }, [
        Validators.required,
      ]],
      localidade: [{ value: this.residencialDataV.localidade, disabled: true }, [
        Validators.required,
      ]],
      estado: [{ value: this.residencialDataV.uf, disabled: true }, [
        Validators.required,
      ]]
    });
  }
}
