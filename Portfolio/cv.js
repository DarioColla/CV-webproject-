
let knopFlosDinner = document.getElementById("knopMeerFlosDinner");
knopFlosDinner.addEventListener("click", toonMeerInfoFlosDinner);

let knopZwecoOptics = document.getElementById("knopMeerZwecoOptics");
knopZwecoOptics.addEventListener("click", toonMeerInfoZwecoOptics)

let liInfoFlosDinner;
let textjeInfoFlosDinner;
let klikjesInfoFlosDinner = 0;




let liInfoZwecoOptics;
let textjeInfoZwecoOptics;
let klikjesInfoZwecoOptics = 0;


function toonMeerInfoZwecoOptics(){

    if (klikjesInfoZwecoOptics === 0){

        liInfoZwecoOptics = document.createElement("li");
        textjeInfoZwecoOptics = document.createTextNode("Onderzoeksstage bij het bedrijf Zweco Optics. Hier deed ik onderzoek naar de chemische samenstelling van hun lak. Dit onderzoek moest het makkelijker maken voor de werknemers om de verschillende componenten van de lak samen te voegen.");
        liInfoZwecoOptics.appendChild(textjeInfoZwecoOptics);
        liInfoZwecoOptics.id = "meerInfoZwecoOptics"
        document.getElementById("lijstjeWerkervaringjs").append(liInfoZwecoOptics);

        document.getElementById("knopMeerZwecoOptics").removeChild(document.getElementById("knopMeerZwecoOptics").firstChild)

        document.getElementById("knopMeerZwecoOptics").appendChild(document.createTextNode("Minder -"))


        klikjesInfoZwecoOptics = 1;
    }

    else if (klikjesInfoZwecoOptics === 1){

        document.getElementById("lijstjeWerkervaringjs").removeChild(document.getElementById("meerInfoZwecoOptics"))
        klikjesInfoZwecoOptics = 0;

        document.getElementById("knopMeerZwecoOptics").removeChild(document.getElementById("knopMeerZwecoOptics").firstChild)

        document.getElementById("knopMeerZwecoOptics").appendChild(document.createTextNode("Meer +"))

    }

}





function toonMeerInfoFlosDinner(){

    if (klikjesInfoFlosDinner === 0){

        liInfoFlosDinner = document.createElement("li");
        textjeInfoFlosDinner = document.createTextNode("Jobstudent bij Flo's Dinner in elen. Hier ben ik verantwoordelijk voor het bereiden van gerechten zoals hamburgers. Het opnemen van bestelling en rondbrengen van eten valt ook onder mijn takenpakket.");
        liInfoFlosDinner.appendChild(textjeInfoFlosDinner);
        liInfoFlosDinner.id = "meerInfoFlosDinner"
        document.getElementById("lijstjeWerkervaringjs").insertBefore(liInfoFlosDinner, document.getElementById("zwecoOpticsNaamEnJaarJS"));

        document.getElementById("knopMeerFlosDinner").removeChild(document.getElementById("knopMeerFlosDinner").firstChild)

        document.getElementById("knopMeerFlosDinner").appendChild(document.createTextNode("Minder -"))


        klikjesInfoFlosDinner = 1;
    }

    else if (klikjesInfoFlosDinner === 1){

        document.getElementById("lijstjeWerkervaringjs").removeChild(document.getElementById("meerInfoFlosDinner"))
        klikjesInfoFlosDinner = 0;

        document.getElementById("knopMeerFlosDinner").removeChild(document.getElementById("knopMeerFlosDinner").firstChild)

        document.getElementById("knopMeerFlosDinner").appendChild(document.createTextNode("Meer +"))

    }




}