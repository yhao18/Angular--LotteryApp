import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
 
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  

  modalDisplay:Boolean = false;
  betValue:number=0;
  clearBetValue:Boolean =false;
  numberSlected:number[]=[];

  openModal(openModal: Boolean){
    this.modalDisplay = openModal
  }

  closeModal(closeModal:Boolean){
    this.modalDisplay = closeModal
  }

  addBetValue(value:number){
    this.betValue= this.betValue + value;
  }

  clear(clearValue:Boolean){
    if(clearValue){
      this.betValue = 0;
    }
    this.clearBetValue= clearValue
  }

  receiveNumberArray(numbers:number[]){
    this.numberSlected = numbers;
  }

}
