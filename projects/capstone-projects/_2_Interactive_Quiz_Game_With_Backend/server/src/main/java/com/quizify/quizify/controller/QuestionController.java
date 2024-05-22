package com.quizify.quizify.controller;

import com.quizify.quizify.dto.QuestionDto;
import com.quizify.quizify.service.IQuestionService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api", produces = {MediaType.APPLICATION_JSON_VALUE})
public class QuestionController {

    private final IQuestionService iQuestionService;

    public QuestionController(IQuestionService iQuestionService) {
        this.iQuestionService = iQuestionService;
    }

    @GetMapping("/questions")
    public ResponseEntity<List<QuestionDto>> fetchQuestions(@RequestParam(required = false) Integer amount,
                                                            @RequestParam(required = false) Long categoryId,
                                                            @RequestParam(required = false) String difficulty,
                                                            @RequestParam(required = false) String type) {

        List<QuestionDto> questionDtoList = iQuestionService.fetchQuestions(amount, categoryId, difficulty, type);
        return ResponseEntity.status(HttpStatus.OK).body(questionDtoList);
    }

}

