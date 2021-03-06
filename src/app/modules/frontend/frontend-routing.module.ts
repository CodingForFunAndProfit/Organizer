import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmuserComponent } from './components/confirmuser/confirmuser.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './components/changepassword/changepassword.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
    },
    {
        path: 'changepassword/:token',
        component: ChangePasswordComponent,
    },
    {
        path: 'confirmuser/:confirmationUuid',
        component: ConfirmuserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FrontendRoutingModule {}
