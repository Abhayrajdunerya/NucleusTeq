
/*
 *  post: {
 *      id: integer
 *      userId: integer
 *      title: string
 *      body: string
 *  }
 * 
 */

const postList = document.getElementById('post-list');

const fetchPosts = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        const posts = await response.json();

        return posts;

    } catch (error) {
        console.log(error);
    }
}

const displayPosts = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    const posts = await fetchPosts(url);

    postList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-card');

        const title = document.createElement('h2');
        const description = document.createElement('p');

        title.textContent = post.title;
        description.textContent = post.body;

        postElement.appendChild(title);
        postElement.appendChild(description);

        postList.appendChild(postElement);

    });
}

displayPosts();