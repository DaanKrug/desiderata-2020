import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class UserComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{
	
  passwordValidationMessage: any;
  categories: Object[];
  disponiblePermissions: any[];
  permissionsAuditor: any[];
  permissionsAdmin: any[];
  permissionsEnroll: any[];
  permissionsExternal: any[];
  selectedPermissions: string[];

  ngOnInit() {
	  this.setInitializationServices(['user']);
	  this.crudService = this.userService;
	  this.sucessErrorMessages = {
		  200:  'Paciente/Profissional da saúde adicionado com sucesso.',
		  201:  'Paciente/Profissional da saúde alterado com sucesso.',
		  2010: 'Paciente/Profissional da saúde inativado com sucesso.',
		  2011: 'Paciente/Profissional da saúde ativado com sucesso.',
		  204:  'Paciente/Profissional da saúde excluído com sucesso.',
		  207:  'Paciente/Profissional da saúde restaurado com sucesso.',
		  208:  'Paciente/Profissional da saúde excluído [PERMANENTE] com sucesso.',
	  };
	  this.listTitle = 'Pacientes/Profissionais da saúde';
	  this.addTitle = 'Adicionar Paciente/Profissional da saúde';
	  this.editTitle = 'Editar Paciente/Profissional da saúde';
	  this.formInfo = ['** Requerido para criar paciente/profissional da saúde. Em branco mantém o valor atual.'];
	  this.dataForm = new FormGroup({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required,Validators.email]),
          password: new FormControl('', []),
          category: new FormControl('', [Validators.required])
      });
      this.categories = [
      	  {value: 'enroll' , label: 'Paciente'},
      	  {value: 'admin' , label: 'Profissional da Saúde'},
      	  {value: 'system_auditor', label: 'Auditor do Sistema'},
      ];
      this.permissionsAuditor = [
          {value: 'mailerconfig' , label: 'Configuração Envio E-mail', dependOf: null, breakBefore: false},
          {value: 'file' , label: 'Arquivo', dependOf: null, breakBefore: false},
          {value: 'image' , label: 'Imagem', dependOf: null, breakBefore: false},
          {value: 'simplemail' , label: 'Envio E-mail', dependOf: null, breakBefore: false},
          {value: 'user' , label: 'Pacientes/Profissionais da Saúde', dependOf: null, breakBefore: true},
          {value: 'cancerdiagnostic' , label: 'Diagnósticos de Câncer', dependOf: null, breakBefore: true}
          
	  ];
	  this.permissionsAdmin = this.permissionsAuditor;
	  this.permissionsExternal = [
	      {value: 'simplemail' , label: 'Envio E-mail', dependOf: null, breakBefore: false}
	  ];
	  this.permissionsEnroll = [];
      super.ngOnInit();
  }
  
  afterNgOnInit(){
	  this.parameterName = 'name/email';
  }
  
  ngOnDestroy(){
	  this.passwordValidationMessage = null;
	  this.categories = null;
	  this.disponiblePermissions = null;
	  this.permissionsAuditor = null;
	  this.permissionsAdmin = null;
	  this.permissionsEnroll = null;
	  this.permissionsExternal = null;
	  this.selectedPermissions = null;
	  super.ngOnDestroy();
  }
  
  setTab(tab){
  	  super.setTab(tab);
  	  if(tab == 1){
  	      this.adjustPermissions(this.dataForm.value.category);
  	  }
  }
  
  setObject(user){
	  super.setObject(user);
	  this.dataForm.setValue({
			name: user.name,
			email: user.email,
			password: null,
			category: user.category
	  });
	  this.adjustPermissions(user.category);
  }
  
  adjustPermissions(category){
      this.selectedPermissions = [];
      this.disponiblePermissions = null;
      if(this.emptyString(category)){
          return;
      }
      this.disponiblePermissions = this.permissionsEnroll;
      if(category == 'system_auditor'){
      	  this.disponiblePermissions = this.permissionsAuditor;
      }
      if(category == 'admin'){
      	  this.disponiblePermissions = this.permissionsAdmin;
      }
      if(category == 'external'){
      	  this.disponiblePermissions = this.permissionsExternal;
      }
	  if(null!=this.selectedObject.id && this.selectedObject.id > 0){
	      var userPermissions = this.selectedObject.permissions.split(",");
	      var size = userPermissions.length;
	      var size2 = this.disponiblePermissions.length;
	      for(var i = 0; i < size; i++){
	          for(var j = 0; j < size2; j++){
	              if(userPermissions[i] == this.disponiblePermissions[j].value 
	            		  || userPermissions[i] == this.disponiblePermissions[j].value + '_write'){
	              	  this.selectedPermissions = [...this.selectedPermissions,userPermissions[i]];
	              	  break;
	              }
	      	  }
	      }
	  }
  }
  
  checkPermission(permission){
  	  if(!(this.selectedPermissions.includes(permission))){
  	      this.selectedPermissions.unshift(permission);
  	  }
  }
  
  uncheckPermission(permission){
  	  this.selectedPermissions = this.removeFromArray(this.selectedPermissions,permission);
  	  if(permission == 'blogarticle'){
  	      this.uncheckPermission('blogarticlecomment');
  	  }
  	  if(permission == 'pagemenu'){
  	      this.uncheckPermission('pagemenuitem');
  	  }
  	  if(permission == 'pagemenuitem'){
  	  	  this.uncheckPermission('pagemenuitemfile');
  	  }
  	  if(permission == 'user'){
  	  	  this.uncheckPermission('userpaymentticket');
  	  }
  	  if(permission.indexOf('_write') == -1){
  	  	  this.uncheckPermission(permission + '_write');
  	  }
  }
  
  makeSelectSearchedItemDestaked(user,destakSearch): Object{
	  user.name = this.makeDestak(user.name,destakSearch);
	  user.email = this.makeDestak(user.email,destakSearch);
	  return user;
  }
  
  prepareToSaveUpdate(user){
      user.permissions = this.selectedPermissions.join(",");
	  return user;
  }
  
  validateFormFields(): Boolean{
	  if(this.errorRequired('name')){
		  this.addValidationMessage('Nome é requerido!');
	  }
	  if(this.errorRequired('category')){
		  this.addValidationMessage('Categoria/Permissão é requerida!');
	  }
	  if(this.errorRequired('email')){
		  this.addValidationMessage('E-mail é requerido!');
	  }
	  if(this.errorEmail('email')){
		  this.addValidationMessage('E-mail deve ser um endereço de email válido!');
	  }
	  return !this.inValidationMsgs();
  }
  
  validatePasswordForce(password){
	  this.validationMessages = null;
	  this.processValidation = false;
	  this.passwordValidationMessage = null;
	  if(this.emptyString(password)){
		  return;
	  }
	  var validation = this.stringService.validatePassword(password,true);
	  if(validation.code == 200){
		  this.passwordValidationMessage = validation;
		  return;
	  }
	  this.processValidation = true;
	  this.addValidationMessage(validation.msg);
  }
  
  preValidateToSaveUpdate(user): boolean{
	  this.passwordValidationMessage = null;
	  if(this.emptyString(user.email)){
		  this.addValidationMessage('E-mail é requerido!');
	  }
	  if(!(this.stringService.validateEmail(user.email))){
	      this.addValidationMessage('E-mail deve ser um endereço de email válido!');
	  }
	  if(!this.emptyString(user.password)){
		  var validation = this.stringService.validatePassword(user.password,false);
		  if(validation.code == 977 && !(this.idObjectEdit > 0)){
			  this.addValidationMessage(validation.msg);
		  }
		  if(validation.code != 200 && validation.code != 977){
			  this.addValidationMessage(validation.msg);
		  }
	  }
	  return !this.inValidationMsgs();
  }
  
  toCancerDiagnostics(id){
	  this.crudService.loadFromCache(id).then(obj => {
		  if(this.processObjectAndValidationResult(obj,true)){
			  this.eventEmitterService.get('cancerdiagnostics').emit({object: obj});
		  }
	  });
  }
  
}
