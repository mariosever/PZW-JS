// Vrijeme u danu

/* 
deklariramo varijablu vrijeme i dodijelimo joj vrijednost sati današnjeg dana 
*/

let vrijeme = new Date().getHours();
	
if (vrijeme >= 19) {

	alert("Dobra večer. Vrijeme je za odmor.");

} else if (vrijeme >= 11) {

	alert("Dobar dan! Spremni smo za nove zadatke.");

} else {

	alert("Dobro jutro! Nadam se da ste dobro spavali.");

}