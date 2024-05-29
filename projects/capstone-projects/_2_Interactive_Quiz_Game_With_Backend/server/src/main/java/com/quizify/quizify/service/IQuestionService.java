package com.quizify.quizify.service;

import com.quizify.quizify.dto.QuestionDto;

import java.util.List;

public interface IQuestionService {

    List<QuestionDto> fetchQuestions(Integer amount, Long categoryId, String difficulty, String type);
    String saveQuestions(List<QuestionDto> questionDtoList);

}
