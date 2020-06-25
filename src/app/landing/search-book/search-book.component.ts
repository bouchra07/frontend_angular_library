import { Observable } from "rxjs";
import { BookService } from "../../book.service";
import { Book } from "../../book";
import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  books: Observable<Book[]>;
  closeResult: string;
  search: string;

  constructor(private route: ActivatedRoute,private bookService: BookService,
    private router: Router) { }


  ngOnInit(): void {
    this.search = this.route.snapshot.params['search'];
    console.log(this.search);
    this.books = this.bookService.searchBooksList(this.search);
    console.log(this.books)
  }

  list(){
    this.router.navigate(['landing']);
  }

}
