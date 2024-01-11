let a = document.createElement('a');
a.classList.add('AA');
a.innerText = `card index  (return)`;
a.href = "../index.html";
let url: URL = new URL(location.href);
let idValue: string = url.searchParams.get('id');
const url1: string = 'https://jsonplaceholder.typicode.com/users/' + idValue;
fetch(url1)
    .then(response => response.json())
    .then(user => {
        console.log(user);
        let divUserDetail = document.createElement('div');
        let divUserPerson = document.createElement('div');
        let divUser = document.createElement('div');
        let divId = document.createElement('div');
        let divName = document.createElement('div');
        let divNameProp = document.createElement('div');
        let divNameValue = document.createElement('div');
        let divUserName = document.createElement('div');
        let divEmail = document.createElement('div');
        let divPhone = document.createElement('div');
        let divWebsite = document.createElement('div');
        let divAddress = document.createElement('div');
        let divAddressUser = document.createElement('div');
        let divAddressGeoPlace = document.createElement('div');
        let divPlace = document.createElement('div');
        let divGeo = document.createElement('div');
        let divLat = document.createElement('div');
        let divLng = document.createElement('div');
        let divZipcode = document.createElement('div');
        let divZipcodeProp = document.createElement('div');
        let divZipcodeValue = document.createElement('div');
        let divCity = document.createElement('div');
        let divCityProp = document.createElement('div');
        let divCityValue = document.createElement('div');
        let divStreet = document.createElement('div');
        let divStreetProp = document.createElement('div');
        let divStreetValue = document.createElement('div');
        let divSuite = document.createElement('div');
        let divSuiteProp = document.createElement('div');
        let divSuiteValue = document.createElement('div');
        let divCompany = document.createElement('div');
        let divNameCompany = document.createElement('div');
        let divNameCompanyProp = document.createElement('div');
        let divNameCompanyValue = document.createElement('div');
        let divCatchPhrase = document.createElement('div');
        let divCatchPhraseProp = document.createElement('div');
        let divCatchPhraseValue = document.createElement('div');
        let divBs = document.createElement('div');
        let divBsProp = document.createElement('div');
        let divBsValue = document.createElement('div');
        let buttonPosts = document.createElement('button');
        divUserDetail.classList.add('UserDetail');
        divUserPerson.classList.add('UserPerson');
        divUser.classList.add('User');
        divId.classList.add('Id');
        divName.classList.add('Name');
        divNameValue.classList.add('NameValue');
        divPhone.classList.add('Phone');
        divEmail.classList.add('Email');
        divUserName.classList.add('UserName');
        divZipcode.classList.add('Zipcode');
        divZipcodeProp.classList.add('ZipcodeProp');
        divZipcodeValue.classList.add('ZipcodeValue');
        divWebsite.classList.add('Website');
        divAddress.classList.add('Address');
        divAddressGeoPlace.classList.add('AddressGeoPlace');
        divAddressUser.classList.add('AddressUser');
        divPlace.classList.add('Place');
        divCity.classList.add('City');
        divCityProp.classList.add('CityProp');
        divCityValue.classList.add('CityValue');
        divStreet.classList.add('Street');
        divStreetProp.classList.add('StreetProp');
        divStreetValue.classList.add('StreetValue');
        divSuite.classList.add('Suite');
        divSuiteProp.classList.add('SuiteProp');
        divSuiteValue.classList.add('SuiteValue');
        divGeo.classList.add('Geo');
        divLat.classList.add('Lat');
        divLng.classList.add('Ing');
        divCompany.classList.add('Company');
        divNameCompany.classList.add('NameCompany');
        divNameCompanyProp.classList.add('NameCompanyProp');
        divNameCompanyValue.classList.add('NameCompanyValue');
        divCatchPhrase.classList.add('CatchPhrase');
        divCatchPhraseProp.classList.add('CatchPhraseProp');
        divCatchPhraseValue.classList.add('CatchPhraseValue');
        divBs.classList.add('Bs');
        divBsProp.classList.add('BsProp');
        divBsValue.classList.add('BsValue');
        buttonPosts.classList.add('buttonPost');
        divId.innerHTML = `id: <b>${user.id}</b>`;
        divNameProp.innerText = `name:`;
        divNameValue.innerHTML = `<b>${user.name}</b>`;
        divUserName.innerHTML = `username: <b>${user.username}</b>`;
        divEmail.innerHTML = `email: <b>${user.email}</b>`;
        divPhone.innerHTML = `phone: <b>${user.phone}</b>`;
        divWebsite.innerHTML = `website: <b>${user.website}</b>`;
        divAddress.innerText = `address:`;
        divGeo.innerText = `Geo:`;
        divZipcodeProp.innerText = `zipcode:`
        divZipcodeValue.innerHTML = `<b>${user.address.zipcode}</b>`
        divLng.innerHTML = `Ing:  ${user.address.geo.lng}`;
        divLat.innerHTML = `Lat: ${user.address.geo.lat}`;
        divCityProp.innerText = `city:`;
        divCityValue.innerHTML = `<b>${user.address.city}</b>`;
        divStreetProp.innerText = `street:`;
        divStreetValue.innerHTML = `<b>${user.address.street}</b>`;
        divSuiteProp.innerText = `suite:`;
        divSuiteValue.innerHTML = `<b>${user.address.suite}</b>`;
        divCompany.innerText = `company:`;
        divNameCompanyProp.innerText = `name:`;
        divNameCompanyValue.innerHTML = `<b>${user.company.name}</b>`;
        divCatchPhraseProp.innerText = `catchPhrase:`;
        divCatchPhraseValue.innerHTML = `<b>${user.company.catchPhrase}</b>`;
        divBsProp.innerHTML = `bs:`;
        divBsValue.innerHTML = `<b>${user.company.bs}</b>`;
        buttonPosts.innerHTML = `POSTS OF CURRENT USER`;
        let flag: number = 1;
        buttonPosts.onclick = (): void =>{
            if(flag === 1){
                postsTitles(); flag = 2
            }else{
                // flag = 1
            }
        };
        document.body.append(divUserDetail, a);
        divZipcode.append(divZipcodeProp, divZipcodeValue);
        divCity.append(divCityProp, divCityValue);
        divStreet.append(divStreetProp, divStreetValue);
        divSuite.append(divSuiteProp, divSuiteValue);
        divName.append(divNameProp, divNameValue);
        divCatchPhrase.append(divCatchPhraseProp, divCatchPhraseValue);
        divAddressUser.append(divAddress, divAddressGeoPlace);
        divAddressGeoPlace.append(divGeo, divPlace);
        divPlace.append(divZipcode, divCity, divStreet, divSuite);
        divGeo.append(divLat, divLng);
        divCompany.append(divNameCompany, divCatchPhrase, divBs);
        divNameCompany.append(divNameCompanyProp, divNameCompanyValue);
        divBs.append(divBsProp, divBsValue);
        divUser.append(divUserName, divEmail, divPhone, divWebsite);
        divUserPerson.append(divUser, divAddressUser, divCompany);
        divUserDetail.append(divId, divName, divUserPerson, buttonPosts)
    });
function postsTitles(): void {
    let url2: string = 'https://jsonplaceholder.typicode.com/users/'+idValue+'/posts'
    fetch(url2)
        .then(res => res.json())
        .then((posts): void => {console.log(posts);
            let box = document.createElement('div');
            box.classList.add('boxPosts');
            for (const post of posts) {
                let div = document.createElement('div');
                div.classList.add('divPost');
                let h4  = document.createElement('h4');
                h4.innerText = `${post.title}`;
                let buttonPost = document.createElement('button');
                buttonPost.classList.add('buttonPost');
                buttonPost.innerText = 'IN DETAIL';
                buttonPost.onclick = (): void =>{
                    location.href = `../postDetails/postDetails.html?title=${post.title}&idUser=${idValue}&id=${post.id}`
                }
                div.append(h4, buttonPost);
                box.append(div);
                document.body.append(box);
            }})
}