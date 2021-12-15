import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  @Input() numberSlected:number[] = [];
  @Input() betValue:number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
