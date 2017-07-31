// var Number = document.getElementById("Number");
// var Name = document.getElementById("Name");
// var Surname = document.getElementById("Surname");
// var Favoruite_color = document.getElementById("Color");
//
// Number.addEventListener("click", function () {
//     zmiana(Number.innerHTML)
// }, true);
// Name.addEventListener("click", function () {
//     zmiana(Name.innerHTML)
// }, true);
// Surname.addEventListener("click", function () {
//     zmiana(Surname.innerHTML)
// }, true);
// Favoruite_color.addEventListener("click", function () {
//     zmiana(Favoruite_color.innerHTML)
// }, true);
//
//
// function zmiana(name_column) {
//     alert("Kolumna : " + name_column);
// }
//
// // var my_table = document.getElementById('TableContainer');
// var my_table = document.getElementsByTagName('tbody')[0];
// var rows_table = my_table.getElementsByTagName('td');
// document.write(rows_table.length)
// ;
//
// document.write(rows_table[6].innerHTML);
//
// function person(number, name, surname, color) {
//     this.number = number;
//     this.name = name;
//     this.surname = surname;
//     this.color = color;
// }
// var my_table = document.getElementById('TableContainer');
// var rows_table = my_table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
// var new_table = [];

//
// rows_table.forEach(function(item, index) {
//     var tds = item.getElementsByTagName('td');
//     new_table.push(new Person(tds[0].innerText, tds[1].innerText, tds[2].innerText, tds[3].innerText));
// });
//
// console.log(new_table);

var Number = document.getElementById("Number");
var Name = document.getElementById("Name");
var Surname = document.getElementById("Surname");
var Favoruite_color = document.getElementById("Color");

Number.addEventListener("click", function () {
    zmiana(Number.innerHTML)
}, true);
Name.addEventListener("click", function () {
    zmiana(Name.innerHTML)
}, true);
Surname.addEventListener("click", function () {
    zmiana(Surname.innerHTML)
}, true);
Favoruite_color.addEventListener("click", function () {
    zmiana(Favoruite_color.innerHTML)
}, true);


function zmiana(name_column) {
    alert("Kolumna : " + name_column);
}

var Person = function(number, name, surname, color) {
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
