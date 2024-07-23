package com.quizify.quizify.service.impl;

import com.quizify.quizify.dto.CategoryDto;
import com.quizify.quizify.entity.Category;
import com.quizify.quizify.entity.Question;
import com.quizify.quizify.mapper.CategoryMapper;
import com.quizify.quizify.mapper.QuestionMapper;
import com.quizify.quizify.repository.CategoryRepository;
import com.quizify.quizify.service.ICategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements ICategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public List<CategoryDto> fetchCategories() {
        List<Category> categories = categoryRepository.findAll();

        List<CategoryDto> categoryDtoList = new ArrayList<>();

        categories.forEach(category ->
            categoryDtoList.add(CategoryMapper.mapToCategoryDto(category, new CategoryDto()))
        );

        return categoryDtoList;
    }

    @Override
    public String saveCategories(List<CategoryDto> categoryDtoList) {
        List<Category> categories = new ArrayList<>();

        categoryDtoList.forEach(categoryDto -> {
            categories.add(CategoryMapper.mapToCategory(categoryDto, new Category()));
        });

        List<Category> savedCategories = categoryRepository.saveAll(categories);

        return savedCategories.size() + " categories are added";
    }
}
