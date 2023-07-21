import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BmicalculatorComponent } from './bmicalculator/bmicalculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { AssaignmentComponent } from './assaignment/assaignment.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GmailComponent } from './gmail/gmail.component';
import { QuotesComponent } from './quotes/quotes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserComponent } from './user/user.component';
import { StudentService } from './student.service';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankUserComponent } from './bank-user/bank-user.component';
import { authenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductuserComponent } from './productuser/productuser.component';
import { notifyGuard } from './notify.guard';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent,canActivate:[authenticationGuard], children:[
    {path:'home', component:HomeComponent },
    {path:'info', component:InfoComponent},
    {path:"variable", component:VariableComponent},
    {path:"interpolation", component:InterpolationComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:"twowaybinding",component:TwowaybindingComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"bmicalculator",component:BmicalculatorComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"circle",component:CircleComponent},
    {path:"structuraldirectives",component:StructuralDirectivesComponent},
    {path:"attribute-directives",component:AttributeDirectivesComponent},
    {path:"assaigment", component:AssaignmentComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'bank',component:BankComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'gmail',component:GmailComponent},
    {path:'quotes',component:QuotesComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'user',component:UserComponent},
    {path:'student',component:StudentComponent},
    {path:'createvehicle',component:CreateVehicleComponent,canDeactivate:[notifyGuard]},
    {path: 'bankuser', component:BankUserComponent},
    {path:'createuser', component:CreateUserComponent,canDeactivate:[notifyGuard]},
    {path:'productuser',component:ProductuserComponent,canDeactivate:[notifyGuard]}
  ]},
  {path : '', component:LoginComponent},
  {path : "**", component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  