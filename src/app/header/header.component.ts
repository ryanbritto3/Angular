import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  isRecipe = true;
  constructor() { }

  ngOnInit() {
  }

  onSelect(itemSelected: string) {
    this.featureSelected.emit(itemSelected);
    if (itemSelected === 'Recipe') {
      this.isRecipe = true;
    } else {
      this.isRecipe = false;
    }
  }

}
