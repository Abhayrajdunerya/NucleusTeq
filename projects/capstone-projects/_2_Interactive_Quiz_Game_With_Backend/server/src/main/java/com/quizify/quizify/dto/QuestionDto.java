package com.quizify.quizify.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class QuestionDto {

    private Long categoryId;

    @NotEmpty(message = "type can not be a null or empty")
    private String type;

    @NotEmpty(message = "difficulty can not be a null or empty")
    private String difficulty;

    @NotEmpty(message = "question can not be a null or empty")
    private String question;

    @NotEmpty(message = "correctAnswer can not be a null or empty")
    private String correctAnswer;

    @NotEmpty(message = "options can not be a null or empty")
    private List<String> options;

}
