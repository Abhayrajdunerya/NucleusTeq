package com.quizify.quizify.mapper;

import com.quizify.quizify.dto.QuestionDto;
import com.quizify.quizify.entity.Question;

public class QuestionMapper {

    private QuestionMapper() {

    }

    public static QuestionDto mapToQuestionDto(Question question, QuestionDto questionDto) {
        questionDto.setQuestion(question.getQuestion());
        questionDto.setCorrectAnswer(question.getCorrectAnswer());
        questionDto.setType(question.getType());
        questionDto.setDifficulty(question.getDifficulty());
        questionDto.setOptions(question.getOptionsList());
        questionDto.setCategoryId(question.getCategoryId());

        return questionDto;
    }

    public static Question mapToQuestion(QuestionDto questionDto, Question question) {
        question.setQuestion(questionDto.getQuestion());
        question.setCorrectAnswer(questionDto.getCorrectAnswer());
        question.setType(questionDto.getType());
        question.setDifficulty(questionDto.getDifficulty());
        question.setOptionsList(questionDto.getOptions());
        question.setCategoryId(questionDto.getCategoryId());

        return question;
    }

}
