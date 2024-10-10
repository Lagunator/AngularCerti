import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { data } from './data'; 

export interface Person {
  id: number;
  name: string;
  type: 'Student' | 'Professor';
  score?: {
    firstTestScore: number;
    secondTestScore: number;
    finalTestScore: number;
  };
  subject?: string;
  address: string;
  country: string;
  province: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchComponent, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Person[] = data;  
  filteredItems: Person[] = data;  
  selectedItem: Person | null = null;  
  searchQuery: string = '';  
  searchItems(query: string) {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  showItem(item: Person) {
    this.selectedItem = item;
  }
  deleteItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.filteredItems = this.items; 
    if (this.selectedItem && this.selectedItem.id === itemId) {
      this.selectedItem = null; 
    }
  }
}
