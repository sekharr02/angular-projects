import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactHrComponent } from './contact-hr/contact-hr.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {path:'hr',component:ContactHrComponent},
  {path:'contactpage',component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
