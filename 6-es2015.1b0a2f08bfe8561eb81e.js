(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rl3G:function(t,e,a){"use strict";a.r(e),a.d(e,"BackendModule",(function(){return et}));var n=a("ofXK"),o=a("3Pt+"),r=a("tyNb"),i=a("fXoL"),c=a("Wp6s"),s=a("f0Cb");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-dashboard"]],decls:6,vars:0,template:function(t,e){1&t&&(i.Vb(0,"mat-card"),i.Vb(1,"mat-card-header"),i.Vb(2,"mat-card-title"),i.Bc(3,"Dashboard"),i.Ub(),i.Ub(),i.Qb(4,"mat-divider"),i.Qb(5,"mat-card-content"),i.Ub())},directives:[c.a,c.c,c.e,s.a,c.b],styles:[""]}),t})();class b{constructor(t={}){Object.assign(this,t)}}var d=a("lTCR"),u=a.n(d),m=a("lJxs"),g=a("/IUn");const p=u.a`
    query getActions {
        actions {
            id
            title
            completed
        }
    }
`,h=(u.a`
    mutation deleteAction {
        actions {
            id
            title
            completed
        }
    }
`,u.a`
    mutation createAction($options: ActionInput) {
        createAction(options: $options) {
            id
            title
            completed
        }
    }
`);let f=(()=>{class t{constructor(t){this.apollo=t,this.actions=[],this.getActions()}getActions(){this.actionsObs=this.apollo.watchQuery({query:p}).valueChanges.pipe(Object(m.a)(t=>t.data.actions))}getAllTasks(){return this.actionsObs}delete(t){}create(t){this.apollo.mutate({mutation:h,variables:{options:t}}).subscribe(t=>{console.log("got data",t)},t=>{console.log("there was an error",t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(g.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=a("kmnG"),U=a("qFsG"),C=a("MutI"),V=a("bSwM"),w=a("NFeN");function y(t,e){if(1&t){const t=i.Wb();i.Vb(0,"mat-list-item"),i.Qb(1,"mat-checkbox",2),i.Vb(2,"div"),i.Bc(3),i.Ub(),i.Vb(4,"mat-icon",3),i.dc("click",(function(){i.tc(t);const a=e.$implicit;return i.hc().deleteAction(a)})),i.Bc(5,"delete"),i.Ub(),i.Ub()}if(2&t){const t=e.$implicit;i.Cb(1),i.mc("checked",t.done),i.Cb(2),i.Cc(t.title)}}function S(t,e){if(1&t&&(i.Vb(0,"mat-list-item"),i.Qb(1,"mat-checkbox",2),i.Vb(2,"div"),i.Bc(3),i.Ub(),i.Ub()),2&t){const t=e.$implicit;i.Cb(1),i.mc("checked",t.done),i.Cb(2),i.Cc(t.title)}}let O=(()=>{class t{constructor(t){this.actionService=t,this.actionService.actionsObs.subscribe(t=>this.actions=t),this.newAction=new b}ngOnInit(){}add(){this.actionService.create(this.newAction),this.newAction=new b}deleteAction(t){}actionsCompleted(){}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(f))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-actions"]],features:[i.Bb([f])],decls:14,vars:3,consts:[["matInput","","placeholder","What needs to be done?","autofocus","","autocomplete","off",3,"ngModel","ngModelChange","keyup.enter"],[4,"ngFor","ngForOf"],[3,"checked"],["aria-hidden","false","aria-label","Delete action",3,"click"]],template:function(t,e){1&t&&(i.Vb(0,"mat-card"),i.Vb(1,"mat-card-header"),i.Vb(2,"mat-card-title"),i.Bc(3,"Actions"),i.Ub(),i.Ub(),i.Qb(4,"mat-divider"),i.Vb(5,"mat-card-content"),i.Vb(6,"mat-form-field"),i.Vb(7,"input",0),i.dc("ngModelChange",(function(t){return e.newAction.title=t}))("keyup.enter",(function(){return e.add()})),i.Ub(),i.Ub(),i.Vb(8,"mat-list"),i.zc(9,y,6,2,"mat-list-item",1),i.Ub(),i.Vb(10,"h2"),i.Bc(11,"Completed"),i.Ub(),i.Vb(12,"mat-list"),i.zc(13,S,4,2,"mat-list-item",1),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Cb(7),i.mc("ngModel",e.newAction.title),i.Cb(2),i.mc("ngForOf",e.actions),i.Cb(4),i.mc("ngForOf",e.actionsCompleted()))},directives:[c.a,c.c,c.e,s.a,c.b,v.c,U.a,o.b,o.k,o.n,C.a,n.j,C.b,V.a,w.a],styles:[".mat-list-item[_ngcontent-%COMP%]{border-bottom:1px solid grey}.mat-list-item[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,50.2%,.1)}.mat-list-item[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-right:10px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-left:auto;font-size:18px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-list-item-content[_ngcontent-%COMP%]{width:70%}.flextest[_ngcontent-%COMP%]{border:1px solid #00f}.flextest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();var M=a("6nr9"),B=a("wNeU"),k=a("QibW");let P=(()=>{class t{constructor(t,e){this.settingsService=t,this.log=e}ngOnInit(){this.loglevel=this.log.level.toString(),this.settingsService.theme.subscribe(t=>this.theme=t),this.settingsService.dark.subscribe(t=>this.dark=t)}changeTheme(t){this.theme=t.value,this.settingsService.changeTheme(this.theme)}changeLight(t){this.dark=t.value,this.settingsService.changeLight(this.dark)}changeLoglevel(t){this.log.level=t.value}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(M.a),i.Pb(B.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-settings"]],decls:43,vars:5,consts:[[1,"themeselection-card"],["id",""],["aria-label","Select a theme",1,"column-group",3,"ngModel","ngModelChange","change"],["value","numberone"],["value","numbertwo"],["aria-label","dark",1,"column-group",3,"ngModel","ngModelChange","change"],[3,"value"],["aria-label","Select log level",1,"column-group",3,"ngModel","ngModelChange","change"],["value","0"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"]],template:function(t,e){1&t&&(i.Vb(0,"mat-card",0),i.Vb(1,"mat-card-header"),i.Vb(2,"mat-card-title"),i.Bc(3,"Theme"),i.Ub(),i.Ub(),i.Qb(4,"mat-divider"),i.Vb(5,"mat-card-content"),i.Vb(6,"label",1),i.Bc(7,"Pick your favorite theme"),i.Ub(),i.Vb(8,"mat-radio-group",2),i.dc("ngModelChange",(function(t){return e.theme=t}))("change",(function(t){return e.changeTheme(t)})),i.Vb(9,"mat-radio-button",3),i.Bc(10,"Number One"),i.Ub(),i.Vb(11,"mat-radio-button",4),i.Bc(12,"Number Two"),i.Ub(),i.Ub(),i.Vb(13,"label",1),i.Bc(14,"Mode"),i.Ub(),i.Vb(15,"mat-radio-group",5),i.dc("ngModelChange",(function(t){return e.dark=t}))("change",(function(t){return e.changeLight(t)})),i.Vb(16,"mat-radio-button",6),i.Bc(17,"dark"),i.Ub(),i.Vb(18,"mat-radio-button",6),i.Bc(19,"light"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Vb(20,"mat-card",0),i.Vb(21,"mat-card-header"),i.Vb(22,"mat-card-title"),i.Bc(23,"Logging"),i.Ub(),i.Ub(),i.Qb(24,"mat-divider"),i.Vb(25,"mat-card-content"),i.Vb(26,"label",1),i.Bc(27,"Select the log level"),i.Ub(),i.Vb(28,"mat-radio-group",7),i.dc("ngModelChange",(function(t){return e.loglevel=t}))("change",(function(t){return e.changeLoglevel(t)})),i.Vb(29,"mat-radio-button",8),i.Bc(30,"All"),i.Ub(),i.Vb(31,"mat-radio-button",9),i.Bc(32,"Debug"),i.Ub(),i.Vb(33,"mat-radio-button",10),i.Bc(34,"Info"),i.Ub(),i.Vb(35,"mat-radio-button",11),i.Bc(36,"Warn"),i.Ub(),i.Vb(37,"mat-radio-button",12),i.Bc(38,"Errors"),i.Ub(),i.Vb(39,"mat-radio-button",13),i.Bc(40,"Fatal"),i.Ub(),i.Vb(41,"mat-radio-button",14),i.Bc(42,"Off"),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Cb(8),i.mc("ngModel",e.theme),i.Cb(7),i.mc("ngModel",e.dark),i.Cb(1),i.mc("value",!0),i.Cb(2),i.mc("value",!1),i.Cb(10),i.mc("ngModel",e.loglevel))},directives:[c.a,c.c,c.e,s.a,c.b,k.b,o.k,o.n,k.a],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:10px}.mat-card-content[_ngcontent-%COMP%]{padding-top:10px}label[_ngcontent-%COMP%]{display:block;margin-top:10px;margin-bottom:10px}.column-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.column-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:5px}"]}),t})();var z=a("M9IT"),x=a("XNiG"),D=a("JX91"),I=a("eIep"),$=a("w1tV");class _{constructor(t,e,a=10){this.pageNumber=new x.a,this.pageSize=new x.a,this.sort=new x.a,this.page$=this.sort.pipe(Object(D.a)(e),Object(I.a)(e=>this.pageNumber.pipe(Object(D.a)(0),Object(I.a)(n=>t({page:n,sort:e,size:a})))),Object($.a)())}connect(){return this.page$.pipe(function(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return a=>Object(m.a)(function(t,e){return a=>{let n=a;for(let o=0;o<e;o++){const e=n[t[o]];if(void 0===e)return;n=e}return n}}(t,e))(a)}("content"))}disconnect(){}sortBy(t){this.sort.next(t)}fetch(t){this.pageNumber.next(t)}setSize(t){this.pageSize.next(t)}getSize(){return 20}}var A=a("2Vo4");const Q=u.a`
    query getUsers($input: PagingInput!, $sortby: SortByInput!) {
        pagedusers(input: $input, sortby: $sortby) {
            users {
                id
                email
            }
            total
        }
    }
`,j=u.a`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id)
    }
`;u.a`
    query getUser($id: String!) {
        user(id: $id) {
            id
            email
        }
    }
`,u.a`
    mutation updateUser($id: String!, $input: UserInput!) {
        updateUser(id: $id, input: $input)
    }
`;let N=(()=>{class t{constructor(t){this.apollo=t,this.defaultPage=0,this.defaultPageSize=10,this.defaultpage={content:[],number:this.defaultPage,size:this.defaultPageSize,totalElements:100},this._pagedUsers=new A.a(this.defaultpage)}page(t){return this.createpagedUserQueryRef(t),this._pagedUsers.asObservable()}createpagedUserQueryRef(t){this.pagedUserQueryRef=this.apollo.watchQuery({query:Q,variables:{input:{pageSize:t.size,pageNo:t.page},sortby:{by:t.sort.property,sort:t.sort.order}}}),this.pagedUserQueryRef.valueChanges.subscribe(e=>{const a=e.data.pagedusers;this._pagedUsers.next({content:a.users,number:t.page,size:t.size,totalElements:a.total})})}refetchPagedUserQuery(){this.pagedUserQueryRef.refetch()}deleteUser(t){return this.apollo.mutate({mutation:j,variables:{id:t}}).subscribe(({})=>(this.refetchPagedUserQuery(),!0),t=>{console.log("there was an error sending the query",t)}),!1}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(g.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=a("+0xr"),L=a("Dh3D");const R=function(){return[5,10,15,20]};function E(t,e){if(1&t){const t=i.Wb();i.Vb(0,"mat-paginator",12),i.dc("page",(function(e){return i.tc(t),i.hc().tableSource.fetch(e.pageIndex)})),i.Ub()}if(2&t){const t=e.ngIf;i.mc("length",t.totalElements)("pageSize",t.size)("pageIndex",t.number)("pageSizeOptions",i.nc(4,R))}}function F(t,e){1&t&&(i.Vb(0,"th",13),i.Bc(1," Email "),i.Ub())}function q(t,e){if(1&t&&(i.Vb(0,"td",14),i.Bc(1),i.Ub()),2&t){const t=e.$implicit;i.Cb(1),i.Dc(" ",t.email," ")}}function J(t,e){1&t&&(i.Vb(0,"th",15),i.Bc(1," Uuid "),i.Ub())}function W(t,e){if(1&t&&(i.Vb(0,"td",14),i.Bc(1),i.Ub()),2&t){const t=e.$implicit;i.Cb(1),i.Dc(" ",t.id," ")}}function H(t,e){1&t&&(i.Vb(0,"th",16),i.Bc(1," Action "),i.Ub())}function G(t,e){if(1&t){const t=i.Wb();i.Vb(0,"td",17),i.Vb(1,"a",18),i.dc("click",(function(){i.tc(t);const a=e.$implicit;return i.hc().deleteUser(a)})),i.Bc(2,"Delete"),i.Ub(),i.Ub()}}function X(t,e){1&t&&i.Qb(0,"tr",19)}function Z(t,e){1&t&&i.Qb(0,"tr",20)}const K=[{path:"",redirectTo:"dashboard"},{path:"dashboard",component:l},{path:"actions",component:O},{path:"settings",component:P},{path:"users",component:(()=>{class t{constructor(t){this.usersService=t,this.displayedColumns=["id","email","controls"],this.tableSource=new _(t=>this.usersService.page(t),{property:"email",order:"asc"},20)}sortData(t){this.tableSource.sortBy({property:t.active,order:t.direction})}ngOnInit(){}ngAfterViewInit(){}deleteUser(t){this.usersService.deleteUser(t.id)}paginatorEvent(t){}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(N))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-users"]],viewQuery:function(t,e){var a;1&t&&i.xc(z.a,!0),2&t&&i.qc(a=i.ec())&&(e.paginator=a.first)},decls:20,vars:6,consts:[["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page",4,"ngIf"],["mat-table","","matSort","","matSortActive","email","matSortDirection","asc","matSortDisableClear","true",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","","style","width:320px",4,"matHeaderCellDef"],["matColumnDef","controls"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",2,"width","320px"],["mat-header-cell",""],["mat-cell","",1,"action-link"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(i.Vb(0,"mat-card"),i.Vb(1,"mat-card-header"),i.Vb(2,"mat-card-title"),i.Bc(3,"Users"),i.Ub(),i.Ub(),i.Qb(4,"mat-divider"),i.Vb(5,"mat-card-content"),i.zc(6,E,1,5,"mat-paginator",0),i.ic(7,"async"),i.Vb(8,"table",1),i.dc("matSortChange",(function(t){return e.sortData(t)})),i.Tb(9,2),i.zc(10,F,2,0,"th",3),i.zc(11,q,2,1,"td",4),i.Sb(),i.Tb(12,5),i.zc(13,J,2,0,"th",6),i.zc(14,W,2,1,"td",4),i.Sb(),i.Tb(15,7),i.zc(16,H,2,0,"th",8),i.zc(17,G,3,0,"td",9),i.Sb(),i.zc(18,X,1,0,"tr",10),i.zc(19,Z,1,0,"tr",11),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Cb(6),i.mc("ngIf",i.jc(7,4,e.tableSource.page$)),i.Cb(2),i.mc("dataSource",e.tableSource),i.Cb(10),i.mc("matHeaderRowDef",e.displayedColumns),i.Cb(1),i.mc("matRowDefColumns",e.displayedColumns))},directives:[c.a,c.c,c.e,s.a,c.b,n.k,T.j,L.a,T.c,T.e,T.b,T.g,T.i,z.a,T.d,L.b,T.a,T.f,T.h],pipes:[n.b],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let Y=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(K)],r.e]}),t})();var tt=a("jAig");let et=(()=>{class t{}return t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({factory:function(e){return new(e||t)},imports:[[n.c,tt.a,o.g,o.o,Y]]}),t})()}}]);