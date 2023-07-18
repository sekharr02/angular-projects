import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {
  // @Input() public hello='';

  public vehicles:any = [];
  public search :string = '';

  public column:any=[];
  public order:any=[];

  public stops:any=[];
  public page:any=[];

  // public id:any=[];
 
  constructor(private vehicleservice:VehicleService){

    this.vehicleservice.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal service error")
      }
    )
  }
   
  getFiltervehicles(){
    this.vehicleservice.getFiltervehicles(this.search).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal service error")
      }
    )

  }
  getSoredvehicles(){
    this.vehicleservice.getSoredvehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal service error")
      }
    )
  }
  getpagination(){
    this.vehicleservice.getpagination(this.stops,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal service error")
      }
    )
    
  }

  delete(id:any){
    this.vehicleservice.delete(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully")
        location.reload();
      },
      (err:any)=>{
        alert("internal sevrve error")
      }
    )

  }

}
