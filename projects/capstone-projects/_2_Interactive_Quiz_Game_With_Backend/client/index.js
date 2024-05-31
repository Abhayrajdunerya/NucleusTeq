import { fetchQuestions, fetchCategories, shuffle, difficulty } from './utils.js'

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options-area');
const nextBtn = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const categoryElement = document.getElementById('category');
const difficultyElement = document.getElementById('difficulty');

const baseURL = `http://localhost:8080/api/questions`

let currQuestIndex = 0;
let score = 0;
let countdownInterval;
let timeRemaining = 15;

const categoryData = {
    allCategories: []
}

const questionsData = {
    allQuestions: []
}

const loadCategories = async () => {

    try {
        const categories = await fetchCategories();
        categoryData.allCategories = await categories;
    } catch (error) {
        console.log(error);
    }

    const defaultOption = document.createElement('option');
    defaultOption.text = 'Any Category';
    defaultOption.value = 0;
    defaultOption.selected = true;
    categoryElement.appendChild(defaultOption);

    categoryData.allCategories.forEach((cat, i) => {
        const option = document.createElement('option');
        option.text = cat.name;
        option.value = cat.categoryId;

        categoryElement.appendChild(option);
    })
}

const loadDifficultyLevels = () => {
    difficulty.forEach((diff, i) => {
        const option = document.createElement('option');
        option.text = diff.name;
        option.value = diff.value;
        if (i === 0) {
            option.selected = true;
        }

        difficultyElement.appendChild(option);
    })
}

const loadCurrentDate = () => {
    const today = new Date();

    const date = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
    const year = today.getFullYear();

    const dateStr =  `${date} ${month} ${year}`

    timerElement.innerHTML = dateStr;
}


const init = async () => {

    await loadCategories();

    loadDifficultyLevels();
    
    loadCurrentDate();
    
}

const showLoading = (isLoading) => {
    if (isLoading === true) {
        timerElement.classList.add('text-red');
        timerElement.innerHTML = 'Loading ...'
    } else {
        timerElement.classList.remove('text-red')
    }
}

const startCountdown = () => {
    timeRemaining = 15;
    clearInterval(countdownInterval); // Reset interval if already running
    countdownInterval = setInterval(() => {
        timeRemaining--;

        if (timeRemaining <= 5) {
            timerElement.classList.add('text-red');
        } else {
            timerElement.classList.remove('text-red');
        }

        if (timeRemaining >= 0) {
            timerElement.innerHTML = `${timeRemaining} sec left | Total questions ${questionsData.allQuestions.length}`;
        } else {
            clearInterval(countdownInterval);
            handleNextButton();
        }
    }, 1000); // Update every second
};

const resetState = () => {
    showLoading(false);
    nextBtn.style.display = 'none';
    timerElement.innerHTML = `15 sec left | Total questions ${questionsData?.allQuestions?.length}`
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectedElement = e.target;

    const isCorrect = selectedElement.dataset.correct === 'true';

    if (isCorrect) {
        selectedElement.classList.add('correct-option')
        score++;
    } else {
        selectedElement.classList.add('incorrect-option')
    }

    Array.from(optionsElement.children).forEach(singleOption => {
        if (singleOption.dataset.correct === 'true') {
            singleOption.classList.add('correct-option')
        }
        singleOption.disabled = true;
    })

    // clearInterval(countdownInterval); // Stop the countdown
    nextBtn.style.display = 'block';

}

const showQuestion = () => {
    resetState();
    console.log(questionsData);
    const currQuestion = questionsData.allQuestions[currQuestIndex];
    const questionNo = currQuestIndex + 1;
    questionElement.innerHTML = 'Q' + questionNo + '. ' + currQuestion.question;

    const options = currQuestion.options;
    const correctAnswer = currQuestion.correctAnswer;

    const answers = shuffle(options);

    answers.forEach(answer => {
        const singleOption = document.createElement('button');
        singleOption.innerHTML = answer;
        singleOption.classList.add('option');
        optionsElement.appendChild(singleOption)

        if (answer === correctAnswer) {
            singleOption.dataset.correct = 'true';
        } else {
            singleOption.dataset.correct = 'false';
        }

        singleOption.addEventListener('click', selectAnswer)
    });

    startCountdown();
}

const startQuiz = async (url) => {
    showLoading(true);

    try {
        const questionResponse = await fetchQuestions(url);
        const allQuestions = await questionResponse;
        questionsData.allQuestions = allQuestions;
        showQuestion();
    } catch (error) {
        console.log(error);
    }

}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questionsData.allQuestions.length}!`

    let message = '';

    const scorePercent = Math.round((score/questionsData.allQuestions.length)*100);

    if (scorePercent >= 90) {
        message = `Outstanding! 🌟 You're a quiz master!`
    } else if (scorePercent >= 80) {
        message = `Excellent! 🚩 Keep up the great work!`
    } else if (scorePercent >= 70) {
        message = `Great job! 👏 You're doing well!`
    } else if (scorePercent >= 60) {
        message = `Good job! 👍 Keep pushing!`
    } else if (scorePercent >= 50) {
        message = `Not bad! 😊 You can do even better!`
    } else {
        message = `You need to improve! 💪 Don't give up!`
    }
    

    console.log({scorePercent});

    optionsElement.innerHTML = message;
    optionsElement.classList.add('text-center');
    optionsElement.classList.add('font-large')
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}

const handleNextButton = () => {
    currQuestIndex++;
    if (currQuestIndex < questionsData.allQuestions.length) {
        showQuestion();
    } else {
        showScore();
        clearInterval(countdownInterval); // Stop the countdown
        timerElement.innerHTML = `Yay! you have completed the quiz 😊`
        questionElement.classList.add('text-center')
    }
}

nextBtn.addEventListener('click', () => {
    if (questionsData.allQuestions.length === 0) {
        const selectedCategory = categoryElement.value;
        const selectedDifficulty = difficultyElement.value;

        console.log({selectedCategory, selectedDifficulty});
        const url = `${baseURL}?categoryId=${selectedCategory}&difficulty=${selectedDifficulty}`
        
        startQuiz(url);

    } else if (currQuestIndex < questionsData.allQuestions.length) {
        handleNextButton();
    } else {
        score = 0;
        currQuestIndex = 0;
        window.location.reload();
    }
})



init();
