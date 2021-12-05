import { Component } from '@angular/core';
import { BookService } from './services/book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  books: Array<any>;

  constructor(private bookService:BookService){
    this.books = this.bookService.books;
  }

  /**
   * Method walled when the user click on one of the two buttons 
   * for switch the books status
   * @param newStatus 
   */
  onClickSwitchAllBooksStatus(newStatus:string){
    this.bookService.switchAllBooksStatus(newStatus)
  }

  // /**
  //  * Method for switch all the books status to free
  //  */

  // allFree(){
  //   this.bookService.switchAllBookToFree();
  // }

  //   /**
  //  * Method for switch all the books status to taken
  //  */
  // allTaken(){
  //   this.bookService.switchAllBookToTaken();
  // }
}
