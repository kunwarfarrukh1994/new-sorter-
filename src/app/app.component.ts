import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  parent:any[]=[1,2];
  // list = Array(25)
  //   .fill('')
  //   .map((_, i) => i + 1);
  list:any[]=[1,2,3,4,5];

  drop(event: CdkDragDrop<number>): void {
    moveItemInArray(
      this.list,
      event.previousContainer.data,
      event.container.data
    );
  }
}
