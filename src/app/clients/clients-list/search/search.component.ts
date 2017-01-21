import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(search: string) {
    this.searchChange.next(search);
  }

}
