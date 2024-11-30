let betn=document.querySelector("#btn");
let currentmode="light";

betn.addEventListener("click",() =>{
if(currentmode=="light"){
    currentmode="dark";
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    document.querySelector("button").style.color="tan";
}
else{
    currentmode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").style.color="black";
    document.querySelector("button").style.color="darkblue";
}
console.log(currentmode)});


