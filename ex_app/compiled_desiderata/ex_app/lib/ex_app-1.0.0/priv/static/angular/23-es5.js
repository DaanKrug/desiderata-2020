function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=_superPropBase(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{n4Ma:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),c=n("1kSV"),a=n("tyNb"),r=n("kYp3"),s=n("fXoL"),l=n("zT7k"),u=n("IVaK"),b=n("ZMR0"),d=n("fFX4"),m=n("n/9U"),g=n("fcMv"),f=n("Ca8N"),p=n("/eUb");function h(e,t){if(1&e){var n=s.Tb();s.Sb(0,"section",7),s.Sb(1,"rich-tab-bar",8),s.ec("setTabEmitter",(function(e){return s.uc(n),s.gc().setTab(e)})),s.Rb(),s.Sb(2,"form",9),s.ec("ngSubmit",(function(e){return s.uc(n),s.gc().onObjectFormSubmit()})),s.Sb(3,"div"),s.Ob(4,"rich-input-text",10),s.Ob(5,"rich-input-text",11),s.Ob(6,"div",12),s.Rb(),s.Sb(7,"div"),s.Ob(8,"rich-editor",13),s.Ob(9,"div",12),s.Rb(),s.Sb(10,"form-action",14),s.ec("cancelDataEmitter",(function(e){return s.uc(n),s.gc().cancelData()})),s.Rb(),s.Rb(),s.Rb()}if(2&e){var i=s.gc();s.zb(1),s.jc("objects",i.tabObjects)("selectedTab",i.tab),s.zb(1),s.jc("formGroup",i.dataForm),s.zb(1),s.Bb(0==i.tab?"":"none"),s.zb(1),s.jc("formGroup",i.dataForm),s.zb(1),s.jc("formGroup",i.dataForm),s.zb(2),s.Bb(1==i.tab?"":"none"),s.zb(1),s.jc("formGroup",i.dataForm),s.zb(2),s.jc("validationMessages",i.validationMessages)("processValidation",i.processValidation)}}function O(e,t){1&e&&(s.Sb(0,"th",26),s.Dc(1," A\xe7\xf5es "),s.Rb())}function j(e,t){1&e&&(s.Sb(0,"th",27),s.Dc(1," A\xe7\xf5es "),s.Rb())}function v(e,t){if(1&e){var n=s.Tb();s.Sb(0,"button",35),s.ec("click",(function(e){s.uc(n);var t=s.gc().$implicit;return s.gc(3).toPageMenuItemFiles(t.id)})),s.Ob(1,"i",36),s.Rb()}}var E=function(){return["admin_master"]},y=function(){return["admin"]};function P(e,t){if(1&e){var n=s.Tb();s.Sb(0,"tr",28),s.Ob(1,"td",29),s.Ob(2,"td",30),s.Sb(3,"td",31),s.Sb(4,"div",32),s.Bc(5,v,2,0,"button",33),s.Sb(6,"edit-delete-action",34),s.ec("showObjectEmitter",(function(e){return s.uc(n),s.gc(3).showObject(e)}))("lockEmitter",(function(e){return s.uc(n),s.gc(3).lock(e)}))("unlockEmitter",(function(e){return s.uc(n),s.gc(3).unlock(e)}))("editObjectEmitter",(function(e){return s.uc(n),s.gc(3).editObject(e)}))("deleteObjectEmitter",(function(e){return s.uc(n),s.gc(3).deleteObject(e)}))("unDeleteObjectEmitter",(function(e){return s.uc(n),s.gc(3).unDeleteObject(e)})),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&e){var i=t.$implicit,o=s.gc(3),c=s.tc(9),a=s.tc(11),r=s.tc(7);s.zb(1),s.jc("innerHtml",i.name,s.vc),s.zb(1),s.jc("innerHtml",i.position,s.vc),s.zb(3),s.jc("ngIf",!o.auditingExclusions),s.zb(1),s.jc("auditingExclusions",o.auditingExclusions)("object",i)("logged",o.logged)("noAction",!(s.mc(10,E).includes(o.logged.category)||s.mc(11,y).includes(o.logged.category)&&o.permissions.includes("pagemenuitem_write")))("objectDeleteConfirmation",c)("objectUnDeleteConfirmation",a)("objectDetail",r)}}function S(e,t){if(1&e){var n=s.Tb();s.Sb(0,"table",17),s.Sb(1,"thead",18),s.Sb(2,"tr"),s.Sb(3,"th",19),s.Dc(4," Identifica\xe7\xe3o "),s.Rb(),s.Sb(5,"th",20),s.Dc(6," Ord. "),s.Rb(),s.Bc(7,O,2,0,"th",21),s.Bc(8,j,2,0,"th",22),s.Rb(),s.Rb(),s.Sb(9,"tbody"),s.Bc(10,P,7,12,"tr",23),s.Sb(11,"tr"),s.Sb(12,"td",24),s.Sb(13,"table-navigator",25),s.ec("previousPageEmitter",(function(e){return s.uc(n),s.gc(2).previousPage()}))("setPageEmitter",(function(e){return s.uc(n),s.gc(2).setPage(e)}))("nextPageEmitter",(function(e){return s.uc(n),s.gc(2).nextPage()})),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&e){var i=s.gc(2);s.zb(7),s.jc("ngIf",!i.auditingExclusions),s.zb(1),s.jc("ngIf",i.auditingExclusions),s.zb(2),s.jc("ngForOf",i.objects)("ngForTrackBy",i.trackById),s.zb(3),s.jc("pages",i.pages)("selectedPage",i.selectedPage)("previousPageDisabled",i.previousPageDisabled)("nextPageDisabled",i.nextPageDisabled)("rowsPerPage",i.rowsPerPage)("totalPages",i.totalPages)("totalRows",i.totalRows)}}function D(e,t){if(1&e&&(s.Sb(0,"section",15),s.Bc(1,S,14,11,"table",16),s.Rb()),2&e){var n=s.gc();s.zb(1),s.jc("ngIf",n.objects)}}function _(e,t){if(1&e&&(s.Sb(0,"tr"),s.Sb(1,"th",37),s.Dc(2," Identifica\xe7\xe3o: "),s.Rb(),s.Sb(3,"td",38),s.Dc(4),s.Rb(),s.Rb(),s.Sb(5,"tr"),s.Sb(6,"th",39),s.Dc(7," Ordem Apresenta\xe7\xe3o: "),s.Rb(),s.Sb(8,"td",38),s.Dc(9),s.Rb(),s.Rb()),2&e){var n=s.gc();s.zb(4),s.Ec(n.selectedObject.name),s.zb(5),s.Ec(n.selectedObject.position)}}function I(e,t){if(1&e){var n=s.Tb();s.Sb(0,"delete-confirmation",40),s.ec("cancelDataEmitter",(function(e){return s.uc(n),s.gc().showObject()})),s.Rb()}if(2&e){var i=s.gc(),o=s.tc(5);s.jc("selectedObject",i.selectedObject)("templateOutlet",o)}}function R(e,t){if(1&e){var n=s.Tb();s.Sb(0,"delete-confirmation",41),s.ec("confirmDeleteObjectEmitter",(function(e){return s.uc(n),s.gc().confirmDeleteObject(e)}))("cancelDataEmitter",(function(e){return s.uc(n),s.gc().cancelData()})),s.Rb()}if(2&e){var i=s.gc(),o=s.tc(5);s.jc("selectedObject",i.selectedObject)("auditingExclusions",i.auditingExclusions)("templateOutlet",o)}}function w(e,t){if(1&e){var n=s.Tb();s.Sb(0,"delete-confirmation",42),s.ec("confirmDeleteObjectEmitter",(function(e){return s.uc(n),s.gc().confirmUnDeleteObject(e)}))("cancelDataEmitter",(function(e){return s.uc(n),s.gc().cancelData()})),s.Rb()}if(2&e){var i=s.gc(),o=s.tc(5);s.jc("selectedObject",i.selectedObject)("auditingExclusions",i.auditingExclusions)("templateOutlet",o)}}var k,C,M=function(){return["admin_master","admin","system_auditor"]},x=((k=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){this.setInitializationServices(["pagemenuitem"]),this.crudService=this.pageMenuItemService,this.selectedPageMenu=this.storageService.get()[0],this.storageService.localStorageSetItem("_pageMenuId_"+this.getAppId(),""+this.selectedPageMenu.id,!1),this.sucessErrorMessages={200:"Item Menu adicionado com sucesso.",201:"Item Menu alterado com sucesso.",2010:"Item Menu inativado com sucesso.",2011:"Item Menu ativado com sucesso.",204:"Item Menu exclu\xeddo com sucesso.",207:"Item Menu restaurado com sucesso.",208:"Item Menu exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="Itens Menu",this.addTitle="Adicionar Item Menu",this.editTitle="Editar Item Menu",this.dataForm=new o.f({name:new o.c("",[o.r.required]),content:new o.c("",[o.r.required]),position:new o.c("",[o.r.required])}),this.tabObjects=[{value:"0",label:"Dados Gerais (*)",title:"Dados Gerais"},{value:"1",label:"Conte\xfado (*)",title:"Conte\xfado"}],_get(_getPrototypeOf(t.prototype),"ngOnInit",this).call(this)}},{key:"afterNgOnInit",value:function(){this.parameterName="name"}},{key:"ngOnDestroy",value:function(){this.selectedPageMenu=null,this.tabObjects=null,_get(_getPrototypeOf(t.prototype),"ngOnDestroy",this).call(this)}},{key:"getAdditionalConditions",value:function(){return" xoo pageMenuId = "+this.selectedPageMenu.id+" "+_get(_getPrototypeOf(t.prototype),"getAdditionalConditions",this).call(this)}},{key:"setObject",value:function(e){_get(_getPrototypeOf(t.prototype),"setObject",this).call(this,e),this.dataForm.setValue({name:e.name,content:e.content,position:e.position})}},{key:"prepareToSaveUpdate",value:function(e){return e.pageMenuId=this.selectedPageMenu.id,e.content=this.stringService.unentityLtGt(e.content),e}},{key:"makeSelectSearchedItemDestaked",value:function(e,t){return e.name=this.makeDestak(e.name,t),e}},{key:"validateFormFields",value:function(){return this.errorRequired("name")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),this.errorRequired("content")&&this.addValidationMessage("Conte\xfado \xe9 requerido!"),this.errorRequired("position")&&this.addValidationMessage("Ordem Apresenta\xe7\xe3o \xe9 requerida!"),!this.inValidationMsgs()}},{key:"patchValue",value:function(e,n){"name"==e&&this.dataForm.patchValue({name:n}),"content"==e&&this.dataForm.patchValue({content:n}),"position"==e&&this.dataForm.patchValue({position:n}),_get(_getPrototypeOf(t.prototype),"patchValue",this).call(this,e,n)}},{key:"toPageMenus",value:function(){this.storageService.localStorageRemoveItem("_pageMenuId_"+this.getAppId()),this.eventEmitterService.get("pagemenus").emit({})}},{key:"toPageMenuItemFiles",value:function(e){var t=this;this.crudService.loadFromCache(e).then((function(e){t.processObjectAndValidationResult(e,!0)&&t.eventEmitterService.get("pagemenuitemfiles").emit({object:e})}))}}]),t}(r.a)).\u0275fac=function(e){return T(e||k)},k.\u0275cmp=s.Hb({type:k,selectors:[["pagemenuitem-root"]],features:[s.wb],decls:12,vars:12,consts:[[3,"title","editing","searchForm","backToOrigin","auditingExclusions","enabledAuditList","disabledAddNew","backToOriginEmitter","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o dos itens menus",1,"dataForm"],[3,"objects","selectedTab","setTabEmitter"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","250","formControlName","name","widthPerc","79","ngDefaultControl","",3,"formGroup"],["label","Ord. Apres.","titlee","Ordem Apresenta\xe7\xe3o","maxchars","3","minValue","1","maxValue","999","forNumber","true","formControlName","position","widthPerc","19","ngDefaultControl","",3,"formGroup"],[1,"clear"],["formControlName","content","ngDefaultControl","",3,"formGroup"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista dos itens menus"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","title","Ordem Apresenta\xe7\xe3o","aria-label","Ordem Apresenta\xe7\xe3o",2,"width","4em"],["scope","col","style","width: 10.7em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","10.7em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"number",3,"innerHtml"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Arquivos","aria-label","Arquivos",3,"click",4,"ngIf"],["lockUnLock","true",3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","lockEmitter","unlockEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["type","button","placement","left","ngbTooltip","Arquivos","aria-label","Arquivos",1,"btn","btn-primary","clickable",3,"click"],[1,"fas","fa-file-invoice"],["scope","row",1,"text",2,"width","11em"],[1,"text","noBorderRight"],["scope","row",1,"text"],["label","Item Menu","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Item Menu",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Item Menu","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(s.Sb(0,"form-toolbar",0),s.ec("backToOriginEmitter",(function(e){return t.toPageMenus()}))("onSearchFormSubmitEmitter",(function(e){return t.onSearchFormSubmit()}))("listDataEmitter",(function(e){return t.listData()}))("listDataNoCacheEmitter",(function(e){return t.listDataNoCache()}))("auditListEmitter",(function(e){return t.auditList()}))("normalListEmitter",(function(e){return t.normalList()}))("addObjectEmitter",(function(e){return t.addObject()})),s.Rb(),s.Bc(1,h,11,14,"ng-template",1),s.Bc(2,D,2,1,"ng-template",null,2,s.Cc),s.Bc(4,_,10,2,"ng-template",null,3,s.Cc),s.Bc(6,I,1,2,"ng-template",null,4,s.Cc),s.Bc(8,R,1,3,"ng-template",null,5,s.Cc),s.Bc(10,w,1,3,"ng-template",null,6,s.Cc)),2&e){var n=s.tc(3);s.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("backToOrigin",!0)("auditingExclusions",t.auditingExclusions)("enabledAuditList",s.mc(9,M).includes(t.logged.category))("disabledAddNew",!(s.mc(10,E).includes(t.logged.category)||s.mc(11,y).includes(t.logged.category)&&t.permissions.includes("pagemenuitem_write"))),s.zb(1),s.jc("ngIf",t.editing)("ngIfElse",n)}},directives:[l.a,i.j,u.a,o.t,o.n,o.g,b.a,o.m,o.e,o.b,d.a,m.a,i.i,g.a,f.a,c.h,p.a],encapsulation:2}),k),T=s.Ub(x),F=[{path:"",component:x}],A=((C=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:C}),C.\u0275inj=s.Kb({factory:function(e){return new(e||C)},imports:[[a.c.forChild(F)],a.c]}),C),z=n("kS8M");n.d(t,"PageMenuItemModule",(function(){return V}));var B,V=((B=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:B}),B.\u0275inj=s.Kb({factory:function(e){return new(e||B)},imports:[[i.b,o.h,o.p,c.g,A,z.a]]}),B)}}]);