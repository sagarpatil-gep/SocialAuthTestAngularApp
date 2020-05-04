import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialAuthCallBackComponent } from './social-auth-call-back/social-auth-call-back.component';
import { SocialAuthTestComponent } from './social-auth-test/social-auth-test.component';


const routes: Routes = [
  { path: 'SocialAuthCallBack', component: SocialAuthCallBackComponent },
  { path: 'SocialAuthTest',  component: SocialAuthTestComponent  },
  { path: '',  component: SocialAuthTestComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
