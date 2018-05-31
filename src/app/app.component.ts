import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	items = ["Angular 4", "React", "Underscore"];
	newItem = "";
	pushItem = function () {
	 	if(this.newItem != "") {
	 		this.items.push(this.newItem);
	 		this.newItem = "";
	 	}
	 }
	 removeItem = function (index) {
	 	// this will allow us to remove the selected list item from the list
	 	this.items.splice(index, 1);
	 	// 1 indicates that i am remocing one item starting from this index.
	 }
}
