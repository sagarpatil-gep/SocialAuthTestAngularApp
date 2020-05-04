import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialAuthTestComponent } from './social-auth-test/social-auth-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialAuthCallBackComponent } from './social-auth-call-back/social-auth-call-back.component';
import { SharedService } from './common/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    SocialAuthTestComponent,
    SocialAuthCallBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
