let head=document.getElementById("head");
let main=document.getElementById("main");
let a="hola";

fetch("../js/serv.json")
.then(response=> response.json())
.then(data=>{
        let title=document.createElement("title");
        title.innerText= "Viajes a "+data[0].pais;
        head.appendChild(title);
    }
)
