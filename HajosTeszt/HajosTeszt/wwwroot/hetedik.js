

var kérdések;
var jóVálasz;
var kérdésSzám = 0;
var kérdésekSzáma;
var id = 1;
window.onload = function () {
    //letöltés();
    kérdésBetöltés(id);
    //kérdésMegjelenítésRégi(1)}
}

function teszt() {
    fetch(`/questions/15`)
        .then(Response => Response.json)
        .then(data => kérdésMegjelenítés(data));
}



function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
    letöltésBefejeződött();

}
function kérdésBetöltés(id) {

    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás Válasz: ${response.status}`)
            }
            else { return response.json() }

        }



        )
        .then(data => kérdésMegjelenítés(data));




}


function letöltésBefejeződött(d) {
    console.log("sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(kérdésSzám);

}
function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/"+kérdés.image;
    jóVálasz = kérdés.correctAnswer;
}

function előre1() {


    id = id + 1;
    kérdésBetöltés(id);
    szines();
}

function hátra1() {

    id = id - 1;
    kérdésBetöltés(id);
    szines();
}



function előre() {

    kérdésSzám++;
    if (kérdésSzám > kérdések.length-1) {
        kérdésSzám = 0;

    }
    kérdésMegjelenítés(kérdésSzám);
    szines();


}

function vissza() {

    kérdésSzám--;
    if (kérdésSzám < 0) {
        kérdésSzám = kérdések.length-1;
    }
    kérdésMegjelenítés(kérdésSzám);
    szines();



}
function Válasz1() {

    document.getElementById("válasz1").style.backgroundColor = "red";
    document.getElementById("válasz2").style.backgroundColor = "red";
    document.getElementById("válasz3").style.backgroundColor = "red";

    document.getElementById(`válasz${jóVálasz}`).style.backgroundColor = "green";


}

function Válasz2() {
    document.getElementById("válasz1").style.backgroundColor = "red";
    document.getElementById("válasz2").style.backgroundColor = "red";
    document.getElementById("válasz3").style.backgroundColor = "red";
    document.getElementById(`válasz${jóVálasz}`).style.backgroundColor = "green";


}
function Válasz3() {
    document.getElementById("válasz1").style.backgroundColor = "red";
    document.getElementById("válasz2").style.backgroundColor = "red";
    document.getElementById("válasz3").style.backgroundColor = "red";

    document.getElementById(`válasz${jóVálasz}`).style.backgroundColor = "green";


}
function szines() {

    for (var i = 1; i <= 3 ; i++) {

        document.getElementById(`válasz${i}`).style.backgroundColor="white"

    }



}



/*function kérdésMegjelenítésRégi(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = `<h2>${kérdések[kérdés].questionText}`;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép").innerHTML = `<img id="kép1" src="https://szoft1.comeback.hu/hajo/${kérdések[kérdés].image}">`
}*/