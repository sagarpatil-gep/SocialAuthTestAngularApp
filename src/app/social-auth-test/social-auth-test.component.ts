import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { SharedService } from "../common/shared.service";

@Component({
  selector: 'app-social-auth-test',
  templateUrl: './social-auth-test.component.html',
  styleUrls: ['./social-auth-test.component.css']
})
export class SocialAuthTestComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder,private httpClient: HttpClient,@Inject(DOCUMENT) private document: Document,private sharedService: SharedService) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      emailid: "",
      providertype: ""
    });
  }

  SubmitForm() {   
    this.callServer()//.subscribe(x=> console.log(x))    
  }

  callServer (){//: Observable<string>{
    var socialAuthUrl = "http://localhost:44324/SocialAuthentication/CheckValidUser";
    var providerType=this.customerForm.get('providertype').value;
    var emailId=this.customerForm.get('emailid').value;
    var redirectUrl="http://localhost:4200/SocialAuthCallBack";
    emailId= this.sharedService.encryptData(emailId.trim());
    redirectUrl= this.sharedService.encryptData(redirectUrl.trim()); 
    var strUrl = socialAuthUrl + "?" + "providerType=" + providerType + "&redirectUri="+redirectUrl+"&loginHint="+emailId+"";    
    this.document.location.href =strUrl;
   // return this.httpClient.get<string>(strUrl);
 }
}
