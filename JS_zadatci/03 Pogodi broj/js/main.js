
// Math.ceil(Math.random() * 10) naredba generira nasumičan (random) broj od 1 do 10.

let num = Math.ceil(Math.random() * 10);

let pogodi = prompt("Pogodi broj između 1 i 10");

if (pogodi == num) {

	alert("Bravo, pogodio si broj!");

} else {

	alert("Netočno, traženi broj je: " + num);

}

 
 