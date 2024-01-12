interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: [
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo:[
            lat: string,
            lng: string
        ]
    ],
    phone: string,
    website: string,
    company:[
        name: string,
        catchPhrase: string,
        bs: string
    ]
}

const userService = {
    getAll: (): Promise<IUser[]> => fetch('https://jsonplaceholder.typicode.com/users/').then(value => value.json())
}
userService.getAll()
    .then((users) => {console.log(users);
        for (const user of users) {
            let ul = document.getElementById('list');
            let li = document.createElement('li');
            let a = document.createElement('a');
            let aId = document.createElement('aId');
            let aName = document.createElement('aName');
            let buttonUsDet = document.createElement('button');
            ul.classList.add('List');
            li.classList.add('Li');
            a.classList.add('a');
            aId.classList.add('aId');
            aName.classList.add('aName');
            buttonUsDet.classList.add('buttonUsDet');
            aId.innerHTML = `${user.id} - `;
            aName.innerHTML = `<b>${user.name}</b>`;
            buttonUsDet.innerText = 'IN DETAIL';
            // a.href = `./userDetails/userDetails.html?id=${user.id}`;
            buttonUsDet.onclick = ()=>{
                location.href = `./userDetails/userDetails.html?id=${user.id}`
            }
            a.append(aId, aName);
            li.append(a, buttonUsDet);
            ul.appendChild(li);
        }
    })