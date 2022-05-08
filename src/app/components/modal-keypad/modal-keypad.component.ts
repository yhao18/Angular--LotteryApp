import { Component, OnInit, Output, EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-modal-keypad',
  templateUrl: './modal-keypad.component.html',
  styleUrls: ['./modal-keypad.component.css']
})
export class ModalKeypadComponent implements OnInit {


  @Input() received:number[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  typeIn(value:number){ 
    this.received.push(value)
  }

  deleteOne(){
    this.received.pop()
  }

}