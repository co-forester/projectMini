"use strict";
const userService = {
    getByIdPosts: (idUser) => fetch('https://jsonplaceholder.typicode.com/users/' + idUser + '/posts').then(res => res.json())
};
const postService = {
    getByIdPostComments: (id) => fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(res => res.json())
};
let url = new URL(location.href);
const titleUs = url.searchParams.get('title');
const id = +url.searchParams.get('id');
const idUser = +url.searchParams.get('idUser');
console.log(titleUs);
console.log(idUser);
console.log(id);
const card = document.getElementById('card');
const divComm = document.createElement('div');
divComm.classList.add('divComm');
userService.getByIdPosts(idUser)
    .then((posts) => {
    console.log(posts);
    let postUs = posts.find(function (post) {
        if (post.title === titleUs)
            return post;
    });
    console.log(postUs);
    for (const key in postUs) {
        const lii = document.createElement('li');
        lii.classList.add('lii');
        lii.innerText = `${key} - ${postUs[key]}`;
        card.append(lii);
    }
    // const but1 = document.createElement("button");
    // but1.innerText = 'CARD INDEX USERS';
    // but1.onclick = ()=>{
    //     location.href = `./index.html`
    // }
    // const but2 = document.createElement("button");
    // but2.innerText = 'IN DETAIL';
    // but2.onclick = ()=>{
    //     location.href = `./userDetails.html?id=${user.id}`
    // };
    // card.append(but1);
    // card.append(but2);
    postService.getByIdPostComments(id)
        .then((results) => {
        console.log(results);
        results.forEach((comment) => {
            let cardComm = document.createElement('div');
            cardComm.classList.add('cardComm');
            let p41 = document.createElement('p');
            let p42 = document.createElement('p');
            let p43 = document.createElement('p');
            let p44 = document.createElement('p');
            let h45 = document.createElement('h4');
            p41.classList.add('p');
            p42.classList.add('p');
            p43.classList.add('p');
            p44.classList.add('p');
            h45.classList.add('h4');
            p41.innerText = `id: ` + comment.id;
            p42.innerText = `postId: ` + comment.postId;
            p43.innerText = `name: ` + comment.name;
            p44.innerText = `email: ` + comment.email;
            h45.innerText = `body: ` + comment.body;
            cardComm.append(p41, p42, p43, p44, h45);
            divComm.append(cardComm);
            document.body.append(divComm);
        });
    });
});
