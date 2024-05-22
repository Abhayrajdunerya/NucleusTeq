package com.quizify.quizify.dto;

import lombok.Data;

import java.util.List;

@Data
public class QuestionDto {

    private Long categoryId;

    private String type;

    private String difficulty;

    private String question;

    private String correctAnswer;

    private List<String> options;

}
