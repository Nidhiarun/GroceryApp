import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  task : string;
  tasks = [];

  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
  }

  // constructor() { }

  // ngOnInit() {
  // }

}
