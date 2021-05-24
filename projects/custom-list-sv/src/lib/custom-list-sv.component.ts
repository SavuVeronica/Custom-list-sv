import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lib-custom-list-sv',
  templateUrl: './custom-list-sv.component.html',
  styleUrls: ['./custom-list-sv.component.css']
})
export class CustomListSvComponent implements OnInit {

  newToDo: string;

  itemsList: Array<{index: number, description:string,isChecked:boolean}>;

  @Input() title: string;
  @Input() items: Array<string>;

  @Output() newItem = new EventEmitter<{index:number,description:string}>();
  @Output() itemChecked = new EventEmitter<{index:number,description:string,isChecked:boolean}>();
  @Output() itemUnchecked = new EventEmitter<{index:number, description:string,isChecked:boolean}>();
  @Output() itemDeleted = new EventEmitter<{index:number,description:string}>();

  constructor() {
  }

  ngOnInit(): void {
    this.itemsList = new Array<{index:number,description:any,isChecked:boolean}>();
    this.items.forEach((value, index) => {
      this.itemsList.push({index: index, description: value, isChecked: false});
    });
  }

  addItem(): void
  {
    const newIndex = this.itemsList.length;
    this.items.push(this.newToDo);
    this.itemsList.push({index: newIndex,description: this.newToDo, isChecked: false});
    this.newItem.emit({index: newIndex, description: this.newToDo});
    this.newToDo = null;
  }

  removeItem(index: number){
    let item = this.itemsList[index];
    this.items.splice(index, 1);
    this.itemsList.splice(index, 1);
    this.itemDeleted.emit({index: index, description: item.description});
  }

  checkItem(item: {index:number,description:string,isChecked:boolean}) {
    if (item.isChecked === true)
      this.itemChecked.emit(item);
    else
      this.itemUnchecked.emit(item);
  }
}
