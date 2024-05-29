package com.quizify.quizify.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CategoryDto {

    @Column(name = "category_id")
    private Long categoryId;

    @NotEmpty(message = "Category name can not be a null or empty")
    private String name;

}
