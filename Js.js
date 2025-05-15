function Oblicz() {
    var kwota;
    var react = document.getElementById("Kurs1").checked;
    var JS = document.getElementById("Kurs2").checked;
    var miasto = document.getElementById("miasto").value;
    var rata = parseInt(document.getElementById("raty").value);


    if (react == true && JS == false) {
        kwota = 5000;
    } else if (JS == true && react == true) {
        kwota = 8000;
    } else if (JS == true && react == false) {
        kwota = 3000;
    } else {
        document.getElementById("wynik").innerHTML = "Nie wybrano kursu";
        return;
    }

    var liczba = parseInt(kwota / rata);
    document.getElementById("wynik").innerHTML =
        "Kurs odbędzie się w " + miasto + 
        " . Koszt całkowity: " + kwota + " zł. Płacisz " + 
        rata + " rat po " + liczba + " zł";
}

