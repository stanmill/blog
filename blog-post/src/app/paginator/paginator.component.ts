import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfpages;
  @Output()pageNumberClick = new  EventEmitter<number>();
  pages: number[];
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfpages);
  }
  pageNumberClicked(pageNumber) {
    this.pageNumberClick.emit(pageNumber);
  }

}
