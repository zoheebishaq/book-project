import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent implements OnInit,OnChanges {
  @Input()
  id!: number;
  @Input()
  title!: string;
  @Input()
  author!: string;
  @Input()
  status!: string;

  nextStatus!: string;

  constructor(private bookservice: BookService) {}

  ngOnChanges(): void{
    this.nextStatus = this.status=== 'Libre' ? 'Pris' : 'Libre';
  }

  ngOnInit() {
    
  }
  

  /**
   * Method called when the userclick on the switch book status
   * @param newStatus
   */
  onClickSwitchBookStatus(newStatus: string) {
    this.bookservice.switchBookStatus(+this.id, newStatus);
  }
}
