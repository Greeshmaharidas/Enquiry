import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEnquiryComponent} from './addenquiry/addenquiry.component';
import { EnquiryComponent} from './enquiry/enquiry.component';



const routes: Routes =   [
   { path:'add', component:AddEnquiryComponent },
   { path:'', component: EnquiryComponent },
   { path:'search', component: EnquiryComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
