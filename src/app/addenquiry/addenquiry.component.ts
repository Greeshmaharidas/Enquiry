import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators ,FormGroup} from '@angular/forms';
import { EnquiryService } from '../services/enquiry.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addenquiry',
  templateUrl: './addenquiry.component.html',
  styleUrls: ['./addenquiry.component.css']
})
export class AddEnquiryComponent implements OnInit {
  EnquiryForm;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private EnquiryService:EnquiryService) { 
    this.EnquiryForm = this.formBuilder.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.minLength(3)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
      comment: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      
    });
  }




  ngOnInit() {
  }


  add(){
    if(!this.EnquiryForm.valid){
      console.log(this.EnquiryForm);
      alert("You have an error")
      //this.commonService.showError();
      return;
    }
    this.EnquiryService.Enquiry(this.EnquiryForm.value)
      
      .subscribe(data=>{
        alert("success");
        this.EnquiryForm.reset();
        this.router.navigate(['']);
      });
  }
  get(name){
    return this.EnquiryForm.get(name);
  }
  hasError(name){
    return this.get(name).errors && (this.get(name).dirty || this.get(name).touched)
  }
}



