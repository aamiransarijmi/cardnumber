import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Creditcard';
  myGroup:FormGroup;

  constructor(){
    this.myGroup = new FormGroup({
      textbox1: new FormControl(),
      textbox2: new FormControl(),
      textbox3: new FormControl(),
      textbox4: new FormControl()
   });
  }

  input(event,any){
    console.log(event,any);
    
    let preInput = event.srcElement.previousElementSibling;
    let nextInput = event.srcElement.nextElementSibling;
    if(event.target.value.length >= 4 && any <4 )
      {
        nextInput.focus();
      }
    else if(event.target.value.length == 0){
      preInput.focus();
    }
    else{
      return;
    }
  } 
}
