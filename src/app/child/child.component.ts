import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Child } from '../models/child.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  childData!: Child;
  
  @Output()
  isChildDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // other stuff relative to this component
  // properties & methods to get/trigger justifying  @ViewChildren in parent component I guess

  deleteChild(): void {
   this.isChildDeleted.emit(this.childData.id);
  }
}
