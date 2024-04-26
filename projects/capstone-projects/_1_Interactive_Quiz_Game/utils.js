// https://opentdb.com/api.php?amount=10
// https://opentdb.com/api.php?amount=10&category=9
// https://opentdb.com/api.php?amount=10&difficulty=easy
// https://opentdb.com/api.php?amount=10&type=multiple
// https://opentdb.com/api.php?amount=10&type=boolean

export const fetchQuestions = async (url) => {
    try {
        const data = await fetch(url, {
            method: 'GET',
        });

        const response = await data.json();

        return response;
    } catch (error) {
        console.log(error);
    }
}

export const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 

export const difficulty = [
    {
        name: 'Any Difficulty',
        value: ''
    },
    {
        name: 'Easy',
        value: 'easy'
    },
    {
        name: 'Medium',
        value: 'medium'
    },
    {
        name: 'Hard',
        value: 'hard'
    },
]

export const category = [
    {
        name: 'Any Category',
        value: ''
    },
    {
        name: 'General Knowledge',
        value: '9'
    },
    {
        name: 'Entertainment: Books',
        value: '10'
    },
    {
        name: 'Entertainment: Film',
        value: '11'
    },
    {
        name: 'Entertainment: Music',
        value: '12'
    },
    {
        name: 'Entertainment: Musicals & Theatres',
        value: '13'
    },
    {
        name: 'Entertainment: Television',
        value: '14'
    },
    {
        name: 'Entertainment: Video Games',
        value: '15'
    },
    {
        name: 'Entertainment: Board Games',
        value: '16'
    },
    {
        name: 'Science & Nature',
        value: '17'
    },
    {
        name: 'Science: Computers',
        value: '18'
    },
    {
        name: 'Science: Mathematics',
        value: '19'
    },
    {
        name: 'Mythology',
        value: '20'
    },
    {
        name: 'Sports',
        value: '21'
    },
    {
        name: 'Geography',
        value: '22'
    },
    {
        name: 'History',
        value: '23'
    },
    {
        name: 'Politics',
        value: '24'
    },
    {
        name: 'Art',
        value: '25'
    },
    {
        name: 'Celebrities',
        value: '26'
    },
    {
        name: 'Animals',
        value: '27'
    },
    {
        name: 'Vehicles',
        value: '28'
    },
    {
        name: 'Entertainment: Comics',
        value: '29'
    },
    {
        name: 'Science: Gadgets',
        value: '30'
    },
    {
        name: 'Entertainment: Japanese Anime & Manga',
        value: '31'
    },
    {
        name: 'Entertainment: Cartoon & Animations',
        value: '32'
    },
    
]