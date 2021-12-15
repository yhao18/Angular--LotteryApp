import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  functionButtonDisable: Boolean = true;
  numberSelected:number[] =[];
  clearAll:Boolean=false;
  values:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  buttonDisabled:Boolean[]=new Array(20).fill(false);

  @Output() cashFlag = new EventEmitter<Boolean>();
  @Output() clearFlag = new EventEmitter<Boolean>();
  @Output() numberArray = new EventEmitter<number[]>();
  @Input() betValue:number = 0;


  constructor() { }

  ngOnInit(): void {  }

 
  openModal(){
    this.cashFlag.emit(true) ;
  }
  
  numberSelect(value:number){
    if(this.numberSelected.length <5){
      this.numberSelected.push(value);
      this.buttonDisabled[value-1] = true;

      this.numberArray.emit(this.numberSelected) ;
    }else{
      alert("You already chose 5 numbers")
    }

  }

  check(){
    if(this.numberSelected.length ===5 && this.betValue>0){
      this.functionButtonDisable = false;
    }

    return this.functionButtonDisable
  }

  clear(){
    this.numberSelected=[];
    this.numberArray.emit(this.numberSelected);
    this.clearAll=true;
    this.clearFlag.emit(this.clearAll) ;
    for(let i=0; i<this.buttonDisabled.length; i++){
      this.buttonDisabled[i] = false;
    }
    this.functionButtonDisable = true;
  }

}
