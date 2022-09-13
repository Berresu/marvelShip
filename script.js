let men=["Tony Stark","Steve Rogers","Bruce Banner","Thor Odinson","Clint Barton","Pietro Maximoff","Vision","Peter Parker","Stephan Strange","Wong","Scoot Lang","T'Challa Udaku","Bucky Barnes","Sam Wilson","Loki Laufeyson"];
let women=["Wanda Maximoff","Natasha Romanoff","Peggy Carter","Jane Foster","Sif","Gwen Stacy","Mary Jane Watson","Clea","Pepper Potts","Hope van Dyne","Sharon Carter","Gamora","Jeniffer Walters","Christine Palmer","Hela"];

const button=document.getElementById("btnShip");
const man=document.getElementById("marvelMan");
const woman=document.getElementById("marvelWoman");

button.addEventListener("click", ()=>{
    let sayi1=Math.floor(Math.random()*15);
    man.innerHTML=men[sayi1];

    let sayi2=Math.floor(Math.random()*15);
    woman.innerHTML=women[sayi2];
})