import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Array<any>;

  constructor() {
    this.books = [];

    for (let i = 1; i <= 10; i++) {
      this.books.push({
        id: i,
        title: 'Livre ' + i,
        author: 'Auteur ' + i,
        status: 'Libre',
      });
    }
  }


  /**
   * Method for switch all the books status
   * @param newStatus 
   */


  switchAllBooksStatus(newStatus: string) {
    for (const book of this.books) {
      book.status = newStatus;
    }
  }

/**
 * Method for switch bookstatus
 * @param newStatus 
 */
  switchBookStatus(bookId:number,newStatus:string){
    for (const book of this.books) {
      if (book.id===bookId) {
        book.status = newStatus;
        break
      }
    }
  }
  // switchAllBookToFree() {
  //   for (const book of this.books) {
  //     book.status = 'Libre';
  //   }
  // }

  // switchAllBookToTaken() {
  //   for (const book of this.books) {
  //     book.status = 'Dispo';
  //   }
  // }
}
