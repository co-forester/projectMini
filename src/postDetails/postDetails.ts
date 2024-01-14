interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const userService = {
    getByIdPosts: (idUser: number): Promise<IPost[]> => fetch('https://jsonplaceholder.typicode.com/users/'+ idUser +'/posts').then(res => res.json())
};

const postService = {
    getByIdPostComments: (id: number):  Promise<IComment[]> => fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(res => res.json())
};

let a = document.createElement('a');
a.classList.add('AA');
a.innerText = `card index  (return)`;
a.href = "../index.html";
let url: URL = new URL(location.href);
const titleUs: string = url.searchParams.get('title');
const id: number = +url.searchParams.get('id');
const idUser: number = +url.searchParams.get('idUser');
console.log(titleUs);
console.log(idUser);
console.log(id);
const card = document.getElementById('card');
const divComm = document.createElement('div');
divComm.classList.add('divComm');
userService.getByIdPosts(idUser)
    .then((posts):void => {
        console.log(posts);
         let postUs: IPost = posts.find(function (post: IPost) {
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
        postService.getByIdPostComments(id)
            .then((results): void => {
                console.log(results);
                results.forEach((comment: IComment): void =>{
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
                    document.body.append(a, divComm)
                })

            })

    })

