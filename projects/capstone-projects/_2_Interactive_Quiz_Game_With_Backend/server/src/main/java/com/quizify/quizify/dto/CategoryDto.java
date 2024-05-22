package com.quizify.quizify.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class CategoryDto {

    @Column(name = "category_id")
    private Long categoryId;

    private String name;

}
