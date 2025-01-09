package com.example.sample.controller;
import com.example.sample.model.Todo;
import com.example.sample.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "https://todo-ten-vert.vercel.app")
@RestController
@RequestMapping("api/")
public class HomeController {
     @Autowired
     private TodoRepository todoRepository;

    @GetMapping("todos")
    public List<Todo> getTodos(){
        return this.todoRepository.findAll();
    }

    @PostMapping("todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return this.todoRepository.save(todo);
    }

    @PatchMapping("todos/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todo){
        Optional<Todo> optionalTodo = todoRepository.findById(id);
        if(optionalTodo.isPresent()){
            Todo existingTodo = optionalTodo.get();
            existingTodo.setTitle(todo.getTitle());      // Update title
            existingTodo.setDesc(todo.getDesc());
            return this.todoRepository.save(existingTodo);
        }else {
            throw new RuntimeException("Todo not found with id " + id);
        }

    }

    @DeleteMapping("todos/{id}")
    public void deleteTodo(@PathVariable Long id) {
        this.todoRepository.deleteById(id); // Deletes todo from database
    }
































            
    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
