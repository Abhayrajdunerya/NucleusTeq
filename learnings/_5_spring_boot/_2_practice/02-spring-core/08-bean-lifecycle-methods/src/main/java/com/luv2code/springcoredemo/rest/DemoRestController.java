package com.luv2code.springcoredemo.rest;

import com.luv2code.springcoredemo.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoRestController {

//    define a private field for dependency injection
    private Coach myCoach;

//    define a constructor for dependency injection
    @Autowired
    public DemoRestController(@Qualifier("cricketCoach") Coach coach) {
        System.out.println("In constructor: " + getClass().getSimpleName());
        this.myCoach = coach;
    }

    @GetMapping("/dailyworkout")
    public String getDailyWorkout() {
        return myCoach.getDailyWorkout();
    }

}
