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