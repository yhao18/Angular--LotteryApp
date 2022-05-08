import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-bet-value',
  templateUrl: './bet-value.component.html',
  styleUrls: ['./bet-value.component.css']
})
export class BetValueComponent implements OnInit {

  value:number =0;
  @Output() betValue =new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addBetValue(value:number){
    this.value = value;
    this.betValue.emit(this.value);
  }
}
