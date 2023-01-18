
//create element 
const createPost = function ({ titleone, postUserone }) {
    const sociaCard = document.createElement('div');
    sociaCard.setAttribute('class', 'social-card');


    const icon = document.createElement('div');
    icon.setAttribute('class', 'post-icon');

    const title = document.createElement('div');
    title.setAttribute('class', 'post-title');

    const postUser = document.createElement('div');
    postUser.setAttribute('class', 'post-User');

    const postContent = document.createElement('div');
    postContent.setAttribute('class', 'post-content');

    sociaCard.append(icon, title, postUser, postContent);

    //Adding Content 
    icon.innerHTML = 'Image here';
    title.innerHTML = titleone;
    postUser.innerHTML = postUserone;
    postContent.innerHTML = 'loreum ipsum';

    document.body.append(sociaCard);
};

createPost({
    titleone: 'veeru banoth',
    postUserone: 'user name comes here'
});

createPost({
    titleone: 'veeru banoth',
    postUserone: 'user name comes here'
});
