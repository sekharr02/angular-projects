import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { BmicalculatorComponent } from './bmicalculator/bmicalculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import {HttpClientModule} from '@angular/common/http';
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
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankUserComponent } from './bank-user/bank-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductuserComponent } from './productuser/productuser.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InfoComponent,
    VariableComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    BmicalculatorComponent,
    RectangleComponent,
    CircleComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    AssaignmentComponent,
    VehicleComponent,
    BankComponent,
    FlipkartComponent,
    GmailComponent,
    QuotesComponent,
    GalleryComponent,
    UserComponent,
    StudentComponent,
    CreateVehicleComponent,
    BankUserComponent,
    CreateUserComponent,
    ProductuserComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
