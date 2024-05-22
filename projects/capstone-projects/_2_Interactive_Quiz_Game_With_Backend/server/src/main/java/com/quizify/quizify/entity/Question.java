package com.quizify.quizify.entity;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.*;

import java.io.IOException;
import java.util.List;

@Entity
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long questionId;

    @Column(name = "category_id")
    private Long categoryId;

    private String type;

    private String difficulty;

    private String question;

    @Column(name = "correct_answer")
    private String correctAnswer;

    @Column(columnDefinition = "json")
    private String options; // Store as JSON string in the database

    // Getter and setter for options as List<String>
    @Transient // Exclude from persistence
    public List<String> getOptionsList() {
        if (options == null) {
            return null;
        }
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(options, new TypeReference<List<String>>() {});
        } catch (IOException e) {
            e.printStackTrace(); // Handle or log the exception
            return null;
        }
    }

    public void setOptionsList(List<String> optionsList) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            this.options = objectMapper.writeValueAsString(optionsList);
        } catch (IOException e) {
            e.printStackTrace(); // Handle or log the exception
        }
    }

}
