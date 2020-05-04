import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from "../common/shared.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-social-auth-call-back',
  templateUrl: './social-auth-call-back.component.html',
  styleUrls: ['./social-auth-call-back.component.css']
})
export class SocialAuthCallBackComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private route: ActivatedRoute,private sharedService: SharedService,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      emailid: "",
      error: "",
      statusCode: "",
      errortype: "",
    });

    this.route.queryParams.subscribe((params: Params) => {        
      var error = params["error"];       
      if (error!=undefined && error!="")      
      {
          var statusCode = params["statuscode"];
          var errortype = params["errortype"];
          this.customerForm.setValue({error:error,statusCode:statusCode,errortype:errortype,emailid:""});           
      }
      else{
          var id = params['UserPrincipalName'];      
          id=this.sharedService.decryptData(id);
          this.customerForm.setValue({emailid:id,statusCode:"",errortype:"",error:""});   
      }
    });
  }


  getControlLabel(type: string){
    return this.customerForm.controls[type].value;
   }

}
