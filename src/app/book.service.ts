import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/book';

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find-one/${id}`);
  }


  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, book);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-one/${id}`, { responseType: 'text' });
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/find-all`)
  }
  
  searchBooksList(search: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/${search}`);
  }
}