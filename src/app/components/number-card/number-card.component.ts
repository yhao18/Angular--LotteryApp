import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.css']
})
export class NumberCardComponent implements OnInit {

  @Input() value:number=0;
  @Input() buttonDisabled:Boolean[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
