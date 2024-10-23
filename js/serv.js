// import al from main.js;

// al.addEventListener("click", ()=>{
//     for (let index = 0; index < alemania.length; index++) {
//         let fecha=document.createElement("h4");
//         let trans=document.createElement("h4");
//         trans.innerText="Medio de Transporte: "+alemania[0].transporte;
//         fecha.innerText="Fecha de salida: "+ alemania[0].fecha;
//         op1.appendChild(fecha)
//         op1.appendChild(trans)
//     }


// }
// );

let viaje= localStorage.getItem("viaje");
let lugar=[]
let opc1=[]
let opc2=[];
if(viaje=="al"){
    fetch("../js/serv.json")
        .then(response=> response.json())
        .then(data=>{
                let title=document.createElement("title");
                lugar= data[0].Alemania;
                title.innerText= "Viajes a "+lugar.pais;
                head.appendChild(title);
                let op1= document.createElement("div");
                op1.className="opcion";
                let op2= document.createElement("div");
                op2.className="opcion";
                main.appendChild(op1);
                main.appendChild(op2);
                opc1.push(lugar.opcion_1);
                opc2.push(lugar.opcion_2);
                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                }
            }
        )
}
console.log(viaje)