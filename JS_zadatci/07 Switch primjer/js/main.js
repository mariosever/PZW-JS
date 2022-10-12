
/*
getDay() metoda vraća dan u tjednu kao broj između 0 i 6 (0 je nedjelja, 6 je subota). 
*/

let day = new Date().getDay();

switch(day) {
  case 0:
    day = "Nedjelja";
    break;
  case 1:
    day = "Ponedjeljak";
    break;
  case 2:
    day = "Utorak";
    break;
  case 3:
    day = "Srijeda";
    break;
  case 4:
    day = "Četvrtak";
    break;
  case 5:
    day = "Petak";
    break;
  case  6:
    day = "Subota";
}

alert("Danas je " + day);


 
 