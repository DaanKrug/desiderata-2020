(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8dla":function(e,t,c){"use strict";c.r(t);var i=c("ofXK"),n=c("3Pt+"),o=c("1kSV"),a=c("tyNb"),l=c("kYp3"),s=c("fXoL"),r=c("zT7k"),u=c("ZEYb"),d=c("n/9U"),b=c("fcMv"),m=c("Ca8N"),g=c("/eUb");function f(e,t){if(1&e){const e=s.Tb();s.Sb(0,"section",7),s.Sb(1,"form",8),s.ec("ngSubmit",(function(t){return s.uc(e),s.gc().onObjectFormSubmit()})),s.Sb(2,"div"),s.Ob(3,"rich-input-select",9),s.Ob(4,"div",10),s.Rb(),s.Ob(5,"form-action",11),s.Rb(),s.Rb()}if(2&e){const e=s.gc();s.zb(1),s.jc("formGroup",e.dataForm),s.zb(2),s.jc("objects",e.modules),s.zb(2),s.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function j(e,t){1&e&&(s.Sb(0,"th",23),s.Dc(1," A\xe7\xf5es "),s.Rb())}function E(e,t){1&e&&(s.Sb(0,"th",24),s.Dc(1," A\xe7\xf5es "),s.Rb())}const p=function(){return["admin_master"]};function h(e,t){if(1&e){const e=s.Tb();s.Sb(0,"tr",25),s.Ob(1,"td",26),s.Sb(2,"td",27),s.Sb(3,"div",28),s.Sb(4,"edit-delete-action",29),s.ec("showObjectEmitter",(function(t){return s.uc(e),s.gc(3).showObject(t)}))("lockEmitter",(function(t){return s.uc(e),s.gc(3).lock(t)}))("unlockEmitter",(function(t){return s.uc(e),s.gc(3).unlock(t)}))("editObjectEmitter",(function(t){return s.uc(e),s.gc(3).editObject(t)}))("deleteObjectEmitter",(function(t){return s.uc(e),s.gc(3).deleteObject(t)}))("unDeleteObjectEmitter",(function(t){return s.uc(e),s.gc(3).unDeleteObject(t)})),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&e){const e=t.$implicit,c=s.gc(3),i=s.tc(9),n=s.tc(11),o=s.tc(7);s.zb(1),s.jc("innerHtml",c.getLabelForKey(c.modules,e.name),s.vc),s.zb(3),s.jc("auditingExclusions",c.auditingExclusions)("object",e)("logged",c.logged)("noEdit",!0)("noAction",!s.mc(10,p).includes(c.logged.category))("objectDeleteConfirmation",i)("objectUnDeleteConfirmation",n)("objectDetail",o)("lockUnLock",!0)}}function O(e,t){1&e&&(s.Sb(0,"tr",30),s.Sb(1,"td",31),s.Sb(2,"span"),s.Sb(3,"em"),s.Dc(4,"Nenhum M\xf3dulo Vinculado/Encontrado"),s.Rb(),s.Rb(),s.Rb(),s.Rb())}function D(e,t){if(1&e){const e=s.Tb();s.Sb(0,"table",14),s.Sb(1,"thead",15),s.Sb(2,"tr"),s.Sb(3,"th",16),s.Dc(4," Identifica\xe7\xe3o "),s.Rb(),s.Bc(5,j,2,0,"th",17),s.Bc(6,E,2,0,"th",18),s.Rb(),s.Rb(),s.Sb(7,"tbody"),s.Bc(8,h,5,11,"tr",19),s.Bc(9,O,5,0,"tr",20),s.Sb(10,"tr"),s.Sb(11,"td",21),s.Sb(12,"table-navigator",22),s.ec("previousPageEmitter",(function(t){return s.uc(e),s.gc(2).previousPage()}))("setPageEmitter",(function(t){return s.uc(e),s.gc(2).setPage(t)}))("nextPageEmitter",(function(t){return s.uc(e),s.gc(2).nextPage()})),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&e){const e=s.gc(2);s.zb(5),s.jc("ngIf",e.auditingExclusions),s.zb(1),s.jc("ngIf",!e.auditingExclusions),s.zb(2),s.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),s.zb(1),s.jc("ngIf",e.emptyArray(e.objects)),s.zb(3),s.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("totalPages",e.totalPages)("totalRows",e.totalRows)}}function S(e,t){if(1&e&&(s.Sb(0,"section",12),s.Bc(1,D,13,12,"table",13),s.Rb()),2&e){const e=s.gc();s.zb(1),s.jc("ngIf",e.objects)}}function v(e,t){if(1&e&&(s.Sb(0,"tr"),s.Sb(1,"th",32),s.Dc(2," Identifica\xe7\xe3o: "),s.Rb(),s.Sb(3,"td",33),s.Dc(4),s.Rb(),s.Rb()),2&e){const e=s.gc();s.zb(4),s.Fc(" ",e.getLabelForKey(e.modules,e.selectedObject.name)," ")}}function R(e,t){if(1&e){const e=s.Tb();s.Sb(0,"delete-confirmation",34),s.ec("cancelDataEmitter",(function(t){return s.uc(e),s.gc().showObject()})),s.Rb()}if(2&e){const e=s.gc(),t=s.tc(5);s.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function w(e,t){if(1&e){const e=s.Tb();s.Sb(0,"delete-confirmation",35),s.ec("confirmDeleteObjectEmitter",(function(t){return s.uc(e),s.gc().confirmDeleteObject(t)}))("cancelDataEmitter",(function(t){return s.uc(e),s.gc().cancelData()})),s.Rb()}if(2&e){const e=s.gc(),t=s.tc(5);s.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function P(e,t){if(1&e){const e=s.Tb();s.Sb(0,"delete-confirmation",36),s.ec("confirmDeleteObjectEmitter",(function(t){return s.uc(e),s.gc().confirmUnDeleteObject(t)}))("cancelDataEmitter",(function(t){return s.uc(e),s.gc().cancelData()})),s.Rb()}if(2&e){const e=s.gc(),t=s.tc(5);s.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}let x=(()=>{class e extends l.a{ngOnInit(){this.setInitializationServices(["module"]),this.crudService=this.moduleService,this.sucessErrorMessages={200:"M\xf3dulo adicionado com sucesso.",201:"M\xf3dulo alterado com sucesso.",2010:"M\xf3dulo inativado com sucesso.",2011:"M\xf3dulo ativado com sucesso.",204:"M\xf3dulo exclu\xeddo com sucesso.",207:"M\xf3dulo restaurado com sucesso.",208:"M\xf3dulo exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="M\xf3dulos",this.addTitle="Adicionar M\xf3dulo",this.editTitle="Editar M\xf3dulo",this.dataForm=new n.f({name:new n.c("",[n.r.required])}),this.modules=[{value:"file",label:"Arquivos"},{value:"s3upload",label:"AWS S3 Upload"},{value:"slider",label:"Carrossel de Imagens"},{value:"image",label:"Imagens"},{value:"register",label:"Registro de Usu\xe1rios"}],super.ngOnInit()}afterNgOnInit(){this.parameterName="name"}ngOnDestroy(){this.modules=null,super.ngOnDestroy()}setObject(e){super.setObject(e),this.dataForm.setValue({name:e.name})}makeSelectSearchedItemDestaked(e,t){return e.name=this.makeDestak(e.name,t),e}validateFormFields(){return this.errorRequired("name")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),!this.inValidationMsgs()}callbackAfterCreate(e){this.listDataNoCache(),this.eventEmitterService.get("loadModules").emit({})}callbackAfterUpdate(e){this.listDataNoCache(),this.eventEmitterService.get("loadModules").emit({})}}return e.\u0275fac=function(t){return M(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["module-root"]],features:[s.wb],decls:12,vars:10,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o dos m\xf3dulos da aplica\xe7\xe3o"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","formControlName","name","widthPerc","100","ngDefaultControl","",3,"objects"],[1,"clear"],["noCancel","true","saveText","Adicionar",3,"validationMessages","processValidation"],["aria-label","lista dos m\xf3dulos da aplica\xe7\xe3o"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","style","width: 5em;",4,"ngIf"],["scope","col","style","width: 9em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["class","summary",4,"ngIf"],["colspan","2",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","5em"],["scope","col",2,"width","9em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],[3,"auditingExclusions","object","logged","noEdit","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","lockUnLock","showObjectEmitter","lockEmitter","unlockEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],[1,"summary"],["colspan","2",1,"text","navigationBottom"],["scope","row",1,"text",2,"width","11em"],[1,"text","noBorderRight"],["label","M\xf3dulo","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","M\xf3dulo",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","M\xf3dulo","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(s.Sb(0,"form-toolbar",0),s.ec("onSearchFormSubmitEmitter",(function(e){return t.onSearchFormSubmit()}))("listDataEmitter",(function(e){return t.listData()}))("listDataNoCacheEmitter",(function(e){return t.listDataNoCache()}))("auditListEmitter",(function(e){return t.auditList()}))("normalListEmitter",(function(e){return t.normalList()}))("addObjectEmitter",(function(e){return t.addObject()})),s.Rb(),s.Bc(1,f,6,4,"ng-template",1),s.Bc(2,S,2,1,"ng-template",null,2,s.Cc),s.Bc(4,v,5,1,"ng-template",null,3,s.Cc),s.Bc(6,R,1,2,"ng-template",null,4,s.Cc),s.Bc(8,w,1,3,"ng-template",null,5,s.Cc),s.Bc(10,P,1,3,"ng-template",null,6,s.Cc)),2&e){const e=s.tc(3);s.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",s.mc(8,p).includes(t.logged.category))("disabledAddNew",!s.mc(9,p).includes(t.logged.category)),s.zb(1),s.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[r.a,i.j,n.t,n.n,n.g,u.a,n.m,n.e,n.b,d.a,i.i,b.a,m.a,g.a],encapsulation:2}),e})();const M=s.Ub(x),k=[{path:"",component:x}];let C=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(k)],a.c]}),e})();var I=c("kS8M");c.d(t,"ModuleModule",(function(){return y}));let y=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[i.b,n.h,n.p,o.g,C,I.a]]}),e})()}}]);