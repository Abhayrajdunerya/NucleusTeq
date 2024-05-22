package com.quizify.quizify.mapper;

import com.quizify.quizify.dto.CategoryDto;
import com.quizify.quizify.entity.Category;

public class CategoryMapper {

    private CategoryMapper() {

    }

    public static CategoryDto mapToCategoryDto(Category category, CategoryDto categoryDto) {
        categoryDto.setCategoryId(category.getCategoryId());
        categoryDto.setName(category.getName());
        return categoryDto;
    }

    public static Category mapToCategory(CategoryDto categoryDto, Category category) {
        category.setCategoryId(categoryDto.getCategoryId());
        category.setName(categoryDto.getName());
        return category;
    }

}
