import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {

  public formvehicles: FormGroup = new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel: new FormControl(),
    color:new FormControl(),
    image:new FormControl()
  });
  constructor(private vehicleservice:VehicleService){}
  check(){
    console.log(this.formvehicles);
   this.vehicleservice.createvehicle(this.formvehicles.value).subscribe(
    (data:any)=>{
      alert("created successfully")
    },
    (err:any)=>{
      alert("vehicle not created")
    }
   )
  }
  


}
