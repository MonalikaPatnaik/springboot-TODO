package com.example.sample.model;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String desc;


    public Todo(){

    }
    public Todo(String title, String desc){
        super();
        this.title = title;
        this.desc = desc;
    }

    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id=id;
    }
    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
