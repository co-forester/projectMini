let url = new URL(location.href);
const titleUs = url.searchParams.get('title');
const id = url.searchParams.get('id');
const idUser =url.searchParams.get('idUser');
console.log(titleUs);
console.log(idUser);
console.log(id);
let url3 = 'https://jsonplaceholder.typicode.com/users/'+idUser+'/posts';
const card = document.getElementById('card');
const divComm = document.createElement('div');
divComm.classList.add('divComm');
fetch(url3)
    .then(res => res.json())
    .then((posts) => {
        console.log(posts);
        let postUs = posts.find(function (post) {
            if (post.title === titleUs) return post
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

        let url4 = 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
        fetch(url4)
            .then(res => res.json())
            .then((results) => {
                console.log(results);
                results.forEach((comments)=>{
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
                    p41.innerText = `id: ` + comments.id;
                    p42.innerText = `postId: ` + comments.postId;
                    p43.innerText = `name: ` + comments.name;
                    p44.innerText = `email: ` + comments.email;
                    h45.innerText = `body: ` + comments.body;

                    cardComm.append(p41, p42, p43, p44, h45);
                    divComm.append(cardComm);
                    document.body.append(divComm)
                })

            })

    })

