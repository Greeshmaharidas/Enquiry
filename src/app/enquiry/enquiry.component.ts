import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators ,FormGroup} from '@angular/forms';

import {EnquiryService} from '../services/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent  implements OnInit {
  title="Enquiry list";
  enquiries:any=[];
  searchForm;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private enquiryService:EnquiryService) { 
    this.searchForm = this.formBuilder.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ])

    });
  }
  

  ngOnInit() {
    this.getenquiries();
  }
  getenquiries(){
    this.enquiryService.get()
    .subscribe(data=>{
      this.enquiries=data;
    });
    }
  
  addEnquiry(){
    this.router.navigate(['add']);
  }
  search(){
    console.log(this.searchForm.value);
this.enquiryService.search(this.searchForm.value)
.subscribe((data:any)=>{
  console.log(data);
  this.enquiries=data;
},err=>{
  alert(err.error.message);



});
  }
  
}

  
  

  
