function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function _templateObject7(){var e=_taggedTemplateLiteral(["\n    mutation updateUser($id: String!, $input: UserInput!) {\n        updateUser(id: $id, input: $input)\n    }\n"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral(["\n    query getUser($id: String!) {\n        user(id: $id) {\n            id\n            email\n        }\n    }\n"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral(["\n    mutation deleteUser($id: String!) {\n        deleteUser(id: $id)\n    }\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n    query getUsers($input: PagingInput!, $sortby: SortByInput!) {\n        pagedusers(input: $input, sortby: $sortby) {\n            users {\n                id\n                email\n            }\n            total\n        }\n    }\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n    mutation createAction($options: ActionInput) {\n        createAction(options: $options) {\n            id\n            title\n            completed\n        }\n    }\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n    mutation deleteAction {\n        actions {\n            id\n            title\n            completed\n        }\n    }\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n    query getActions {\n        actions {\n            id\n            title\n            completed\n        }\n    }\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rl3G:function(e,t,n){"use strict";n.r(t),n.d(t,"BackendModule",(function(){return ue}));var a,i,r=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),l=n("fXoL"),u=n("Wp6s"),s=n("f0Cb"),b=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=l.Jb({type:a,selectors:[["app-dashboard"]],decls:6,vars:0,template:function(e,t){1&e&&(l.Vb(0,"mat-card"),l.Vb(1,"mat-card-header"),l.Vb(2,"mat-card-title"),l.Bc(3,"Dashboard"),l.Ub(),l.Ub(),l.Qb(4,"mat-divider"),l.Qb(5,"mat-card-content"),l.Ub())},directives:[u.a,u.c,u.e,s.a,u.b],styles:[""]}),a),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),Object.assign(this,t)},m=n("lTCR"),p=n.n(m),f=n("lJxs"),g=n("/IUn"),h=p.a(_templateObject()),v=(p.a(_templateObject2()),p.a(_templateObject3())),C=((i=function(){function e(t){_classCallCheck(this,e),this.apollo=t,this.actions=[],this.getActions()}return _createClass(e,[{key:"getActions",value:function(){this.actionsObs=this.apollo.watchQuery({query:h}).valueChanges.pipe(Object(f.a)((function(e){return e.data.actions})))}},{key:"getAllTasks",value:function(){return this.actionsObs}},{key:"delete",value:function(e){}},{key:"create",value:function(e){this.apollo.mutate({mutation:v,variables:{options:e}}).subscribe((function(e){console.log("got data",e)}),(function(e){console.log("there was an error",e)}))}}]),e}()).\u0275fac=function(e){return new(e||i)(l.Zb(g.b))},i.\u0275prov=l.Lb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=n("kmnG"),U=n("qFsG"),_=n("MutI"),k=n("bSwM"),O=n("NFeN");function w(e,t){if(1&e){var n=l.Wb();l.Vb(0,"mat-list-item"),l.Qb(1,"mat-checkbox",2),l.Vb(2,"div"),l.Bc(3),l.Ub(),l.Vb(4,"mat-icon",3),l.dc("click",(function(){l.tc(n);var e=t.$implicit;return l.hc().deleteAction(e)})),l.Bc(5,"delete"),l.Ub(),l.Ub()}if(2&e){var a=t.$implicit;l.Cb(1),l.mc("checked",a.done),l.Cb(2),l.Cc(a.title)}}function V(e,t){if(1&e&&(l.Vb(0,"mat-list-item"),l.Qb(1,"mat-checkbox",2),l.Vb(2,"div"),l.Bc(3),l.Ub(),l.Ub()),2&e){var n=t.$implicit;l.Cb(1),l.mc("checked",n.done),l.Cb(2),l.Cc(n.title)}}var S,M,j=((S=function(){function e(t){var n=this;_classCallCheck(this,e),this.actionService=t,this.actionService.actionsObs.subscribe((function(e){return n.actions=e})),this.newAction=new d}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"add",value:function(){this.actionService.create(this.newAction),this.newAction=new d}},{key:"deleteAction",value:function(e){}},{key:"actionsCompleted",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||S)(l.Pb(C))},S.\u0275cmp=l.Jb({type:S,selectors:[["app-actions"]],features:[l.Bb([C])],decls:14,vars:3,consts:[["matInput","","placeholder","What needs to be done?","autofocus","","autocomplete","off",3,"ngModel","ngModelChange","keyup.enter"],[4,"ngFor","ngForOf"],[3,"checked"],["aria-hidden","false","aria-label","Delete action",3,"click"]],template:function(e,t){1&e&&(l.Vb(0,"mat-card"),l.Vb(1,"mat-card-header"),l.Vb(2,"mat-card-title"),l.Bc(3,"Actions"),l.Ub(),l.Ub(),l.Qb(4,"mat-divider"),l.Vb(5,"mat-card-content"),l.Vb(6,"mat-form-field"),l.Vb(7,"input",0),l.dc("ngModelChange",(function(e){return t.newAction.title=e}))("keyup.enter",(function(){return t.add()})),l.Ub(),l.Ub(),l.Vb(8,"mat-list"),l.zc(9,w,6,2,"mat-list-item",1),l.Ub(),l.Vb(10,"h2"),l.Bc(11,"Completed"),l.Ub(),l.Vb(12,"mat-list"),l.zc(13,V,4,2,"mat-list-item",1),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Cb(7),l.mc("ngModel",t.newAction.title),l.Cb(2),l.mc("ngForOf",t.actions),l.Cb(4),l.mc("ngForOf",t.actionsCompleted()))},directives:[u.a,u.c,u.e,s.a,u.b,y.c,U.a,c.b,c.k,c.n,_.a,r.j,_.b,k.a,O.a],styles:[".mat-list-item[_ngcontent-%COMP%]{border-bottom:1px solid grey}.mat-list-item[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,50.2%,.1)}.mat-list-item[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-right:10px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-left:auto;font-size:18px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-list-item-content[_ngcontent-%COMP%]{width:70%}.flextest[_ngcontent-%COMP%]{border:1px solid #00f}.flextest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid red}"]}),S),P=n("6nr9"),B=n("wNeU"),z=n("QibW"),x=((M=function(){function e(t,n){_classCallCheck(this,e),this.settingsService=t,this.log=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loglevel=this.log.level.toString(),this.settingsService.theme.subscribe((function(t){return e.theme=t})),this.settingsService.dark.subscribe((function(t){return e.dark=t}))}},{key:"changeTheme",value:function(e){this.theme=e.value,this.settingsService.changeTheme(this.theme)}},{key:"changeLight",value:function(e){this.dark=e.value,this.settingsService.changeLight(this.dark)}},{key:"changeLoglevel",value:function(e){this.log.level=e.value}}]),e}()).\u0275fac=function(e){return new(e||M)(l.Pb(P.a),l.Pb(B.a))},M.\u0275cmp=l.Jb({type:M,selectors:[["app-settings"]],decls:43,vars:5,consts:[[1,"themeselection-card"],["id",""],["aria-label","Select a theme",1,"column-group",3,"ngModel","ngModelChange","change"],["value","numberone"],["value","numbertwo"],["aria-label","dark",1,"column-group",3,"ngModel","ngModelChange","change"],[3,"value"],["aria-label","Select log level",1,"column-group",3,"ngModel","ngModelChange","change"],["value","0"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"]],template:function(e,t){1&e&&(l.Vb(0,"mat-card",0),l.Vb(1,"mat-card-header"),l.Vb(2,"mat-card-title"),l.Bc(3,"Theme"),l.Ub(),l.Ub(),l.Qb(4,"mat-divider"),l.Vb(5,"mat-card-content"),l.Vb(6,"label",1),l.Bc(7,"Pick your favorite theme"),l.Ub(),l.Vb(8,"mat-radio-group",2),l.dc("ngModelChange",(function(e){return t.theme=e}))("change",(function(e){return t.changeTheme(e)})),l.Vb(9,"mat-radio-button",3),l.Bc(10,"Number One"),l.Ub(),l.Vb(11,"mat-radio-button",4),l.Bc(12,"Number Two"),l.Ub(),l.Ub(),l.Vb(13,"label",1),l.Bc(14,"Mode"),l.Ub(),l.Vb(15,"mat-radio-group",5),l.dc("ngModelChange",(function(e){return t.dark=e}))("change",(function(e){return t.changeLight(e)})),l.Vb(16,"mat-radio-button",6),l.Bc(17,"dark"),l.Ub(),l.Vb(18,"mat-radio-button",6),l.Bc(19,"light"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(20,"mat-card",0),l.Vb(21,"mat-card-header"),l.Vb(22,"mat-card-title"),l.Bc(23,"Logging"),l.Ub(),l.Ub(),l.Qb(24,"mat-divider"),l.Vb(25,"mat-card-content"),l.Vb(26,"label",1),l.Bc(27,"Select the log level"),l.Ub(),l.Vb(28,"mat-radio-group",7),l.dc("ngModelChange",(function(e){return t.loglevel=e}))("change",(function(e){return t.changeLoglevel(e)})),l.Vb(29,"mat-radio-button",8),l.Bc(30,"All"),l.Ub(),l.Vb(31,"mat-radio-button",9),l.Bc(32,"Debug"),l.Ub(),l.Vb(33,"mat-radio-button",10),l.Bc(34,"Info"),l.Ub(),l.Vb(35,"mat-radio-button",11),l.Bc(36,"Warn"),l.Ub(),l.Vb(37,"mat-radio-button",12),l.Bc(38,"Errors"),l.Ub(),l.Vb(39,"mat-radio-button",13),l.Bc(40,"Fatal"),l.Ub(),l.Vb(41,"mat-radio-button",14),l.Bc(42,"Off"),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Cb(8),l.mc("ngModel",t.theme),l.Cb(7),l.mc("ngModel",t.dark),l.Cb(1),l.mc("value",!0),l.Cb(2),l.mc("value",!1),l.Cb(10),l.mc("ngModel",t.loglevel))},directives:[u.a,u.c,u.e,s.a,u.b,z.b,c.k,c.n,z.a],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:10px}.mat-card-content[_ngcontent-%COMP%]{padding-top:10px}label[_ngcontent-%COMP%]{display:block;margin-top:10px;margin-bottom:10px}.column-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.column-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),M),D=n("M9IT"),I=n("XNiG"),$=n("JX91"),A=n("eIep"),T=n("w1tV"),Q=function(){function e(t,n){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;_classCallCheck(this,e),this.pageNumber=new I.a,this.pageSize=new I.a,this.sort=new I.a,this.page$=this.sort.pipe(Object($.a)(n),Object(A.a)((function(e){return a.pageNumber.pipe(Object($.a)(0),Object(A.a)((function(n){return t({page:n,sort:e,size:i})})))})),Object(T.a)())}return _createClass(e,[{key:"connect",value:function(){return this.page$.pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.length;if(0===a)throw new Error("list of properties cannot be empty.");return function(e){return Object(f.a)(function(e,t){return function(n){for(var a=n,i=0;i<t;i++){var r=a[e[i]];if(void 0===r)return;a=r}return a}}(t,a))(e)}}("content"))}},{key:"disconnect",value:function(){}},{key:"sortBy",value:function(e){this.sort.next(e)}},{key:"fetch",value:function(e){this.pageNumber.next(e)}},{key:"setSize",value:function(e){this.pageSize.next(e)}},{key:"getSize",value:function(){return 20}}]),e}(),L=n("2Vo4"),E=p.a(_templateObject4()),N=p.a(_templateObject5());p.a(_templateObject6()),p.a(_templateObject7());var R,F=((R=function(){function e(t){_classCallCheck(this,e),this.apollo=t,this.defaultPage=0,this.defaultPageSize=10,this.defaultpage={content:[],number:this.defaultPage,size:this.defaultPageSize,totalElements:100},this._pagedUsers=new L.a(this.defaultpage)}return _createClass(e,[{key:"page",value:function(e){return this.createpagedUserQueryRef(e),this._pagedUsers.asObservable()}},{key:"createpagedUserQueryRef",value:function(e){var t=this;this.pagedUserQueryRef=this.apollo.watchQuery({query:E,variables:{input:{pageSize:e.size,pageNo:e.page},sortby:{by:e.sort.property,sort:e.sort.order}}}),this.pagedUserQueryRef.valueChanges.subscribe((function(n){var a=n.data.pagedusers;t._pagedUsers.next({content:a.users,number:e.page,size:e.size,totalElements:a.total})}))}},{key:"refetchPagedUserQuery",value:function(){this.pagedUserQueryRef.refetch()}},{key:"deleteUser",value:function(e){var t=this;return this.apollo.mutate({mutation:N,variables:{id:e}}).subscribe((function(e){return _objectDestructuringEmpty(e),t.refetchPagedUserQuery(),!0}),(function(e){console.log("there was an error sending the query",e)})),!1}}]),e}()).\u0275fac=function(e){return new(e||R)(l.Zb(g.b))},R.\u0275prov=l.Lb({token:R,factory:R.\u0275fac,providedIn:"root"}),R),q=n("+0xr"),J=n("Dh3D"),W=function(){return[5,10,15,20]};function H(e,t){if(1&e){var n=l.Wb();l.Vb(0,"mat-paginator",12),l.dc("page",(function(e){return l.tc(n),l.hc().tableSource.fetch(e.pageIndex)})),l.Ub()}if(2&e){var a=t.ngIf;l.mc("length",a.totalElements)("pageSize",a.size)("pageIndex",a.number)("pageSizeOptions",l.nc(4,W))}}function G(e,t){1&e&&(l.Vb(0,"th",13),l.Bc(1," Email "),l.Ub())}function X(e,t){if(1&e&&(l.Vb(0,"td",14),l.Bc(1),l.Ub()),2&e){var n=t.$implicit;l.Cb(1),l.Dc(" ",n.email," ")}}function Z(e,t){1&e&&(l.Vb(0,"th",15),l.Bc(1," Uuid "),l.Ub())}function K(e,t){if(1&e&&(l.Vb(0,"td",14),l.Bc(1),l.Ub()),2&e){var n=t.$implicit;l.Cb(1),l.Dc(" ",n.id," ")}}function Y(e,t){1&e&&(l.Vb(0,"th",16),l.Bc(1," Action "),l.Ub())}function ee(e,t){if(1&e){var n=l.Wb();l.Vb(0,"td",17),l.Vb(1,"a",18),l.dc("click",(function(){l.tc(n);var e=t.$implicit;return l.hc().deleteUser(e)})),l.Bc(2,"Delete"),l.Ub(),l.Ub()}}function te(e,t){1&e&&l.Qb(0,"tr",19)}function ne(e,t){1&e&&l.Qb(0,"tr",20)}var ae,ie,re,ce=[{path:"",redirectTo:"dashboard"},{path:"dashboard",component:b},{path:"actions",component:j},{path:"settings",component:x},{path:"users",component:(ae=function(){function e(t){var n=this;_classCallCheck(this,e),this.usersService=t,this.displayedColumns=["id","email","controls"],this.tableSource=new Q((function(e){return n.usersService.page(e)}),{property:"email",order:"asc"},20)}return _createClass(e,[{key:"sortData",value:function(e){this.tableSource.sortBy({property:e.active,order:e.direction})}},{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){}},{key:"deleteUser",value:function(e){this.usersService.deleteUser(e.id)}},{key:"paginatorEvent",value:function(e){}}]),e}(),ae.\u0275fac=function(e){return new(e||ae)(l.Pb(F))},ae.\u0275cmp=l.Jb({type:ae,selectors:[["app-users"]],viewQuery:function(e,t){var n;1&e&&l.xc(D.a,!0),2&e&&l.qc(n=l.ec())&&(t.paginator=n.first)},decls:20,vars:6,consts:[["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page",4,"ngIf"],["mat-table","","matSort","","matSortActive","email","matSortDirection","asc","matSortDisableClear","true",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","","style","width:320px",4,"matHeaderCellDef"],["matColumnDef","controls"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",2,"width","320px"],["mat-header-cell",""],["mat-cell","",1,"action-link"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(l.Vb(0,"mat-card"),l.Vb(1,"mat-card-header"),l.Vb(2,"mat-card-title"),l.Bc(3,"Users"),l.Ub(),l.Ub(),l.Qb(4,"mat-divider"),l.Vb(5,"mat-card-content"),l.zc(6,H,1,5,"mat-paginator",0),l.ic(7,"async"),l.Vb(8,"table",1),l.dc("matSortChange",(function(e){return t.sortData(e)})),l.Tb(9,2),l.zc(10,G,2,0,"th",3),l.zc(11,X,2,1,"td",4),l.Sb(),l.Tb(12,5),l.zc(13,Z,2,0,"th",6),l.zc(14,K,2,1,"td",4),l.Sb(),l.Tb(15,7),l.zc(16,Y,2,0,"th",8),l.zc(17,ee,3,0,"td",9),l.Sb(),l.zc(18,te,1,0,"tr",10),l.zc(19,ne,1,0,"tr",11),l.Ub(),l.Ub(),l.Ub()),2&e&&(l.Cb(6),l.mc("ngIf",l.jc(7,4,t.tableSource.page$)),l.Cb(2),l.mc("dataSource",t.tableSource),l.Cb(10),l.mc("matHeaderRowDef",t.displayedColumns),l.Cb(1),l.mc("matRowDefColumns",t.displayedColumns))},directives:[u.a,u.c,u.e,s.a,u.b,r.k,q.j,J.a,q.c,q.e,q.b,q.g,q.i,D.a,q.d,J.b,q.a,q.f,q.h],pipes:[r.b],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),ae)}],oe=((ie=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:ie}),ie.\u0275inj=l.Mb({factory:function(e){return new(e||ie)},imports:[[o.e.forChild(ce)],o.e]}),ie),le=n("jAig"),ue=((re=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:re}),re.\u0275inj=l.Mb({factory:function(e){return new(e||re)},imports:[[r.c,le.a,c.g,c.o,oe]]}),re)}}]);