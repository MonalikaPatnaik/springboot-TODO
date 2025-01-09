import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

constructor(private http: HttpClient) {}

private baseUrl= "https://todo-r1rc.onrender.com/api/todos";

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl);
    }

  addTodos(todo: Todo):Observable<Todo>{
      return this.http.post<Todo>(this.baseUrl,todo);
      }

    updateTodo(id:number, todo:Todo){
      return this.http.patch<Todo>(`${this.baseUrl}/${id}`,todo);
      }

    deleteTodo(id:number): Observable<void>{
       return this.http.delete<void>(`${this.baseUrl}/${id}`);
      }
}
