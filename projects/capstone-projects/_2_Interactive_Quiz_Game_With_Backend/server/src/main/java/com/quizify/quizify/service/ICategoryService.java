package com.quizify.quizify.service;

import com.quizify.quizify.dto.CategoryDto;
import com.quizify.quizify.dto.QuestionDto;

import java.util.List;

public interface ICategoryService {

    List<CategoryDto> fetchCategories ();
    String saveCategories(List<CategoryDto> categoryDtoList);

}
