import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [	
    AppComponent,
      TableRowComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
