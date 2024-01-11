fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res) { return res.json(); })
    .then(function (users) {
    console.log(users);
    var _loop_1 = function (user) {
        var ul = document.getElementById('list');
        var li = document.createElement('li');
        var a = document.createElement('a');
        var aId = document.createElement('aId');
        var aName = document.createElement('aName');
        var buttonUsDet = document.createElement('button');
        ul.classList.add('List');
        li.classList.add('Li');
        a.classList.add('a');
        aId.classList.add('aId');
        aName.classList.add('aName');
        buttonUsDet.classList.add('buttonUsDet');
        aId.innerHTML = "".concat(user.id, " - ");
        aName.innerHTML = "<b>".concat(user.name, "</b>");
        buttonUsDet.innerText = 'IN DETAIL';
        // a.href = `./userDetails/userDetails.html?id=${user.id}`;
        buttonUsDet.onclick = function () {
            location.href = "./userDetails/userDetails.html?id=".concat(user.id);
        };
        a.append(aId, aName);
        li.append(a, buttonUsDet);
        ul.appendChild(li);
    };
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        _loop_1(user);
    }
});
