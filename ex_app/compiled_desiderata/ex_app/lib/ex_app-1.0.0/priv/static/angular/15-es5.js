function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,a){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var o=_superPropBase(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(a):i.value}})(t,e,a||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ZMR0:function(t,e,a){"use strict";a.d(e,"a",(function(){return k}));var o=a("fXoL"),i=a("1dEi"),n=a("3Pt+"),r=a("ofXK"),c=a("1kSV");function l(t,e){1&t&&o.Ob(0,"div",3)}function s(t,e){1&t&&o.Ob(0,"div",4)}function u(t,e){if(1&t){var a=o.Tb();o.Sb(0,"i",14),o.ec("click",(function(t){return o.uc(a),o.gc(3).help()})),o.Rb()}}function f(t,e){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"label",12),o.Dc(2),o.Rb(),o.Bc(3,u,1,0,"i",13),o.Rb()),2&t){var a=o.gc(2);o.zb(1),o.kc("for",a.id),o.kc("title",a.titlee),o.Ab("aria-label",a.titlee),o.zb(1),o.Ec(a.label),o.zb(1),o.jc("ngIf",null!=a.helpMessage)}}function d(t,e){if(1&t){var a=o.Tb();o.Sb(0,"input",15),o.ec("change",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)}))("blur",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)})),o.Rb()}if(2&t){var i=o.gc(2);o.Cb("form-control ",i.className,""),o.kc("id",i.id),o.kc("maxlength",i.maxchars>0?i.maxchars:250),o.jc("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}function b(t,e){if(1&t){var a=o.Tb();o.Sb(0,"input",16),o.ec("change",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)}))("blur",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)})),o.Rb()}if(2&t){var i=o.gc(2);o.Cb("form-control ",i.className,""),o.kc("id",i.id),o.kc("maxlength",i.maxchars>0?i.maxchars:20),o.kc("mask",i.maskk),o.jc("dropSpecialCharacters",!i.preserveSpecialCharacters)("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}function m(t,e){if(1&t){var a=o.Tb();o.Sb(0,"input",17),o.ec("change",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)}))("keyup",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)})),o.Rb()}if(2&t){var i=o.gc(2);o.Cb("form-control ",i.className,""),o.kc("id",i.id),o.kc("maxlength",i.maxchars>0?i.maxchars:250),o.kc("mask",i.maskk),o.jc("dropSpecialCharacters",!i.preserveSpecialCharacters)("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}function g(t,e){if(1&t){var a=o.Tb();o.Sb(0,"textarea",18),o.ec("change",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)}))("keyup",(function(t){return o.uc(a),o.gc(2).onChangeValue(t)})),o.Dc(1,"\t"),o.Rb()}if(2&t){var i=o.gc(2);o.Cb("form-control ",i.className,""),o.kc("id",i.id),o.kc("rows",i.rowss),o.kc("maxlength",i.maxchars>0?i.maxchars:250*i.rowss),o.jc("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}var p=function(t){return{width:t}};function h(t,e){if(1&t&&(o.Sb(0,"div",5),o.Bc(1,f,4,5,"div",6),o.Bc(2,d,1,7,"input",7),o.Bc(3,b,1,9,"input",8),o.Bc(4,m,1,9,"input",9),o.Bc(5,g,2,8,"textarea",10),o.Ob(6,"div",11),o.Rb()),2&t){var a=o.gc();o.jc("ngStyle",o.nc(6,p,a.widthPerc+"%")),o.zb(1),o.jc("ngIf",null!=a.label),o.zb(1),o.jc("ngIf",a.forPassword),o.zb(1),o.jc("ngIf",!a.forPassword&&a.forNumber),o.zb(1),o.jc("ngIf",!a.forPassword&&!a.forNumber&&1==a.rowss),o.zb(1),o.jc("ngIf",!a.forPassword&&!a.forNumber&&a.rowss>1)}}function v(t,e){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"label",12),o.Dc(2),o.Rb(),o.Rb()),2&t){var a=o.gc(2);o.zb(1),o.kc("for",a.id),o.kc("title",a.titlee),o.Ab("aria-label",a.titlee),o.zb(1),o.Ec(a.label)}}function y(t,e){if(1&t&&o.Ob(0,"input",23),2&t){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.jc("formControl",a.ngControl.control)}}function j(t,e){if(1&t&&o.Ob(0,"input",24),2&t){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.jc("formControl",a.ngControl.control)}}function C(t,e){if(1&t&&o.Ob(0,"input",25),2&t){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.jc("formControl",a.ngControl.control)}}function O(t,e){if(1&t&&(o.Sb(0,"textarea",26),o.Dc(1,"\t"),o.Rb()),2&t){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.kc("rows",a.rowss),o.jc("formControl",a.ngControl.control)}}function w(t,e){if(1&t&&(o.Sb(0,"div",5),o.Bc(1,v,3,4,"div",6),o.Bc(2,y,1,5,"input",19),o.Bc(3,j,1,5,"input",20),o.Bc(4,C,1,5,"input",21),o.Bc(5,O,2,6,"textarea",22),o.Ob(6,"div",11),o.Rb()),2&t){var a=o.gc();o.jc("ngStyle",o.nc(6,p,a.widthPerc+"%")),o.zb(1),o.jc("ngIf",null!=a.label),o.zb(1),o.jc("ngIf",a.forPassword),o.zb(1),o.jc("ngIf",!a.forPassword&&a.forNumber),o.zb(1),o.jc("ngIf",!a.forPassword&&!a.forNumber&&1==a.rowss),o.zb(1),o.jc("ngIf",!a.forPassword&&!a.forNumber&&a.rowss>1)}}var k=function(){var t=function(t){function e(t){var a;return _classCallCheck(this,e),(a=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).ngControl=t,a.valueChangedEmitter=new o.n,a}return _inherits(e,t),_createClass(e,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(e.prototype),"ngOnInit",this).call(this)}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(e.prototype),"ngOnDestroy",this).call(this),this.forNumber=null,this.forAlphaNum=null,this.forAlphaNumName=null,this.forAlpha=null,this.forMail=null,this.forPassword=null,this.valueChangedEmitter=null}},{key:"onChangeValue",value:function(t){var e=t.target.value.trim();this.forNumber?this.adjustInputNumberValueAfterChange(e):this.forAlphaNum?this.adjustInputAlphaNumValueAfterChange(e):this.forAlphaNumName?this.adjustInputAlphaNumNameValueAfterChange(e):this.forAlpha?this.adjustInputAlphaValueAfterChange(e):this.forMail?this.adjustInputTextMailAddressValueAfterChange(e):this.forPassword?this.valueChangedEmitter.emit(e):this.adjustInputTextValueAfterChange(e)}}]),e}(i.a);return t.\u0275fac=function(e){return new(e||t)(o.Nb(n.l))},t.\u0275cmp=o.Hb({type:t,selectors:[["rich-input-text"]],inputs:{forNumber:"forNumber",forAlphaNum:"forAlphaNum",forAlphaNumName:"forAlphaNumName",forAlpha:"forAlpha",forMail:"forMail",forPassword:"forPassword"},outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[o.wb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["type","password","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","keyup",4,"ngIf"],["style","width: 100% !important;","autocomplete","off",3,"id","rows","maxlength","class","formControl","placeholder","change","keyup",4,"ngIf"],[1,"clear"],[3,"for","title"],["class","far fa-question-circle inputActionIcon","placement","top","ngbTooltip","Clique para informa\xe7\xf5es","aria-label","Clique para informa\xe7\xf5es","tabIndex","0",3,"click",4,"ngIf"],["placement","top","ngbTooltip","Clique para informa\xe7\xf5es","aria-label","Clique para informa\xe7\xf5es","tabIndex","0",1,"far","fa-question-circle","inputActionIcon",3,"click"],["type","password","autocomplete","off",2,"width","100% !important",3,"id","maxlength","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important","text-align","right",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","keyup"],["autocomplete","off",2,"width","100% !important",3,"id","rows","maxlength","formControl","placeholder","change","keyup"],["type","password","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["style","width: 100% !important;","readonly","true",3,"id","rows","class","formControl",4,"ngIf"],["type","password","readonly","true",2,"width","100% !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important","text-align","right",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important",3,"id","formControl"],["readonly","true",2,"width","100% !important",3,"id","rows","formControl"]],template:function(t,e){1&t&&(o.Bc(0,l,1,0,"div",0),o.Bc(1,s,1,0,"div",1),o.Bc(2,h,7,8,"div",2),o.Bc(3,w,7,8,"div",2)),2&t&&(o.jc("ngIf",e.breakBefore&&!e.breakBeforeDouble&&!e.noRender),o.zb(1),o.jc("ngIf",e.breakBeforeDouble&&!e.noRender),o.zb(1),o.jc("ngIf",!e.noRender&&!e.onlyRead),o.zb(1),o.jc("ngIf",!e.noRender&&e.onlyRead))},directives:[r.j,r.k,c.h,n.b,n.i,n.m,n.d],encapsulation:2}),t}()},xTcW:function(t,e,a){"use strict";a.r(e);var o=a("ofXK"),i=a("3Pt+"),n=a("1kSV"),r=a("tyNb"),c=a("kYp3"),l=a("fXoL"),s=a("zT7k"),u=a("ZMR0"),f=a("n/9U"),d=a("fcMv"),b=a("Ca8N"),m=a("/eUb");function g(t,e){1&t&&l.Ob(0,"div",10)}function p(t,e){if(1&t){var a=l.Tb();l.Sb(0,"form",11),l.ec("ngSubmit",(function(t){return l.uc(a),l.gc(2).uploadSubmit()})),l.Sb(1,"div"),l.Sb(2,"div",12),l.Sb(3,"label",13),l.Dc(4,"Arquivo (*) (**) (***)"),l.Rb(),l.Ob(5,"br"),l.Sb(6,"input",14),l.ec("change",(function(t){return l.uc(a),l.gc(2).setToUpload(t)})),l.Rb(),l.Rb(),l.Ob(7,"rich-input-text",15),l.Ob(8,"div",10),l.Rb(),l.Sb(9,"form-action",16),l.ec("cancelDataEmitter",(function(t){return l.uc(a),l.gc(2).cancelData()})),l.Rb(),l.Rb()}if(2&t){var o=l.gc(2);l.jc("formGroup",o.dataForm),l.zb(7),l.jc("formGroup",o.dataForm),l.zb(2),l.jc("validationMessages",o.validationMessages)("processValidation",o.processValidation)("additionalMsgsInfo",o.formInfo)}}function h(t,e){if(1&t){var a=l.Tb();l.Sb(0,"form",11),l.ec("ngSubmit",(function(t){return l.uc(a),l.gc(2).onObjectFormSubmit()})),l.Sb(1,"div"),l.Ob(2,"rich-input-text",15),l.Ob(3,"rich-input-text",17),l.Ob(4,"div",10),l.Rb(),l.Sb(5,"form-action",18),l.ec("cancelDataEmitter",(function(t){return l.uc(a),l.gc(2).cancelData()})),l.Rb(),l.Rb()}if(2&t){var o=l.gc(2);l.jc("formGroup",o.dataForm),l.zb(2),l.jc("formGroup",o.dataForm),l.zb(1),l.jc("formGroup",o.dataForm)("onlyRead",o.modulesNames.includes("s3upload")),l.zb(2),l.jc("validationMessages",o.validationMessages)("processValidation",o.processValidation)}}function v(t,e){if(1&t&&(l.Sb(0,"section",7),l.Bc(1,g,1,0,"div",8),l.Bc(2,p,10,5,"form",9),l.Bc(3,h,6,6,"form",9),l.Rb()),2&t){var a=l.gc();l.zb(1),l.jc("ngIf",a.inUpload),l.zb(1),l.jc("ngIf",a.inUpload),l.zb(1),l.jc("ngIf",!a.inUpload)}}function y(t,e){1&t&&(l.Sb(0,"th",30),l.Dc(1," A\xe7\xf5es "),l.Rb())}function j(t,e){1&t&&(l.Sb(0,"th",31),l.Dc(1," A\xe7\xf5es "),l.Rb())}var C=function(){return["admin_master"]},O=function(){return["admin"]};function w(t,e){if(1&t){var a=l.Tb();l.Sb(0,"tr",32),l.Ob(1,"td",33),l.Sb(2,"td",34),l.Sb(3,"div",35),l.Sb(4,"button",36),l.ec("click",(function(t){l.uc(a);var o=e.$implicit;return l.gc(3).downloadFile(o.link)})),l.Ob(5,"i",37),l.Rb(),l.Sb(6,"edit-delete-action",38),l.ec("showObjectEmitter",(function(t){return l.uc(a),l.gc(3).showObject(t)}))("editObjectEmitter",(function(t){return l.uc(a),l.gc(3).editObject(t)}))("deleteObjectEmitter",(function(t){return l.uc(a),l.gc(3).deleteObject(t)}))("unDeleteObjectEmitter",(function(t){return l.uc(a),l.gc(3).unDeleteObject(t)})),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&t){var o=e.$implicit,i=l.gc(3),n=l.tc(9),r=l.tc(11),c=l.tc(7);l.zb(1),l.jc("innerHtml",o.name,l.vc),l.zb(5),l.jc("auditingExclusions",i.auditingExclusions)("object",o)("logged",i.logged)("noAction",!(l.mc(8,C).includes(i.logged.category)||l.mc(9,O).includes(i.logged.category)&&i.permissions.includes("file_write")))("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",r)("objectDetail",c)}}function k(t,e){1&t&&(l.Sb(0,"tr",39),l.Sb(1,"td",40),l.Sb(2,"span"),l.Sb(3,"em"),l.Dc(4,"Nenhum Arquivo Cadastrado/Encontrado"),l.Rb(),l.Rb(),l.Rb(),l.Rb())}function S(t,e){if(1&t){var a=l.Tb();l.Sb(0,"table",21),l.Sb(1,"thead",22),l.Sb(2,"tr"),l.Sb(3,"th",23),l.Dc(4," Identifica\xe7\xe3o "),l.Rb(),l.Bc(5,y,2,0,"th",24),l.Bc(6,j,2,0,"th",25),l.Rb(),l.Rb(),l.Sb(7,"tbody"),l.Bc(8,w,7,10,"tr",26),l.Bc(9,k,5,0,"tr",27),l.Sb(10,"tr"),l.Sb(11,"td",28),l.Sb(12,"table-navigator",29),l.ec("previousPageEmitter",(function(t){return l.uc(a),l.gc(2).previousPage()}))("setPageEmitter",(function(t){return l.uc(a),l.gc(2).setPage(t)}))("nextPageEmitter",(function(t){return l.uc(a),l.gc(2).nextPage()})),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&t){var o=l.gc(2);l.zb(5),l.jc("ngIf",!o.auditingExclusions),l.zb(1),l.jc("ngIf",o.auditingExclusions),l.zb(2),l.jc("ngForOf",o.objects)("ngForTrackBy",o.trackById),l.zb(1),l.jc("ngIf",o.emptyArray(o.objects)),l.zb(3),l.jc("pages",o.pages)("selectedPage",o.selectedPage)("previousPageDisabled",o.previousPageDisabled)("nextPageDisabled",o.nextPageDisabled)("rowsPerPage",o.rowsPerPage)("totalPages",o.totalPages)("totalRows",o.totalRows)}}function x(t,e){if(1&t&&(l.Sb(0,"section",19),l.Bc(1,S,13,12,"table",20),l.Rb()),2&t){var a=l.gc();l.zb(1),l.jc("ngIf",a.objects)}}function D(t,e){if(1&t&&(l.Sb(0,"tr"),l.Sb(1,"th",41),l.Dc(2," Identifica\xe7\xe3o: "),l.Rb(),l.Sb(3,"td",42),l.Dc(4),l.Rb(),l.Rb()),2&t){var a=l.gc();l.zb(4),l.Ec(a.selectedObject.name)}}function P(t,e){if(1&t){var a=l.Tb();l.Sb(0,"delete-confirmation",43),l.ec("cancelDataEmitter",(function(t){return l.uc(a),l.gc().showObject()})),l.Rb()}if(2&t){var o=l.gc(),i=l.tc(5);l.jc("selectedObject",o.selectedObject)("templateOutlet",i)}}function R(t,e){if(1&t){var a=l.Tb();l.Sb(0,"delete-confirmation",44),l.ec("confirmDeleteObjectEmitter",(function(t){return l.uc(a),l.gc().confirmDeleteObject(t)}))("cancelDataEmitter",(function(t){return l.uc(a),l.gc().cancelData()})),l.Rb()}if(2&t){var o=l.gc(),i=l.tc(5);l.jc("selectedObject",o.selectedObject)("auditingExclusions",o.auditingExclusions)("templateOutlet",i)}}function E(t,e){if(1&t){var a=l.Tb();l.Sb(0,"delete-confirmation",45),l.ec("confirmDeleteObjectEmitter",(function(t){return l.uc(a),l.gc().confirmUnDeleteObject(t)}))("cancelDataEmitter",(function(t){return l.uc(a),l.gc().cancelData()})),l.Rb()}if(2&t){var o=l.gc(),i=l.tc(5);l.jc("selectedObject",o.selectedObject)("auditingExclusions",o.auditingExclusions)("templateOutlet",i)}}var I,_,A=function(){return["admin_master","admin","system_auditor"]},N=((I=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"ngOnInit",value:function(){this.setInitializationServices(["file","module"]),this.crudService=this.fileService,this.sucessErrorMessages={200:"Arquivo adicionado com sucesso.",201:"Arquivo alterado com sucesso.",204:"Arquivo exclu\xeddo com sucesso.",207:"Arquivo restaurado com sucesso.",208:"Arquivo exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="Arquivos",this.addTitle="Adicionar Arquivo",this.editTitle="Editar Arquivo",this.formInfo=["** Tipo Arquivos aceitos: .png .jpeg .jpg .gif .bmp .pdf .doc .docx .xls .xlsx .ppt .pptx","*** Tamanho m\xe1ximo: 2MB."],this.dataForm=new i.f({link:new i.c("",[i.r.required]),name:new i.c("",[i.r.required])}),_get(_getPrototypeOf(e.prototype),"ngOnInit",this).call(this)}},{key:"afterNgOnInit",value:function(){this.crudService.setForceDropOnDelete("enroll"==this.logged.category),this.parameterName="name",this.loadModules()}},{key:"ngOnDestroy",value:function(){this.inUpload=null,this.fileData=null,this.fileTarget=null,this.base64=null,_get(_getPrototypeOf(e.prototype),"ngOnDestroy",this).call(this)}},{key:"setObject",value:function(t){_get(_getPrototypeOf(e.prototype),"setObject",this).call(this,t),this.dataForm.setValue({link:t.link,name:t.name})}},{key:"listData",value:function(){this.inUpload=!1,_get(_getPrototypeOf(e.prototype),"listData",this).call(this)}},{key:"listDataNoCache",value:function(){this.inUpload=!1,_get(_getPrototypeOf(e.prototype),"listDataNoCache",this).call(this)}},{key:"addObject",value:function(){_get(_getPrototypeOf(e.prototype),"addObject",this).call(this),this.inUpload=this.modulesNames.includes("s3upload")}},{key:"makeSelectSearchedItemDestaked",value:function(t,e){return t.name=this.makeDestak(t.name,e),t}},{key:"validateFormFields",value:function(){return!this.inUpload&&this.errorRequired("link")&&this.addValidationMessage("Link \xe9 requerido!"),this.errorRequired("name")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),!this.inValidationMsgs()}},{key:"preValidateToSaveUpdate",value:function(t){return 0!=t.link.trim().toLowerCase().indexOf("https://")&&this.addValidationMessage("Link deve apontar para um endere\xe7o HTTPS, iniciando com: <strong>https://</strong>"),!this.inValidationMsgs()}},{key:"cancelUpload",value:function(){this.fileData=null}},{key:"setToUpload",value:function(t){var e=this;if(this.validationMessages=[],this.processValidation=!0,this.fileData=null,this.base64=null,t.target.files&&t.target.files.length>0){if(this.fileData=t.target.files[0],this.fileData.size>2097202)return void this.addValidationMessage("Arquivo maior que 2 MB.");this.fileTarget=t.target;var a=new FileReader;a.onload=function(){e.validateBase64(a.result)},a.readAsArrayBuffer(t.target.files[0])}}},{key:"validateBase64",value:function(t){var e=this;if(!this.validateFileContentBase64(this.fileData.type,t))return this.fileData=null,this.base64=null,void this.addValidationMessage("Conte\xfado do arquivo n\xe3o condiz com a extens\xe3o.");this.processValidation=!1;var a=new FileReader;a.onload=function(){e.base64=""+a.result},a.readAsDataURL(this.fileData)}},{key:"uploadSubmit",value:function(){var t=this;this.validationMessages=[],this.processValidation=!0,null!=this.fileData?this.validateFile(this.fileData,2)&&this.validateFormFields()&&(this.processValidation=!1,this.setProcessing(!0),this.fileService.s3upload(this.base64,this.fileData.name,this.dataForm.value.name).then((function(e){t.setProcessing(!1),t.clearForm(),t.processObjectAndValidationResult(e,!0)&&(t.addObject(),t.fileService.invalidateCache()),t.clearMessages(1e3)}))):this.addValidationMessage("\xc9 preciso selecionar um arquivo.")}}]),e}(c.a)).\u0275fac=function(t){return B(t||I)},I.\u0275cmp=l.Hb({type:I,selectors:[["file-root"]],features:[l.wb],decls:12,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o das arquivos"],["class","clear",4,"ngIf"],["class","dataForm",3,"formGroup","ngSubmit",4,"ngIf"],[1,"clear"],[1,"dataForm",3,"formGroup","ngSubmit"],[1,"field",2,"width","100%"],["for","file"],["type","file","name","file","accept",".png, .jpg, .jpeg, .gif, .bmp, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx",1,"form-control",2,"width","100%","padding",".155rem .155rem",3,"change"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","30","forAlphaNum","true","formControlName","name","widthPerc","100","ngDefaultControl","",3,"formGroup"],[3,"validationMessages","processValidation","additionalMsgsInfo","cancelDataEmitter"],["label","Link (*)","titlee","Link","formControlName","link","widthPerc","100","ngDefaultControl","",3,"formGroup","onlyRead"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista das arquivos"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 7em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["class","summary",4,"ngIf"],["colspan","2",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","9em"],["scope","col",2,"width","7em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],["placement","left","ngbTooltip","Download","aria-label","Download",1,"btn","btn-primary","clickable",3,"click"],[1,"fas","fa-file-download"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],[1,"summary"],["colspan","2",1,"text","navigationBottom"],["scope","col",1,"text",2,"width","7em"],[1,"text","noBorderRight"],["label","Arquivo","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Arquivo",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Arquivo","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(t,e){if(1&t&&(l.Sb(0,"form-toolbar",0),l.ec("onSearchFormSubmitEmitter",(function(t){return e.onSearchFormSubmit()}))("listDataEmitter",(function(t){return e.listData()}))("listDataNoCacheEmitter",(function(t){return e.listDataNoCache()}))("auditListEmitter",(function(t){return e.auditList()}))("normalListEmitter",(function(t){return e.normalList()}))("addObjectEmitter",(function(t){return e.addObject()})),l.Rb(),l.Bc(1,v,4,3,"ng-template",1),l.Bc(2,x,2,1,"ng-template",null,2,l.Cc),l.Bc(4,D,5,1,"ng-template",null,3,l.Cc),l.Bc(6,P,1,2,"ng-template",null,4,l.Cc),l.Bc(8,R,1,3,"ng-template",null,5,l.Cc),l.Bc(10,E,1,3,"ng-template",null,6,l.Cc)),2&t){var a=l.tc(3);l.jc("title",e.title)("editing",e.editing)("searchForm",e.searchForm)("auditingExclusions",e.auditingExclusions)("enabledAuditList",l.mc(8,A).includes(e.logged.category))("disabledAddNew",!(l.mc(9,C).includes(e.logged.category)||l.mc(10,O).includes(e.logged.category)&&e.permissions.includes("file_write"))),l.zb(1),l.jc("ngIf",e.editing)("ngIfElse",a)}},directives:[s.a,o.j,i.t,i.n,i.g,u.a,i.m,i.e,i.b,f.a,o.i,d.a,n.h,b.a,m.a],encapsulation:2}),I),B=l.Ub(N),T=[{path:"",component:N}],z=((_=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:_}),_.\u0275inj=l.Kb({factory:function(t){return new(t||_)},imports:[[r.c.forChild(T)],r.c]}),_),V=a("kS8M");a.d(e,"FileModule",(function(){return F}));var M,F=((M=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:M}),M.\u0275inj=l.Kb({factory:function(t){return new(t||M)},imports:[[o.b,i.h,i.p,n.g,z,V.a]]}),M)}}]);