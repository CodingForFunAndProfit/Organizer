function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function _templateObject7(){var e=_taggedTemplateLiteral(["\n    mutation updateUser($id: String!, $input: UserInput!) {\n        updateUser(id: $id, input: $input)\n    }\n"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral(["\n    query getUser($id: String!) {\n        user(id: $id) {\n            id\n            email\n        }\n    }\n"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral(["\n    mutation deleteUser($id: String!) {\n        deleteUser(id: $id)\n    }\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n    query getUsers($input: PagingInput!, $sortby: SortByInput!) {\n        pagedusers(input: $input, sortby: $sortby) {\n            users {\n                id\n                email\n            }\n            total\n        }\n    }\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n    mutation createAction($options: ActionInput) {\n        createAction(options: $options) {\n            id\n            title\n            completed\n        }\n    }\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n    mutation deleteAction {\n        actions {\n            id\n            title\n            completed\n        }\n    }\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n    query getActions {\n        actions {\n            id\n            title\n            completed\n        }\n    }\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rl3G:function(e,t,n){"use strict";n.r(t),n.d(t,"BackendModule",(function(){return se}));var a,i,r=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),s=n("fXoL"),l=n("Wp6s"),u=n("f0Cb"),b=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Jb({type:a,selectors:[["app-dashboard"]],decls:6,vars:0,template:function(e,t){1&e&&(s.Vb(0,"mat-card"),s.Vb(1,"mat-card-header"),s.Vb(2,"mat-card-title"),s.yc(3,"Dashboard"),s.Ub(),s.Ub(),s.Qb(4,"mat-divider"),s.Qb(5,"mat-card-content"),s.Ub())},directives:[l.a,l.c,l.e,u.a,l.b],styles:[""]}),a),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),Object.assign(this,t)},m=n("lTCR"),p=n.n(m),f=n("lJxs"),h=n("/IUn"),g=p.a(_templateObject()),v=(p.a(_templateObject2()),p.a(_templateObject3())),y=((i=function(){function e(t){_classCallCheck(this,e),this.apollo=t,this.actions=[],this.getActions()}return _createClass(e,[{key:"getActions",value:function(){this.actionsObs=this.apollo.watchQuery({query:g}).valueChanges.pipe(Object(f.a)((function(e){return e.data.actions})))}},{key:"getAllTasks",value:function(){return this.actionsObs}},{key:"delete",value:function(e){}},{key:"create",value:function(e){this.apollo.mutate({mutation:v,variables:{options:e}}).subscribe((function(e){console.log("got data",e)}),(function(e){console.log("there was an error",e)}))}}]),e}()).\u0275fac=function(e){return new(e||i)(s.Zb(h.b))},i.\u0275prov=s.Lb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),C=n("kmnG"),_=n("qFsG"),k=n("MutI"),U=n("bSwM"),O=n("NFeN");function w(e,t){if(1&e){var n=s.Wb();s.Vb(0,"mat-list-item"),s.Qb(1,"mat-checkbox",2),s.Vb(2,"div"),s.yc(3),s.Ub(),s.Vb(4,"mat-icon",3),s.dc("click",(function(){s.rc(n);var e=t.$implicit;return s.hc().deleteAction(e)})),s.yc(5,"delete"),s.Ub(),s.Ub()}if(2&e){var a=t.$implicit;s.Cb(1),s.mc("checked",a.done),s.Cb(2),s.zc(a.title)}}function S(e,t){if(1&e&&(s.Vb(0,"mat-list-item"),s.Qb(1,"mat-checkbox",2),s.Vb(2,"div"),s.yc(3),s.Ub(),s.Ub()),2&e){var n=t.$implicit;s.Cb(1),s.mc("checked",n.done),s.Cb(2),s.zc(n.title)}}var V,j,x=((V=function(){function e(t){var n=this;_classCallCheck(this,e),this.actionService=t,this.actionService.actionsObs.subscribe((function(e){return n.actions=e})),this.newAction=new d}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"add",value:function(){this.actionService.create(this.newAction),this.newAction=new d}},{key:"deleteAction",value:function(e){}},{key:"actionsCompleted",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||V)(s.Pb(y))},V.\u0275cmp=s.Jb({type:V,selectors:[["app-actions"]],features:[s.Bb([y])],decls:14,vars:3,consts:[["matInput","","placeholder","What needs to be done?","autofocus","","autocomplete","off",3,"ngModel","ngModelChange","keyup.enter"],[4,"ngFor","ngForOf"],[3,"checked"],["aria-hidden","false","aria-label","Delete action",3,"click"]],template:function(e,t){1&e&&(s.Vb(0,"mat-card"),s.Vb(1,"mat-card-header"),s.Vb(2,"mat-card-title"),s.yc(3,"Actions"),s.Ub(),s.Ub(),s.Qb(4,"mat-divider"),s.Vb(5,"mat-card-content"),s.Vb(6,"mat-form-field"),s.Vb(7,"input",0),s.dc("ngModelChange",(function(e){return t.newAction.title=e}))("keyup.enter",(function(){return t.add()})),s.Ub(),s.Ub(),s.Vb(8,"mat-list"),s.xc(9,w,6,2,"mat-list-item",1),s.Ub(),s.Vb(10,"h2"),s.yc(11,"Completed"),s.Ub(),s.Vb(12,"mat-list"),s.xc(13,S,4,2,"mat-list-item",1),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.Cb(7),s.mc("ngModel",t.newAction.title),s.Cb(2),s.mc("ngForOf",t.actions),s.Cb(4),s.mc("ngForOf",t.actionsCompleted()))},directives:[l.a,l.c,l.e,u.a,l.b,C.b,_.a,c.b,c.j,c.m,k.a,r.j,k.b,U.a,O.a],styles:[".mat-list-item[_ngcontent-%COMP%]{border-bottom:1px solid grey}.mat-list-item[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,50.2%,.1)}.mat-list-item[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-right:10px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-left:auto;font-size:18px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-list-item-content[_ngcontent-%COMP%]{width:70%}.flextest[_ngcontent-%COMP%]{border:1px solid #00f}.flextest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid red}"]}),V),M=n("6nr9"),P=n("QibW"),z=((j=function(){function e(t){_classCallCheck(this,e),this.settingsService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.settingsService.theme.subscribe((function(t){return e.theme=t})),this.settingsService.dark.subscribe((function(t){return e.dark=t}))}},{key:"changeTheme",value:function(e){this.theme=e.value,this.settingsService.changeTheme(this.theme)}},{key:"changeLight",value:function(e){this.dark=e.value,this.settingsService.changeLight(this.dark)}}]),e}()).\u0275fac=function(e){return new(e||j)(s.Pb(M.a))},j.\u0275cmp=s.Jb({type:j,selectors:[["app-settings"]],decls:20,vars:4,consts:[[1,"themeselection-card"],["id",""],["aria-label","Select a theme",3,"ngModel","ngModelChange","change"],["value","numberone"],["value","numbertwo"],["aria-label","dark",3,"ngModel","ngModelChange","change"],[3,"value"]],template:function(e,t){1&e&&(s.Vb(0,"mat-card",0),s.Vb(1,"mat-card-header"),s.Vb(2,"mat-card-title"),s.yc(3,"Theme"),s.Ub(),s.Ub(),s.Qb(4,"mat-divider"),s.Vb(5,"mat-card-content"),s.Vb(6,"label",1),s.yc(7,"Pick your favorite theme"),s.Ub(),s.Vb(8,"mat-radio-group",2),s.dc("ngModelChange",(function(e){return t.theme=e}))("change",(function(e){return t.changeTheme(e)})),s.Vb(9,"mat-radio-button",3),s.yc(10,"Number One"),s.Ub(),s.Vb(11,"mat-radio-button",4),s.yc(12,"Number Two"),s.Ub(),s.Ub(),s.Vb(13,"label",1),s.yc(14,"Mode"),s.Ub(),s.Vb(15,"mat-radio-group",5),s.dc("ngModelChange",(function(e){return t.dark=e}))("change",(function(e){return t.changeLight(e)})),s.Vb(16,"mat-radio-button",6),s.yc(17,"dark"),s.Ub(),s.Vb(18,"mat-radio-button",6),s.yc(19,"light"),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.Cb(8),s.mc("ngModel",t.theme),s.Cb(7),s.mc("ngModel",t.dark),s.Cb(1),s.mc("value",!0),s.Cb(2),s.mc("value",!1))},directives:[l.a,l.c,l.e,u.a,l.b,P.b,c.j,c.m,P.a],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:10px}.mat-card-content[_ngcontent-%COMP%]{padding-top:10px}label[_ngcontent-%COMP%]{display:block;margin-top:10px;margin-bottom:10px}"]}),j),D=n("M9IT"),A=n("XNiG"),I=n("JX91"),$=n("eIep"),T=n("w1tV"),Q=function(){function e(t,n){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;_classCallCheck(this,e),this.pageNumber=new A.a,this.pageSize=new A.a,this.sort=new A.a,this.page$=this.sort.pipe(Object(I.a)(n),Object($.a)((function(e){return a.pageNumber.pipe(Object(I.a)(0),Object($.a)((function(n){return t({page:n,sort:e,size:i})})))})),Object(T.a)())}return _createClass(e,[{key:"connect",value:function(){return this.page$.pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.length;if(0===a)throw new Error("list of properties cannot be empty.");return function(e){return Object(f.a)(function(e,t){return function(n){for(var a=n,i=0;i<t;i++){var r=a[e[i]];if(void 0===r)return;a=r}return a}}(t,a))(e)}}("content"))}},{key:"disconnect",value:function(){}},{key:"sortBy",value:function(e){this.sort.next(e)}},{key:"fetch",value:function(e){this.pageNumber.next(e)}},{key:"setSize",value:function(e){this.pageSize.next(e)}},{key:"getSize",value:function(){return 20}}]),e}(),L=n("2Vo4"),E=p.a(_templateObject4()),N=p.a(_templateObject5());p.a(_templateObject6()),p.a(_templateObject7());var R,F=((R=function(){function e(t){_classCallCheck(this,e),this.apollo=t,this.defaultPage=0,this.defaultPageSize=10,this.defaultpage={content:[],number:this.defaultPage,size:this.defaultPageSize,totalElements:100},this._pagedUsers=new L.a(this.defaultpage)}return _createClass(e,[{key:"page",value:function(e){return this.createpagedUserQueryRef(e),this._pagedUsers.asObservable()}},{key:"createpagedUserQueryRef",value:function(e){var t=this;this.pagedUserQueryRef=this.apollo.watchQuery({query:E,variables:{input:{pageSize:e.size,pageNo:e.page},sortby:{by:e.sort.property,sort:e.sort.order}}}),this.pagedUserQueryRef.valueChanges.subscribe((function(n){var a=n.data.pagedusers;t._pagedUsers.next({content:a.users,number:e.page,size:e.size,totalElements:a.total})}))}},{key:"refetchPagedUserQuery",value:function(){this.pagedUserQueryRef.refetch()}},{key:"deleteUser",value:function(e){var t=this;return this.apollo.mutate({mutation:N,variables:{id:e}}).subscribe((function(e){return _objectDestructuringEmpty(e),t.refetchPagedUserQuery(),!0}),(function(e){console.log("there was an error sending the query",e)})),!1}}]),e}()).\u0275fac=function(e){return new(e||R)(s.Zb(h.b))},R.\u0275prov=s.Lb({token:R,factory:R.\u0275fac,providedIn:"root"}),R),J=n("+0xr"),q=n("Dh3D"),B=function(){return[5,10,15,20]};function W(e,t){if(1&e){var n=s.Wb();s.Vb(0,"mat-paginator",12),s.dc("page",(function(e){return s.rc(n),s.hc().tableSource.fetch(e.pageIndex)})),s.Ub()}if(2&e){var a=t.ngIf;s.mc("length",a.totalElements)("pageSize",a.size)("pageIndex",a.number)("pageSizeOptions",s.nc(4,B))}}function H(e,t){1&e&&(s.Vb(0,"th",13),s.yc(1," Email "),s.Ub())}function G(e,t){if(1&e&&(s.Vb(0,"td",14),s.yc(1),s.Ub()),2&e){var n=t.$implicit;s.Cb(1),s.Ac(" ",n.email," ")}}function X(e,t){1&e&&(s.Vb(0,"th",15),s.yc(1," Uuid "),s.Ub())}function Z(e,t){if(1&e&&(s.Vb(0,"td",14),s.yc(1),s.Ub()),2&e){var n=t.$implicit;s.Cb(1),s.Ac(" ",n.id," ")}}function K(e,t){1&e&&(s.Vb(0,"th",16),s.yc(1," Action "),s.Ub())}function Y(e,t){if(1&e){var n=s.Wb();s.Vb(0,"td",17),s.Vb(1,"a",18),s.dc("click",(function(){s.rc(n);var e=t.$implicit;return s.hc().deleteUser(e)})),s.yc(2,"Delete"),s.Ub(),s.Ub()}}function ee(e,t){1&e&&s.Qb(0,"tr",19)}function te(e,t){1&e&&s.Qb(0,"tr",20)}var ne,ae,ie,re=[{path:"",redirectTo:"dashboard"},{path:"dashboard",component:b},{path:"actions",component:x},{path:"settings",component:z},{path:"users",component:(ne=function(){function e(t){var n=this;_classCallCheck(this,e),this.usersService=t,this.displayedColumns=["id","email","controls"],this.tableSource=new Q((function(e){return n.usersService.page(e)}),{property:"email",order:"asc"},20)}return _createClass(e,[{key:"sortData",value:function(e){this.tableSource.sortBy({property:e.active,order:e.direction})}},{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}},{key:"deleteUser",value:function(e){this.usersService.deleteUser(e.id)}},{key:"paginatorEvent",value:function(e){}}]),e}(),ne.\u0275fac=function(e){return new(e||ne)(s.Pb(F))},ne.\u0275cmp=s.Jb({type:ne,selectors:[["app-users"]],viewQuery:function(e,t){var n;1&e&&s.vc(D.a,!0),2&e&&s.oc(n=s.ec())&&(t.paginator=n.first)},decls:20,vars:6,consts:[["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page",4,"ngIf"],["mat-table","","matSort","","matSortActive","email","matSortDirection","asc","matSortDisableClear","true",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","","style","width:320px",4,"matHeaderCellDef"],["matColumnDef","controls"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",2,"width","320px"],["mat-header-cell",""],["mat-cell","",1,"action-link"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(s.Vb(0,"mat-card"),s.Vb(1,"mat-card-header"),s.Vb(2,"mat-card-title"),s.yc(3,"Users"),s.Ub(),s.Ub(),s.Qb(4,"mat-divider"),s.Vb(5,"mat-card-content"),s.xc(6,W,1,5,"mat-paginator",0),s.ic(7,"async"),s.Vb(8,"table",1),s.dc("matSortChange",(function(e){return t.sortData(e)})),s.Tb(9,2),s.xc(10,H,2,0,"th",3),s.xc(11,G,2,1,"td",4),s.Sb(),s.Tb(12,5),s.xc(13,X,2,0,"th",6),s.xc(14,Z,2,1,"td",4),s.Sb(),s.Tb(15,7),s.xc(16,K,2,0,"th",8),s.xc(17,Y,3,0,"td",9),s.Sb(),s.xc(18,ee,1,0,"tr",10),s.xc(19,te,1,0,"tr",11),s.Ub(),s.Ub(),s.Ub()),2&e&&(s.Cb(6),s.mc("ngIf",s.jc(7,4,t.tableSource.page$)),s.Cb(2),s.mc("dataSource",t.tableSource),s.Cb(10),s.mc("matHeaderRowDef",t.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",t.displayedColumns))},directives:[l.a,l.c,l.e,u.a,l.b,r.k,J.j,q.a,J.c,J.e,J.b,J.g,J.i,D.a,J.d,q.b,J.a,J.f,J.h],pipes:[r.b],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),ne)}],ce=((ae=function e(){_classCallCheck(this,e)}).\u0275mod=s.Nb({type:ae}),ae.\u0275inj=s.Mb({factory:function(e){return new(e||ae)},imports:[[o.d.forChild(re)],o.d]}),ae),oe=n("jAig"),se=((ie=function e(){_classCallCheck(this,e)}).\u0275mod=s.Nb({type:ie}),ie.\u0275inj=s.Mb({factory:function(e){return new(e||ie)},imports:[[r.c,oe.a,c.f,c.n,ce]]}),ie)}}]);