import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent {
  test(){
    alert("one time clicked")
  }
  test2(){
    alert("doubleclicked")
  }
  test3(){
    alert("key down")
  }
  test4(){
    alert("keyup")
  }
  test5(){
    alert("key press")
  }
  test6(){
    alert("mouse enter")
  }
  test7(){
    alert("mouse leave")
  }

}
