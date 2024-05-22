package com.quizify.quizify.service.impl;

import com.quizify.quizify.dto.QuestionDto;
import com.quizify.quizify.entity.Question;
import com.quizify.quizify.mapper.QuestionMapper;
import com.quizify.quizify.repository.QuestionRepository;
import com.quizify.quizify.service.IQuestionService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class QuestionServiceImpl implements IQuestionService {

    private QuestionRepository questionRepository;

    @Override
    public List<QuestionDto> fetchQuestions(Integer amount, Long categoryId, String difficulty, String type) {

        List<Question> questions;

        if (amount == null || amount == 0) {
            amount = 10;
        }

        if (categoryId == 0) {
            categoryId = null;
        }

        if (difficulty == "" || difficulty == " ") {
            difficulty = null;
        }

        // Fetch questions based on parameters
        if (categoryId != null && difficulty != null && type != null) {
            questions = questionRepository.findByCategoryIdAndDifficultyAndType(categoryId, difficulty, type);
        } else if (categoryId != null && difficulty != null) {
            questions = questionRepository.findByCategoryIdAndDifficulty(categoryId, difficulty);
        } else if (categoryId != null && type != null) {
            questions = questionRepository.findByCategoryIdAndType(categoryId, type);
        } else if (categoryId != null) {
            questions = questionRepository.findByCategoryId(categoryId);
        } else if (difficulty != null && type != null) {
            questions = questionRepository.findByDifficultyAndType(difficulty, type);
        } else if (difficulty != null) {
            questions = questionRepository.findByDifficulty(difficulty);
        } else if (type != null) {
            questions = questionRepository.findByType(type);
        } else {
            // No specific filters provided, fetch all questions
            questions = questionRepository.findAll();
        }

        // Shuffle the questions list to get random questions
        List<Question> randomQuestions = getRandomQuestions(questions, amount);

        // Map Question entities to QuestionDto objects
        List<QuestionDto> questionDtoList = new ArrayList<>();
        for (Question question : randomQuestions) {
            questionDtoList.add(QuestionMapper.mapToQuestionDto(question, new QuestionDto()));
        }

        return questionDtoList;

    }

    private List<Question> getRandomQuestions(List<Question> questions, Integer amount) {
        List<Question> randomQuestions = new ArrayList<>();
        Set<Long> selectedQuestionIds = new HashSet<>();
        Random random = new Random();

        int totalQuestions = questions.size();
        if (totalQuestions == 0) {
            return randomQuestions;
        }

        while (randomQuestions.size() < amount && randomQuestions.size() < totalQuestions) {
            int randomIndex = random.nextInt(totalQuestions);
            Question randomQuestion = questions.get(randomIndex);

            if (selectedQuestionIds.add(randomQuestion.getQuestionId())) {
                randomQuestions.add(randomQuestion);
            }
        }

        return randomQuestions;
    }
}
