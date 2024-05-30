package com.quizify.quizify.controller;

import com.quizify.quizify.constants.QuizConstants;
import com.quizify.quizify.dto.QuestionDto;
import com.quizify.quizify.dto.ResponseDto;
import com.quizify.quizify.service.IQuestionService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api", produces = {MediaType.APPLICATION_JSON_VALUE})
@Validated
public class QuestionController {

    private final IQuestionService iQuestionService;

    public QuestionController(IQuestionService iQuestionService) {
        this.iQuestionService = iQuestionService;
    }

    @GetMapping("/questions")
    public ResponseEntity<List<QuestionDto>> fetchQuestions(@RequestParam(required = false) Long categoryId,
                                                            @RequestParam(required = false) Integer amount,
                                                            @RequestParam(required = false) String difficulty,
                                                            @RequestParam(required = false) String type) {

        List<QuestionDto> questionDtoList = iQuestionService.fetchQuestions(amount, categoryId, difficulty, type);
        return ResponseEntity.status(HttpStatus.OK).body(questionDtoList);
    }

    @PostMapping("/questions")
    public ResponseEntity<ResponseDto> saveQuestions(@Valid @RequestBody List<QuestionDto> questionDtoList) {

        String message = iQuestionService.saveQuestions(questionDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(QuizConstants.STATUS_201, QuizConstants.MESSAGE_201));

    }

}

