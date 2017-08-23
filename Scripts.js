var Number = document.getElementById("Number");
var Name = document.getElementById("Name");
var Surname = document.getElementById("Surname");
var Favoruite_color = document.getElementById("Color");

Number.addEventListener("click", function () {
    new_table.sort(compareValues('number')),
    changeOrderInTable()
}, true);

Name.addEventListener("click", function () {
    new_table.sort(compareValues('name')),
    changeOrderInTable()
}, true);

Surname.addEventListener("click", function () {
    new_table.sort(compareValues('surname')),
    changeOrderInTable()
}, true);

Favoruite_color.addEventListener("click", function () {
    new_table.sort(compareValues('color')),
    changeOrderInTable()
}, true);

//we create a object which will represent every row in table
var Person = function (number, name, surname, color) {
    this.number = number;
    this.name = name;
    this.surname = surname;
    this.color = color;
};

var my_table = document.getElementById('TableContainer');
var rows_table = my_table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
var new_table = [];


for (var i = 0, length = rows_table.length; i < length; i++) {
    var tds = rows_table[i].getElementsByTagName('td');
    new_table.push(new Person(tds[0].innerText, tds[1].innerText, tds[2].innerText, tds[3].innerText));
}

function compareValues(key) {
    return function (a, b) {
    // console.log( a["name"]);
    // console.log(b);
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        //we must check if object has property named in key to be able to compare values
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];
        // now we check, if first value is bigger than second function change them in ascending order,
        // , if is less then function return -1, and change them in descending order
        //if the values are the same function return 0 and nothing is change
        if (varA > varB) {
            return 1;
        } else if (varA < varB) {
            return -1;
        } else {
            return 0;
        }
    }
}

 function changeOrderInTable() {
     for (var i = 0; i < 8; i++) {
        rows_table[i].getElementsByTagName('td')[0].innerHTML = new_table[i].number;
        rows_table[i].getElementsByTagName('td')[1].innerHTML = new_table[i].name;
        rows_table[i].getElementsByTagName('td')[2].innerHTML = new_table[i].surname;
        rows_table[i].getElementsByTagName('td')[3].innerHTML = new_table[i].color;
    }
}


