import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {
  public id:any={};

  public formvehicles: FormGroup = new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel: new FormControl(),
    color:new FormControl(),
    image:new FormControl()
  });
  constructor(private vehicleservice:VehicleService, private activated:ActivatedRoute){
    activated.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        vehicleservice.vehicledetail(this.id).subscribe(
          (data:any)=>{
            this.formvehicles.patchValue(data)
          }
        )
      }
    )
  }
  check(){
    console.log(this.formvehicles);
    if(this.id?.length>0){
       this.vehicleservice.editvehicle(this.id,this.formvehicles.value).subscribe(
    (data:any)=>{
      alert("vehicle updated successfully")
    },
    (err:any)=>{
      alert("vehicle updaion failed")
    }
   )
  }
  else{
    
      this.vehicleservice.createvehicle(this.formvehicles.value).subscribe(
   (data:any)=>{
     alert("vehicle created successfully")
   },
   (err:any)=>{
     alert("vehicle created failed ")
   }
  )
  }
}
  


}
