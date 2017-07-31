var Number = document.getElementById("Number");
var Name = document.getElementById("Name");
var Surname = document.getElementById("Surname");
var Favoruite_color = document.getElementById("Color");

Number.addEventListener("click", function () {
    change_table(1);
}, true);
Name.addEventListener("click", function () {
    change_table(2);
}, true);
Surname.addEventListener("click", function () {
    change_tablea(3);
}, true);
Favoruite_color.addEventListener("click", function () {
    change_table(4);
}, true);


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

// my_table.getElementsByTagName('tbody')[0].insertBefore(rows_table[4], rows_table[1]);

function change_table(number) {

    switch (number) {
        case 1:
            new_table.sort(function (ob1, ob2) {
                if (ob1.number > ob2.number) {
                    return 1;
                } else if (ob1.number < ob2.number) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            break;

        case 2:
            new_table.sort(function (ob1, ob2) {
                if (ob1.name > ob2.name) {
                    return 1;
                } else if (ob1.name < ob2.name) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            break;

        case 3:
            new_table.sort(function (ob1, ob2) {
                if (ob1.surname > ob2.surname) {
                    return 1;
                } else if (ob1.surname < ob2.surname) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            break;

        case 4:
            new_table.sort(function (ob1, ob2) {
                if (ob1.color > ob2.color) {
                    return 1;
                } else if (ob1.color < ob2.color) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            break;

        default:
            console.log("bład w petli switch");
            break;
    }
    for (var i = 0; i < 8; i++) {
        rows_table[i].getElementsByTagName('td')[0].innerHTML = new_table[i].number;
        rows_table[i].getElementsByTagName('td')[1].innerHTML = new_table[i].name;
        rows_table[i].getElementsByTagName('td')[2].innerHTML = new_table[i].surname;
        rows_table[i].getElementsByTagName('td')[3].innerHTML = new_table[i].color;
    }
}

console.log(new_table);

