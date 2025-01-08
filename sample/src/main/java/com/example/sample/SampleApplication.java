package com.example.sample;

import com.example.sample.model.Todo;
import com.example.sample.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleApplication.class, args);

	}
	@Autowired
	private TodoRepository todoRepository;

//	@Override
//	public void run(String... args) throws Exception{
//		this.todoRepository.save(new Todo("hello","todo"));
//	}

}
