var userService = {
    getAll: function () { return fetch('https://jsonplaceholder.typicode.com/users/').then(function (value) { return value.json(); }); },
    getById: function (id) { return fetch('https://jsonplaceholder.typicode.com/users/' + idValue).then(function (response) { return response.json(); }); },
    getByIdPosts: function (id) { return fetch('https://jsonplaceholder.typicode.com/users/' + idValue + '/posts').then(function (res) { return res.json(); }); }
};
var a = document.createElement('a');
a.classList.add('AA');
a.innerText = "card index  (return)";
a.href = "../index.html";
var url = new URL(location.href);
var idValue = +url.searchParams.get('id');
userService.getById(idValue)
    // .then(response => response.json())
    .then(function (user) {
    console.log(user);
    var divUserDetail = document.createElement('div');
    var divUserPerson = document.createElement('div');
    var divUser = document.createElement('div');
    var divId = document.createElement('div');
    var divName = document.createElement('div');
    var divNameProp = document.createElement('div');
    var divNameValue = document.createElement('div');
    var divUserName = document.createElement('div');
    var divEmail = document.createElement('div');
    var divPhone = document.createElement('div');
    var divWebsite = document.createElement('div');
    var divAddress = document.createElement('div');
    var divAddressUser = document.createElement('div');
    var divAddressGeoPlace = document.createElement('div');
    var divPlace = document.createElement('div');
    var divGeo = document.createElement('div');
    var divLat = document.createElement('div');
    var divLng = document.createElement('div');
    var divZipcode = document.createElement('div');
    var divZipcodeProp = document.createElement('div');
    var divZipcodeValue = document.createElement('div');
    var divCity = document.createElement('div');
    var divCityProp = document.createElement('div');
    var divCityValue = document.createElement('div');
    var divStreet = document.createElement('div');
    var divStreetProp = document.createElement('div');
    var divStreetValue = document.createElement('div');
    var divSuite = document.createElement('div');
    var divSuiteProp = document.createElement('div');
    var divSuiteValue = document.createElement('div');
    var divCompany = document.createElement('div');
    var divNameCompany = document.createElement('div');
    var divNameCompanyProp = document.createElement('div');
    var divNameCompanyValue = document.createElement('div');
    var divCatchPhrase = document.createElement('div');
    var divCatchPhraseProp = document.createElement('div');
    var divCatchPhraseValue = document.createElement('div');
    var divBs = document.createElement('div');
    var divBsProp = document.createElement('div');
    var divBsValue = document.createElement('div');
    var buttonPosts = document.createElement('button');
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
    divId.innerHTML = "id: <b>".concat(user.id, "</b>");
    divNameProp.innerText = "name:";
    divNameValue.innerHTML = "<b>".concat(user.name, "</b>");
    divUserName.innerHTML = "username: <b>".concat(user.username, "</b>");
    divEmail.innerHTML = "email: <b>".concat(user.email, "</b>");
    divPhone.innerHTML = "phone: <b>".concat(user.phone, "</b>");
    divWebsite.innerHTML = "website: <b>".concat(user.website, "</b>");
    divAddress.innerText = "address:";
    divGeo.innerText = "Geo:";
    divZipcodeProp.innerText = "zipcode:";
    divZipcodeValue.innerHTML = "<b>".concat(user.address.zipcode, "</b>");
    divLng.innerHTML = "Ing:  ".concat(user.address.geo.lng);
    divLat.innerHTML = "Lat: ".concat(user.address.geo.lat);
    divCityProp.innerText = "city:";
    divCityValue.innerHTML = "<b>".concat(user.address.city, "</b>");
    divStreetProp.innerText = "street:";
    divStreetValue.innerHTML = "<b>".concat(user.address.street, "</b>");
    divSuiteProp.innerText = "suite:";
    divSuiteValue.innerHTML = "<b>".concat(user.address.suite, "</b>");
    divCompany.innerText = "company:";
    divNameCompanyProp.innerText = "name:";
    divNameCompanyValue.innerHTML = "<b>".concat(user.company.name, "</b>");
    divCatchPhraseProp.innerText = "catchPhrase:";
    divCatchPhraseValue.innerHTML = "<b>".concat(user.company.catchPhrase, "</b>");
    divBsProp.innerHTML = "bs:";
    divBsValue.innerHTML = "<b>".concat(user.company.bs, "</b>");
    buttonPosts.innerHTML = "POSTS OF CURRENT USER";
    var flag = 1;
    buttonPosts.onclick = function () {
        if (flag === 1) {
            postsTitles();
            flag = 2;
        }
        else {
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
    divUserDetail.append(divId, divName, divUserPerson, buttonPosts);
});
function postsTitles() {
    userService.getByIdPosts(+idValue)
        .then(function (posts) {
        console.log(posts);
        var box = document.createElement('div');
        box.classList.add('boxPosts');
        var _loop_1 = function (post) {
            var div = document.createElement('div');
            div.classList.add('divPost');
            var h4 = document.createElement('h4');
            h4.innerText = "".concat(post.title);
            var buttonPost = document.createElement('button');
            buttonPost.classList.add('buttonPost');
            buttonPost.innerText = 'IN DETAIL';
            buttonPost.onclick = function () {
                location.href = "../postDetails/postDetails.html?title=".concat(post.title, "&idUser=").concat(idValue, "&id=").concat(post.id);
            };
            div.append(h4, buttonPost);
            box.append(div);
            document.body.append(box);
        };
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            _loop_1(post);
        }
    });
}
