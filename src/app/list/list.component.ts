import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: any[] = [];
  @Output() showItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<number>();

  onShow(item: any) {
    this.showItem.emit(item);
  }

  onDelete(itemId: number) {
    this.deleteItem.emit(itemId);
  }
}
