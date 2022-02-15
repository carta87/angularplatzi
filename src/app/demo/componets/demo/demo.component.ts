import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'plazi-store';

  items = ['diego', 'Armando', 'pedro'];

  power = 10;

  ngOnInit(){
    //code
  }

  agregarItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }

}
