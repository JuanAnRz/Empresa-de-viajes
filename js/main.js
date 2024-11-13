let head=document.getElementById("head");
let main=document.getElementById("main");
// let alemania=[];
const al=document.getElementById("al");
const ko=document.getElementById("ko");
const ja=document.getElementById("ja");
const ua=document.getElementById("ur");
const uc=document.getElementById("uc");
const it=document.getElementById("it");

al.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "al")
})
ko.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "ko")
})
it.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "it")
})

uc.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "uc")
})
ja.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "ja")
})

ur.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "ur")
})

console.log(al)