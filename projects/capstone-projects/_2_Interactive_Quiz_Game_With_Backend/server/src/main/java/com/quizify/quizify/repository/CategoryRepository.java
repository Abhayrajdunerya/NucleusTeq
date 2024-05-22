package com.quizify.quizify.repository;

import com.quizify.quizify.entity.Category;
import com.quizify.quizify.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {


}
