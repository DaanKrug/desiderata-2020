import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../../base/basecrudfilter.component';

import CancerDiagnosticUtil  from './cancerdiagnostic.util';

@Component({
	selector: 'cancerdiagnostic-root',
	templateUrl: './cancerdiagnostic.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class CancerdiagnosticComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	selectedUser: any;
    cancerTypes: any[];
    selectedCancerType: any;
    levels1: any[];
	selectedLevel1: any;
    levels2: any[];
    selectedLevel2: any;

	ngOnInit() {
   		this.setInitializationServices(['cancerdiagnostic']);
   		this.crudService = this.cancerdiagnosticService;
   		this.selectedUser = this.storageService.get()[0];
   		this.sucessErrorMessages = {
			200:  'Diagnóstico Cancer adicionado com sucesso.',
			201:  'Diagnóstico Cancer alterado com sucesso.',
			204:  'Diagnóstico Cancer exclu&iacute;do com sucesso.',
			207:  'Diagnóstico Cancer restaurado com sucesso.',
			208:  'Diagnóstico Cancer exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Diagnósticos Câncer';
		this.addTitle = 'Adicionar Diagnóstico Cancer';
		this.editTitle = 'Editar Diagnóstico Cancer';
		this.dataForm = new FormGroup({
			a2_cancerestadiament: new FormControl('', [Validators.required]),
			a3_date: new FormControl('', [Validators.required])
		});    
		this.cancerTypes = CancerDiagnosticUtil.getTypes();
		super.ngOnInit();
	}

	afterNgOnInit(){
   		this.parameterName = 'a1_cancertype|type:string';        
	}

	ngOnDestroy(){ 
		this.selectedUser = null;   
		this.cancerTypes = null;   
		this.selectedCancerType = null;   
		this.levels1 = null;   
		this.selectedLevel1 = null;   
		this.levels2 = null;   
		this.selectedLevel2 = null;  
		super.ngOnDestroy();
	}

	setObject(cancerdiagnostic){
   		super.setObject(cancerdiagnostic);
		this.dataForm.setValue({
			a2_cancerestadiament: cancerdiagnostic.a2_cancerestadiament,
			a3_date: this.dateService.dateToForm(cancerdiagnostic.a3_date)
		}); 
	} 
	
	setSelectedCancerType(cancerType){
		this.selectedCancerType = null;
		var size = this.cancerTypes.length;
		for(var i = 0; i < size; i++){
			if(this.cancerTypes[i].value == cancerType){
				this.selectedCancerType = this.cancerTypes[i];
				break;
			}
		}
		this.loadLevels1();
	}
	
	loadLevels1(){
		this.selectedLevel1 = null;
		this.levels1 = null;
		this.selectedLevel2 = null;
		this.levels2 = null;
		this.setEstadiament();
		if(this.emptyObject(this.selectedCancerType)){
			return;
		}
		this.levels1 = CancerDiagnosticUtil.getTypesLevel1(this.selectedCancerType.value);
		if(this.emptyArray(this.levels1)){
			return;
		}
		this.setSelectedLevel1(this.levels1[0].value);
	}
	
	setSelectedLevel1(level1){
		this.selectedLevel1 = null;
		this.selectedLevel2 = null;
		this.levels2 = null;
		this.setEstadiament();
		var size = this.levels1.length;
		for(var i = 0; i < size; i++){
			if(this.levels1[i].value == level1){
				this.selectedLevel1 = this.levels1[i];
				break;
			}
		}
		if(this.emptyObject(this.selectedLevel1)){
			return;
		}
		this.loadLevels2();
	}
	
	loadLevels2(){
		this.selectedLevel2 = null;
		this.setEstadiament();
		this.levels2 = CancerDiagnosticUtil.getTypesLevel2(this.selectedCancerType.value,this.selectedLevel1.value);
		if(this.emptyArray(this.levels2)){
			return;
		}
		this.setSelectedLevel2(this.levels2[0].value);
	}
	
	setSelectedLevel2(level2){
		this.selectedLevel2 = null;
		this.setEstadiament();
		var size = this.levels2.length;
		for(var i = 0; i < size; i++){
			if(this.levels2[i].value == level2){
				this.selectedLevel2 = this.levels2[i];
				break;
			}
		}
		if(this.emptyObject(this.selectedLevel2)){
			return;
		}
		this.setEstadiament();
	}
	
	private setEstadiamentInfo(){
		var info = this.emptyObject(this.selectedLevel2) 
		         ? 'Sem informações adicionais sobre o estadiamento' 
				 : this.selectedLevel2.info;
		var elem: any = document.getElementById('estadiamentInfoContainer');
        elem.innerHTML = info;
	}
	
	private setEstadiament(){
		this.setEstadiamentInfo();
		var estadiament = '[';
		estadiament += this.emptyObject(this.selectedLevel1) ? 'X' : this.selectedLevel1.value;
		estadiament += ' - ';
		estadiament += this.emptyObject(this.selectedLevel2) ? 'X' : this.selectedLevel2.value;
		estadiament += ']';
		if(this.emptyObject(this.selectedCancerType)){
			estadiament += ' - ';
			estadiament += this.getEstadiamentLabel(null);
		}
		if(!(this.emptyObject(this.selectedCancerType)) && this.selectedCancerType.value == 1){
			estadiament += ' - ';
			estadiament += this.getEstadiamentLabel(this.selectedLevel1);
			if(!this.emptyObject(this.selectedLevel1)){
				estadiament += this.emptyObject(this.selectedLevel2) ? 'A' : this.selectedLevel2.value;
			}
		}
        if(!(this.emptyObject(this.selectedCancerType)) && this.selectedCancerType.value > 1){
        	estadiament += ' - ';
        	estadiament += this.getEstadiamentLabel(this.selectedLevel1);
        	estadiament += '/';
        	estadiament += this.getEstadiamentLabel(this.selectedLevel2);
		}
		var elem: any = document.getElementById('a2_cancerestadiament');
	    elem.value = estadiament;
	}
	
	private getEstadiamentLabel(level){
		if(this.emptyObject(level)){
			return 'Estadiamento Desconhecido';
		}
		return level.label;
	}

	getAdditionalConditions(): string{ 
		return ' xoo a4_userid = ' + this.selectedUser.id + ' ' + super.getAdditionalConditions();
	} 

	prepareData(cancerdiagnostic){
   		if(cancerdiagnostic.alreadyPrepared){
   			return cancerdiagnostic;
   		}
   		cancerdiagnostic.a3_dateLabel = this.dateService.dateToForm(cancerdiagnostic.a3_date);
		cancerdiagnostic.alreadyPrepared = true;
		return cancerdiagnostic;
   	}

	prepareToSaveUpdate(cancerdiagnostic){
		if(cancerdiagnostic.alreadyPreparedToSave){
   			return cancerdiagnostic;
   		}
		var elem: any = document.getElementById('a2_cancerestadiament');
		cancerdiagnostic.alreadyPreparedToSave = true;
		cancerdiagnostic.a1_cancertype = this.selectedCancerType.label;
		cancerdiagnostic.a2_cancerestadiament = elem.value;
		cancerdiagnostic.a3_date = this.dateService.dateFromForm(cancerdiagnostic.a3_date);
		cancerdiagnostic.a4_userid = this.selectedUser.id;
		return cancerdiagnostic;
	}

	makeSelectSearchedItemDestaked(cancerdiagnostic,destakSearch): Object{
		cancerdiagnostic.a1_cancertype = this.makeDestak(cancerdiagnostic.a1_cancertype,destakSearch);
		return cancerdiagnostic;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a3_date')){
			this.addValidationMessage('Data Diagnóstico &eacute; requerida!');
		}
		return !this.inValidationMsgs();
	}

	preValidateToSaveUpdate(cancerdiagnostic): boolean{
		if(this.emptyString(this.dateService.dateFromForm(cancerdiagnostic.a3_date))){
			this.addValidationMessage('Data Diagnóstico est&aacute; incorreta!');
		}
		if(this.emptyObject(this.selectedUser)){
			this.addValidationMessage('Paciente é requerido');
		}
		if(this.emptyObject(this.selectedCancerType)){
			this.addValidationMessage('Tipo Cancer é requerido');
		}
		return !this.inValidationMsgs();
	}

	backToOrigin(){
		this.crudService.getStorageService().clear();
		this.eventEmitterService.get('users').emit({});
	} 

	patchValue(target,value){
		if(target == 'a3_date'){
			this.dataForm.patchValue({a3_date: value});
		}
   	} 
	
}