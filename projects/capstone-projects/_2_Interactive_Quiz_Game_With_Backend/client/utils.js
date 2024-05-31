export const fetchQuestions = async (url) => {
    try {
        const data = await fetch(url, {
            method: 'GET',
        });

        const response = await data.json();

        return response;
    } catch (error) {
        window.alert("Failed to load questions!")
        console.log(error);
        window.location.reload();
    }
}

export const fetchCategories = async () => {
    try {
        const data = await fetch(`http://localhost:8080/api/categories`, {
            method: 'GET',
        });

        const response = await data.json();

        return response;
    } catch (error) {
        window.alert("Failed to load categories!")
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