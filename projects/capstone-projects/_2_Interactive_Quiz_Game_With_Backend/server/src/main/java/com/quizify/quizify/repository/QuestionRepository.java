package com.quizify.quizify.repository;

import com.quizify.quizify.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByCategoryIdAndDifficultyAndType(Long categoryId, String difficulty, String type);

    List<Question> findByCategoryIdAndDifficulty(Long categoryId, String difficulty);

    List<Question> findByCategoryIdAndType(Long categoryId, String type);

    List<Question> findByDifficultyAndType(String difficulty, String type);

    List<Question> findByCategoryId(Long categoryId);

    List<Question> findByDifficulty(String difficulty);

    List<Question> findByType(String type);
}
