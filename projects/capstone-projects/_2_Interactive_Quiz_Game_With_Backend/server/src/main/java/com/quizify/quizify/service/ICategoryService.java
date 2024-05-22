package com.quizify.quizify.service;

import com.quizify.quizify.dto.CategoryDto;

import java.util.List;

public interface ICategoryService {

    List<CategoryDto> fetchCategories ();

}
