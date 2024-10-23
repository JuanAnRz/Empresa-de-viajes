let head=document.getElementById("head");
let main=document.getElementById("main");
// let a="hola";
let alemania=[];
const al=document.getElementById("al");
const ko=document.getElementById("ko");
const ja=document.getElementById("ja");
const ua=document.getElementById("ua");
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
ua.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "ua")
})
uc.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "uc")
})
ja.addEventListener("click", ()=>{
    localStorage.setItem("viaje", "ja")
})
// console.log(al.href)
// al.addEventListener("click", ()=>{
        // fetch("../js/serv.json")
        // .then(response=> response.json())
        // .then(data=>{
        //         let title=document.createElement("title");
        //         title.innerText= "Viajes a "+data[0].pais;
        //         head.appendChild(title);
        //         let op1= document.createElement("div");
        //         op1.className="opcion";
        //         let op2= document.createElement("div");
        //         op2.className="opcion";
        //         main.appendChild(op1);
        //         main.appendChild(op2);
        //         alemania.push(data[0]);
        //         for (let index = 0; index < alemania.length; index++) {
        //             let fecha=document.createElement("h2");
        //             let trans=document.createElement("h2");
        //             trans.innerText="Medio de Transporte: "+alemania[0].transporte;
        //             fecha.innerText="Fecha de salida: "+ alemania[0].fecha;
        //             op1.appendChild(fecha)
        //             op1.appendChild(trans)
        //         }
        //     }
        // )
//     }
// );



console.log(al)