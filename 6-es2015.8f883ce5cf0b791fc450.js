(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rl3G:function(t,e,a){"use strict";a.r(e),a.d(e,"BackendModule",(function(){return tt}));var n=a("ofXK"),i=a("3Pt+"),r=a("tyNb"),c=a("fXoL"),o=a("Wp6s"),s=a("f0Cb");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-dashboard"]],decls:6,vars:0,template:function(t,e){1&t&&(c.Vb(0,"mat-card"),c.Vb(1,"mat-card-header"),c.Vb(2,"mat-card-title"),c.yc(3,"Dashboard"),c.Ub(),c.Ub(),c.Qb(4,"mat-divider"),c.Qb(5,"mat-card-content"),c.Ub())},directives:[o.a,o.c,o.e,s.a,o.b],styles:[""]}),t})();class b{constructor(t={}){Object.assign(this,t)}}var d=a("lTCR"),m=a.n(d),u=a("lJxs"),p=a("/IUn");const h=m.a`
    query getActions {
        actions {
            id
            title
            completed
        }
    }
`,g=(m.a`
    mutation deleteAction {
        actions {
            id
            title
            completed
        }
    }
`,m.a`
    mutation createAction($options: ActionInput) {
        createAction(options: $options) {
            id
            title
            completed
        }
    }
`);let f=(()=>{class t{constructor(t){this.apollo=t,this.actions=[],this.getActions()}getActions(){this.actionsObs=this.apollo.watchQuery({query:h}).valueChanges.pipe(Object(u.a)(t=>t.data.actions))}getAllTasks(){return this.actionsObs}delete(t){}create(t){this.apollo.mutate({mutation:g,variables:{options:t}}).subscribe(t=>{console.log("got data",t)},t=>{console.log("there was an error",t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(p.b))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=a("kmnG"),U=a("qFsG"),v=a("MutI"),C=a("bSwM"),w=a("NFeN");function S(t,e){if(1&t){const t=c.Wb();c.Vb(0,"mat-list-item"),c.Qb(1,"mat-checkbox",2),c.Vb(2,"div"),c.yc(3),c.Ub(),c.Vb(4,"mat-icon",3),c.dc("click",(function(){c.rc(t);const a=e.$implicit;return c.hc().deleteAction(a)})),c.yc(5,"delete"),c.Ub(),c.Ub()}if(2&t){const t=e.$implicit;c.Cb(1),c.mc("checked",t.done),c.Cb(2),c.zc(t.title)}}function V(t,e){if(1&t&&(c.Vb(0,"mat-list-item"),c.Qb(1,"mat-checkbox",2),c.Vb(2,"div"),c.yc(3),c.Ub(),c.Ub()),2&t){const t=e.$implicit;c.Cb(1),c.mc("checked",t.done),c.Cb(2),c.zc(t.title)}}let O=(()=>{class t{constructor(t){this.actionService=t,this.actionService.actionsObs.subscribe(t=>this.actions=t),this.newAction=new b}ngOnInit(){}add(){this.actionService.create(this.newAction),this.newAction=new b}deleteAction(t){}actionsCompleted(){}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(f))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-actions"]],features:[c.Bb([f])],decls:14,vars:3,consts:[["matInput","","placeholder","What needs to be done?","autofocus","","autocomplete","off",3,"ngModel","ngModelChange","keyup.enter"],[4,"ngFor","ngForOf"],[3,"checked"],["aria-hidden","false","aria-label","Delete action",3,"click"]],template:function(t,e){1&t&&(c.Vb(0,"mat-card"),c.Vb(1,"mat-card-header"),c.Vb(2,"mat-card-title"),c.yc(3,"Actions"),c.Ub(),c.Ub(),c.Qb(4,"mat-divider"),c.Vb(5,"mat-card-content"),c.Vb(6,"mat-form-field"),c.Vb(7,"input",0),c.dc("ngModelChange",(function(t){return e.newAction.title=t}))("keyup.enter",(function(){return e.add()})),c.Ub(),c.Ub(),c.Vb(8,"mat-list"),c.xc(9,S,6,2,"mat-list-item",1),c.Ub(),c.Vb(10,"h2"),c.yc(11,"Completed"),c.Ub(),c.Vb(12,"mat-list"),c.xc(13,V,4,2,"mat-list-item",1),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Cb(7),c.mc("ngModel",e.newAction.title),c.Cb(2),c.mc("ngForOf",e.actions),c.Cb(4),c.mc("ngForOf",e.actionsCompleted()))},directives:[o.a,o.c,o.e,s.a,o.b,y.b,U.a,i.b,i.j,i.m,v.a,n.j,v.b,C.a,w.a],styles:[".mat-list-item[_ngcontent-%COMP%]{border-bottom:1px solid grey}.mat-list-item[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,50.2%,.1)}.mat-list-item[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-right:10px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-left:auto;font-size:18px}.mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-list-item-content[_ngcontent-%COMP%]{width:70%}.flextest[_ngcontent-%COMP%]{border:1px solid #00f}.flextest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();var x=a("6nr9"),M=a("QibW");let k=(()=>{class t{constructor(t){this.settingsService=t}ngOnInit(){this.settingsService.theme.subscribe(t=>this.theme=t),this.settingsService.dark.subscribe(t=>this.dark=t)}changeTheme(t){this.theme=t.value,this.settingsService.changeTheme(this.theme)}changeLight(t){this.dark=t.value,this.settingsService.changeLight(this.dark)}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(x.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-settings"]],decls:20,vars:4,consts:[[1,"themeselection-card"],["id",""],["aria-label","Select a theme",3,"ngModel","ngModelChange","change"],["value","numberone"],["value","numbertwo"],["aria-label","dark",3,"ngModel","ngModelChange","change"],[3,"value"]],template:function(t,e){1&t&&(c.Vb(0,"mat-card",0),c.Vb(1,"mat-card-header"),c.Vb(2,"mat-card-title"),c.yc(3,"Theme"),c.Ub(),c.Ub(),c.Qb(4,"mat-divider"),c.Vb(5,"mat-card-content"),c.Vb(6,"label",1),c.yc(7,"Pick your favorite theme"),c.Ub(),c.Vb(8,"mat-radio-group",2),c.dc("ngModelChange",(function(t){return e.theme=t}))("change",(function(t){return e.changeTheme(t)})),c.Vb(9,"mat-radio-button",3),c.yc(10,"Number One"),c.Ub(),c.Vb(11,"mat-radio-button",4),c.yc(12,"Number Two"),c.Ub(),c.Ub(),c.Vb(13,"label",1),c.yc(14,"Mode"),c.Ub(),c.Vb(15,"mat-radio-group",5),c.dc("ngModelChange",(function(t){return e.dark=t}))("change",(function(t){return e.changeLight(t)})),c.Vb(16,"mat-radio-button",6),c.yc(17,"dark"),c.Ub(),c.Vb(18,"mat-radio-button",6),c.yc(19,"light"),c.Ub(),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Cb(8),c.mc("ngModel",e.theme),c.Cb(7),c.mc("ngModel",e.dark),c.Cb(1),c.mc("value",!0),c.Cb(2),c.mc("value",!1))},directives:[o.a,o.c,o.e,s.a,o.b,M.b,i.j,i.m,M.a],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:10px}.mat-card-content[_ngcontent-%COMP%]{padding-top:10px}label[_ngcontent-%COMP%]{display:block;margin-top:10px;margin-bottom:10px}"]}),t})();var P=a("M9IT"),z=a("XNiG"),I=a("JX91"),$=a("eIep"),A=a("w1tV");class D{constructor(t,e,a=10){this.pageNumber=new z.a,this.pageSize=new z.a,this.sort=new z.a,this.page$=this.sort.pipe(Object(I.a)(e),Object($.a)(e=>this.pageNumber.pipe(Object(I.a)(0),Object($.a)(n=>t({page:n,sort:e,size:a})))),Object(A.a)())}connect(){return this.page$.pipe(function(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return a=>Object(u.a)(function(t,e){return a=>{let n=a;for(let i=0;i<e;i++){const e=n[t[i]];if(void 0===e)return;n=e}return n}}(t,e))(a)}("content"))}disconnect(){}sortBy(t){this.sort.next(t)}fetch(t){this.pageNumber.next(t)}setSize(t){this.pageSize.next(t)}getSize(){return 20}}var Q=a("2Vo4");const _=m.a`
    query getUsers($input: PagingInput!, $sortby: SortByInput!) {
        pagedusers(input: $input, sortby: $sortby) {
            users {
                id
                email
            }
            total
        }
    }
`,j=m.a`
    mutation deleteUser($id: String!) {
        deleteUser(id: $id)
    }
`;m.a`
    query getUser($id: String!) {
        user(id: $id) {
            id
            email
        }
    }
`,m.a`
    mutation updateUser($id: String!, $input: UserInput!) {
        updateUser(id: $id, input: $input)
    }
`;let N=(()=>{class t{constructor(t){this.apollo=t,this.defaultPage=0,this.defaultPageSize=10,this.defaultpage={content:[],number:this.defaultPage,size:this.defaultPageSize,totalElements:100},this._pagedUsers=new Q.a(this.defaultpage)}page(t){return this.createpagedUserQueryRef(t),this._pagedUsers.asObservable()}createpagedUserQueryRef(t){this.pagedUserQueryRef=this.apollo.watchQuery({query:_,variables:{input:{pageSize:t.size,pageNo:t.page},sortby:{by:t.sort.property,sort:t.sort.order}}}),this.pagedUserQueryRef.valueChanges.subscribe(e=>{const a=e.data.pagedusers;this._pagedUsers.next({content:a.users,number:t.page,size:t.size,totalElements:a.total})})}refetchPagedUserQuery(){this.pagedUserQueryRef.refetch()}deleteUser(t){return this.apollo.mutate({mutation:j,variables:{id:t}}).subscribe(({})=>(this.refetchPagedUserQuery(),!0),t=>{console.log("there was an error sending the query",t)}),!1}}return t.\u0275fac=function(e){return new(e||t)(c.Zb(p.b))},t.\u0275prov=c.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=a("+0xr"),R=a("Dh3D");const E=function(){return[5,10,15,20]};function F(t,e){if(1&t){const t=c.Wb();c.Vb(0,"mat-paginator",12),c.dc("page",(function(e){return c.rc(t),c.hc().tableSource.fetch(e.pageIndex)})),c.Ub()}if(2&t){const t=e.ngIf;c.mc("length",t.totalElements)("pageSize",t.size)("pageIndex",t.number)("pageSizeOptions",c.nc(4,E))}}function J(t,e){1&t&&(c.Vb(0,"th",13),c.yc(1," Email "),c.Ub())}function L(t,e){if(1&t&&(c.Vb(0,"td",14),c.yc(1),c.Ub()),2&t){const t=e.$implicit;c.Cb(1),c.Ac(" ",t.email," ")}}function q(t,e){1&t&&(c.Vb(0,"th",15),c.yc(1," Uuid "),c.Ub())}function B(t,e){if(1&t&&(c.Vb(0,"td",14),c.yc(1),c.Ub()),2&t){const t=e.$implicit;c.Cb(1),c.Ac(" ",t.id," ")}}function W(t,e){1&t&&(c.Vb(0,"th",16),c.yc(1," Action "),c.Ub())}function H(t,e){if(1&t){const t=c.Wb();c.Vb(0,"td",17),c.Vb(1,"a",18),c.dc("click",(function(){c.rc(t);const a=e.$implicit;return c.hc().deleteUser(a)})),c.yc(2,"Delete"),c.Ub(),c.Ub()}}function G(t,e){1&t&&c.Qb(0,"tr",19)}function X(t,e){1&t&&c.Qb(0,"tr",20)}const Z=[{path:"",redirectTo:"dashboard"},{path:"dashboard",component:l},{path:"actions",component:O},{path:"settings",component:k},{path:"users",component:(()=>{class t{constructor(t){this.usersService=t,this.displayedColumns=["id","email","controls"],this.tableSource=new D(t=>this.usersService.page(t),{property:"email",order:"asc"},20)}sortData(t){this.tableSource.sortBy({property:t.active,order:t.direction})}ngOnInit(){}ngAfterViewInit(){}deleteUser(t){this.usersService.deleteUser(t.id)}paginatorEvent(t){}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(N))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-users"]],viewQuery:function(t,e){var a;1&t&&c.vc(P.a,!0),2&t&&c.oc(a=c.ec())&&(e.paginator=a.first)},decls:20,vars:6,consts:[["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page",4,"ngIf"],["mat-table","","matSort","","matSortActive","email","matSortDirection","asc","matSortDisableClear","true",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","","style","width:320px",4,"matHeaderCellDef"],["matColumnDef","controls"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","action-link",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["paginatorEvent","","showFirstLastButtons","",3,"length","pageSize","pageIndex","pageSizeOptions","page"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",2,"width","320px"],["mat-header-cell",""],["mat-cell","",1,"action-link"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Vb(0,"mat-card"),c.Vb(1,"mat-card-header"),c.Vb(2,"mat-card-title"),c.yc(3,"Users"),c.Ub(),c.Ub(),c.Qb(4,"mat-divider"),c.Vb(5,"mat-card-content"),c.xc(6,F,1,5,"mat-paginator",0),c.ic(7,"async"),c.Vb(8,"table",1),c.dc("matSortChange",(function(t){return e.sortData(t)})),c.Tb(9,2),c.xc(10,J,2,0,"th",3),c.xc(11,L,2,1,"td",4),c.Sb(),c.Tb(12,5),c.xc(13,q,2,0,"th",6),c.xc(14,B,2,1,"td",4),c.Sb(),c.Tb(15,7),c.xc(16,W,2,0,"th",8),c.xc(17,H,3,0,"td",9),c.Sb(),c.xc(18,G,1,0,"tr",10),c.xc(19,X,1,0,"tr",11),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Cb(6),c.mc("ngIf",c.jc(7,4,e.tableSource.page$)),c.Cb(2),c.mc("dataSource",e.tableSource),c.Cb(10),c.mc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.mc("matRowDefColumns",e.displayedColumns))},directives:[o.a,o.c,o.e,s.a,o.b,n.k,T.j,R.a,T.c,T.e,T.b,T.g,T.i,P.a,T.d,R.b,T.a,T.f,T.h],pipes:[n.b],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let K=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[r.d.forChild(Z)],r.d]}),t})();var Y=a("jAig");let tt=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[n.c,Y.a,i.f,i.n,K]]}),t})()}}]);