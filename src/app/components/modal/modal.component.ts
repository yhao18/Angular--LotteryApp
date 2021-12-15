import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent implements OnInit {
 
  @Input() modalDisplay:Boolean= false;
  @Input() betValue:number=0;
  @Input() numberSlected:number[] =[];
  @Output() modalflag =new EventEmitter<Boolean>();

  received:number[]=[];
  amount:number=0;
  clearArray:number[]=[];
  moduleOpen:Boolean=true;

  constructor() { }

  ngOnInit(): void {
  }



  closeModal(){
    this.moduleOpen = false;
    this.modalflag.emit(this.moduleOpen);
    this.received=[];
  }


  payAmount():number{
    let dotIndex:number = -1;
    let whole:number[] =[];
    let integer:number[] = [];
    let decimal:number[] = [];
    let dotFlag:Boolean =true;

    for(let i =0; i<this.received.length; i++){
      if(this.received[i]===-1){
        dotIndex=i;
        dotFlag=false;
        break;
      }
    }
    whole= this.received.slice();

    if(dotFlag){
      integer = this.received;
    }else{
      integer=whole.splice(0,dotIndex);
      decimal = whole.splice(1,2);
    }
    this.amount=0;
    let j = integer.length-1;
  
    for(let i=0; i<integer.length; i++){
      this.amount= this.amount + integer[i]*Math.pow(10,j)
      j= j-1;
    }
    for(let i=0; i<decimal.length; i++){
      this.amount= this.amount + decimal[i]/Math.pow(10,i+1)
      j= j-1;
    }

    return this.amount = Math.round(this.amount *100)/100

  }

  changeAmount():number{
    return this.amount-this.betValue >=0? Math.round((this.amount-this.betValue) *100)/100 :0
  }

  checkPayment():Boolean{
    return this.amount-this.betValue >=0? false :true;
  }

}
