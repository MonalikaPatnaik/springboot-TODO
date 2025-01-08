import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

constructor(private http: HttpClient) {}

private baseUrl= "http://localhost:8080/api/todos";

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>('http://localhost:8080/api/todos');
    }

  addTodos(todo: Todo):Observable<Todo>{
      return this.http.post<Todo>('http://localhost:8080/api/todos',todo);
      }

    updateTodo(id:number, todo:Todo){
      return this.http.patch<Todo>(`http://localhost:8080/api/todos/${id}`,todo);
      }

    deleteTodo(id:number): Observable<void>{
       return this.http.delete<void>(`http://localhost:8080/api/todos/${id}`);
      }
}
