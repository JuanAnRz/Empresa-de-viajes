let head=document.getElementById("head");
let main=document.getElementById("main");
let a="hola";
let alemania=[]
let al=document.getElementById("al")


fetch("../js/serv.json")
.then(response=> response.json())
.then(data=>{
        let title=document.createElement("title");
        title.innerText= "Viajes a "+data[0].pais;
        head.appendChild(title);
        let op1= document.createElement("div");
        op1.className="opcion";
        let op2= document.createElement("div");
        op2.className="opcion";
        main.appendChild(op1);
        main.appendChild(op2);
        alemania.push(data[0]);
        for (let index = 0; index < alemania.length; index++) {
            let fecha=document.createElement("h4");
            let trans=document.createElement("h4");
            trans.innerText="Medio de Transporte: "+alemania[0].transporte;
            fecha.innerText="Fecha de salida: "+ alemania[0].fecha;
            op1.appendChild(fecha)
            op1.appendChild(trans)
        }
    }
)
