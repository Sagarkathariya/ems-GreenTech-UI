import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    // Add your implementation here
    return this.http.post<void>('https://localhost:44383/api/categories', model);
  }

  getCategoryList(): Observable<void> {
    // Add your implementation here
    // return this.http.get<void>('https://jsonplaceholder.typicode.com/todos');
  return this.http.get<void>('https://localhost:44383/api/categories');
  }

}
