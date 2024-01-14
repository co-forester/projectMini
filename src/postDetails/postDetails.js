var userService = {
    getByIdPosts: function (idUser) { return fetch('https://jsonplaceholder.typicode.com/users/' + idUser + '/posts').then(function (res) { return res.json(); }); }
};
var postService = {
    getByIdPostComments: function (id) { return fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(function (res) { return res.json(); }); }
};
var a = document.createElement('a');
a.classList.add('AA');
a.innerText = "card index  (return)";
a.href = "../index.html";
var url = new URL(location.href);
var titleUs = url.searchParams.get('title');
var id = +url.searchParams.get('id');
var idUser = +url.searchParams.get('idUser');
console.log(titleUs);
console.log(idUser);
console.log(id);
var card = document.getElementById('card');
var divComm = document.createElement('div');
divComm.classList.add('divComm');
debugger;
userService.getByIdPosts(idUser)
    .then(function (posts) {
    console.log(posts);
    var postUs = posts.find(function (post) {
        if (post.title === titleUs)
            return post;
    });
    console.log(postUs);
    for (var key in postUs) {
        var lii = document.createElement('li');
        lii.classList.add('lii');
        lii.innerText = "".concat(key, " - ").concat(postUs[key]);
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
        .then(function (results) {
        console.log(results);
        results.forEach(function (comment) {
            var cardComm = document.createElement('div');
            cardComm.classList.add('cardComm');
            var p41 = document.createElement('p');
            var p42 = document.createElement('p');
            var p43 = document.createElement('p');
            var p44 = document.createElement('p');
            var h45 = document.createElement('h4');
            p41.classList.add('p');
            p42.classList.add('p');
            p43.classList.add('p');
            p44.classList.add('p');
            h45.classList.add('h4');
            p41.innerText = "id: " + comment.id;
            p42.innerText = "postId: " + comment.postId;
            p43.innerText = "name: " + comment.name;
            p44.innerText = "email: " + comment.email;
            h45.innerText = "body: " + comment.body;
            cardComm.append(p41, p42, p43, p44, h45);
            divComm.append(cardComm);
            document.body.append(a, divComm);
        });
    });
});
