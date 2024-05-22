package com.quizify.quizify.controller;

import com.quizify.quizify.dto.CategoryDto;
import com.quizify.quizify.service.ICategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(path = "/api", produces = {MediaType.APPLICATION_JSON_VALUE})
public class CategoryController {

    private final ICategoryService iCategoryService;

    public CategoryController(ICategoryService iCategoryService) {
        this.iCategoryService = iCategoryService;
    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDto>> fetchCategories() {
        List<CategoryDto> categoryDtoList = iCategoryService.fetchCategories();

        return ResponseEntity.status(HttpStatus.OK).body(categoryDtoList);
    }

}
