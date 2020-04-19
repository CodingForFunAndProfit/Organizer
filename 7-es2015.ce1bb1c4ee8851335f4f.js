(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vBIj:function(r,t,e){"use strict";e.r(t),e.d(t,"FrontendModule",(function(){return k}));var n=e("ofXK"),o=e("tyNb"),i=e("fXoL"),a=e("lGQG"),s=e("Wp6s"),c=e("wZkO"),l=e("mrSG"),u=e("3Pt+"),m=e("kmnG"),b=e("qFsG"),p=e("NFeN"),d=e("bTqV");function f(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Email is "),i.Vb(2,"strong"),i.Ac(3,"required"),i.Ub(),i.Ub())}function g(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Please enter a valid email address "),i.Ub())}function h(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Password is "),i.Vb(2,"strong"),i.Ac(3,"required"),i.Ub(),i.Ub())}function w(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Please enter a password with a minimum of 8 characters "),i.Ub())}let U=(()=>{class r{constructor(r,t,e){this.authService=r,this.formBuilder=t,this.router=e,this.email=new u.d("",[u.o.required,u.o.email]),this.password=new u.d("",[u.o.required,u.o.minLength(8)]),this.loginForm=this.formBuilder.group({email:this.email,password:this.password})}ngOnInit(){}login(){return Object(l.b)(this,void 0,void 0,(function*(){(yield this.authService.login(this.loginForm.value.email,this.loginForm.value.password))&&this.router.navigate(["/dashboard"])}))}logout(){this.authService.logout()}}return r.\u0275fac=function(t){return new(t||r)(i.Pb(a.a),i.Pb(u.c),i.Pb(o.a))},r.\u0275cmp=i.Jb({type:r,selectors:[["app-login"]],decls:21,vars:6,consts:[[1,"card-form",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","type","email","autocomplete","username"],["email",""],[4,"ngIf"],["matSuffix",""],["matInput","","type","password","autocomplete","current-password"],["password",""],["mat-raised-button","","color","accent","type","submit",1,"fw",3,"disabled"]],template:function(r,t){if(1&r&&(i.Vb(0,"form",0),i.dc("ngSubmit",(function(){return t.login()})),i.Vb(1,"mat-form-field",1),i.Vb(2,"mat-label"),i.Ac(3,"Email"),i.Ub(),i.Qb(4,"input",2,3),i.zc(6,f,4,0,"mat-error",4),i.zc(7,g,2,0,"mat-error",4),i.Vb(8,"mat-icon",5),i.Ac(9,"email"),i.Ub(),i.Ub(),i.Vb(10,"mat-form-field",1),i.Vb(11,"mat-label"),i.Ac(12,"Enter your password"),i.Ub(),i.Qb(13,"input",6,7),i.zc(15,h,4,0,"mat-error",4),i.zc(16,w,2,0,"mat-error",4),i.Vb(17,"mat-icon",5),i.Ac(18,"visibility_off"),i.Ub(),i.Ub(),i.Vb(19,"button",8),i.Ac(20," Login "),i.Ub(),i.Ub()),2&r){const r=i.rc(5),e=i.rc(14);i.mc("formGroup",t.loginForm),i.Cb(6),i.mc("ngIf",null==r.errors?null:r.errors.required),i.Cb(1),i.mc("ngIf",(null==r.errors?null:r.errors.email)&&!(null!=r.errors&&r.errors.required)),i.Cb(8),i.mc("ngIf",null==e.errors?null:e.errors.required),i.Cb(1),i.mc("ngIf",null==e.errors?null:e.errors.minlength),i.Cb(3),i.mc("disabled",!t.loginForm.valid)}},directives:[u.p,u.k,u.e,m.c,m.f,b.a,n.k,p.a,m.g,d.a,m.b],styles:[""]}),r})();var V=e("wNeU");function v(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Email is "),i.Vb(2,"strong"),i.Ac(3,"required"),i.Ub(),i.Ub())}function y(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Please enter a valid email address "),i.Ub())}function A(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Password is "),i.Vb(2,"strong"),i.Ac(3,"required"),i.Ub(),i.Ub())}function I(r,t){1&r&&(i.Vb(0,"mat-error"),i.Ac(1," Please enter a password with a minimum of 8 characters "),i.Ub())}let q=(()=>{class r{constructor(r,t){this.formBuilder=r,this.log=t,this.email=new u.d("",[u.o.required,u.o.email]),this.password=new u.d("",[u.o.required,u.o.minLength(8)]),this.signupForm=this.formBuilder.group({email:this.email,password:this.password})}ngOnInit(){}signup(){return Object(l.b)(this,void 0,void 0,(function*(){this.log.info("signing up")}))}}return r.\u0275fac=function(t){return new(t||r)(i.Pb(u.c),i.Pb(V.a))},r.\u0275cmp=i.Jb({type:r,selectors:[["app-signup"]],decls:21,vars:6,consts:[[1,"card-form",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","type","email","autocomplete","username"],["email",""],[4,"ngIf"],["matSuffix",""],["matInput","","type","password","autocomplete","new-password"],["password",""],["mat-raised-button","","color","accent","type","submit",1,"fw",3,"disabled"]],template:function(r,t){if(1&r&&(i.Vb(0,"form",0),i.dc("ngSubmit",(function(){return t.signup()})),i.Vb(1,"mat-form-field",1),i.Vb(2,"mat-label"),i.Ac(3,"Email"),i.Ub(),i.Qb(4,"input",2,3),i.zc(6,v,4,0,"mat-error",4),i.zc(7,y,2,0,"mat-error",4),i.Vb(8,"mat-icon",5),i.Ac(9,"email"),i.Ub(),i.Ub(),i.Vb(10,"mat-form-field",1),i.Vb(11,"mat-label"),i.Ac(12,"Enter your password"),i.Ub(),i.Qb(13,"input",6,7),i.zc(15,A,4,0,"mat-error",4),i.zc(16,I,2,0,"mat-error",4),i.Vb(17,"mat-icon",5),i.Ac(18,"visibility_off"),i.Ub(),i.Ub(),i.Vb(19,"button",8),i.Ac(20," Signup "),i.Ub(),i.Ub()),2&r){const r=i.rc(5),e=i.rc(14);i.mc("formGroup",t.signupForm),i.Cb(6),i.mc("ngIf",null==r.errors?null:r.errors.required),i.Cb(1),i.mc("ngIf",(null==r.errors?null:r.errors.email)&&!(null!=r.errors&&r.errors.required)),i.Cb(8),i.mc("ngIf",null==e.errors?null:e.errors.required),i.Cb(1),i.mc("ngIf",null==e.errors?null:e.errors.minlength),i.Cb(3),i.mc("disabled",!t.signupForm.valid)}},directives:[u.p,u.k,u.e,m.c,m.f,b.a,n.k,p.a,m.g,d.a,m.b],styles:[""]}),r})();function P(r,t){1&r&&i.Ac(0," Login ")}function C(r,t){1&r&&i.Ac(0," Signup ")}const S=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",component:(()=>{class r{constructor(r,t){this.router=r,this.authService=t,this.authService.currentUserValue&&this.router.navigate(["/dashboard"])}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)(i.Pb(o.a),i.Pb(a.a))},r.\u0275cmp=i.Jb({type:r,selectors:[["app-userauth"]],decls:10,vars:0,consts:[[1,"formwrapper"],[1,"formCard"],["mat-tab-label",""]],template:function(r,t){1&r&&(i.Vb(0,"div",0),i.Vb(1,"mat-card",1),i.Vb(2,"mat-card-content"),i.Vb(3,"mat-tab-group"),i.Vb(4,"mat-tab"),i.zc(5,P,1,0,"ng-template",2),i.Qb(6,"app-login"),i.Ub(),i.Vb(7,"mat-tab"),i.zc(8,C,1,0,"ng-template",2),i.Qb(9,"app-signup"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub())},directives:[s.a,s.b,c.b,c.a,c.c,U,q],styles:[".formCard[_ngcontent-%COMP%]{width:320px}.formwrapper[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}  .mat-tab-body-content{overflow:visible!important}"]}),r})()},{path:"confirmuser",component:(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=i.Jb({type:r,selectors:[["app-confirmuser"]],decls:2,vars:0,template:function(r,t){1&r&&(i.Vb(0,"p"),i.Ac(1,"confirmuser works!"),i.Ub())},styles:[""]}),r})()}];let F=(()=>{class r{}return r.\u0275mod=i.Nb({type:r}),r.\u0275inj=i.Mb({factory:function(t){return new(t||r)},imports:[[o.d.forChild(S)],o.d]}),r})();var z=e("jAig");let k=(()=>{class r{}return r.\u0275mod=i.Nb({type:r}),r.\u0275inj=i.Mb({factory:function(t){return new(t||r)},imports:[[n.c,F,z.a,u.f,u.n]]}),r})()}}]);