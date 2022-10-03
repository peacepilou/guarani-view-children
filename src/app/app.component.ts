import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Child } from './models/child.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(ChildComponent) childListRef!: QueryList<ChildComponent>;  
  
  // Not the correct way but easier to create in order to reproduce the bug
  childList: Child[] = [
    {
      id: 1,
      description: "Enfant 1"
    },
    {
      id: 2,
      description: "Enfant 2"
    },
    {
      id: 3,
      description: "Enfant 3"
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    // viewChildren is set and we track changes
    // try to delete a child and see the console
    this.childListRef.changes.subscribe(c => console.log(c));
  }
  
  onChildDelete(id: number): void {
    this.childList = this.childList.filter(child => child.id !== id);
  }

}
