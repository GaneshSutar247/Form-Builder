import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'app/shared/common.service';
import genderList from 'assets/ConstantJSON/genderList.json';







@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent{

    constructor(private _fb:FormBuilder,private common:CommonService) { }

enquiryForm:FormGroup;

public genderlist:{code:string,Value:string}[]=genderList;

schemelist:string[]=["scheme1","scheme2","scheme3"];
  ngOnInit(): void {
    this.enquiryForm=this._fb.group(
      {
        id:[],
        cfirstname:['',Validators.required],
        cmiddlename:['',Validators.required],
        clastname:['',Validators.required],
        Dcdob:['',Validators.required],
        cage:['',Validators.required],
        cgender:['',Validators.required],
        cpanid:['',Validators.required],
        cadharnumber:['',Validators.required],
        cincomedetails:['',Validators.required],
        cemail:['',Validators.required],
        cmobileno:['',Validators.required],
        caltmobileno:['',Validators.required],

        creqamtloant:['',Validators.required],
        cenquirydate:['',Validators.required],
        goldschemename:['',Validators.required],
       
        chousedetails:['',Validators.required],
        cstreet:['',Validators.required],
        city:['',Validators.required],
        cstate:['',Validators.required],
        cpincode:['',Validators.required],

      }


      )

    } 
    addenquiry()
    {
     console.log(this.enquiryForm.value);
     this.common.savecustomerenquiry(this.enquiryForm.value).subscribe();
    } 
}