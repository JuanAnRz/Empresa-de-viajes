import data from "./servi.js";
let viaje= localStorage.getItem("viaje");
let lugar=[]
let opc1=[]
let opc2=[];
let lug=[];
let pasaj=[];
let boton= document.createElement('a');
boton.href='promocion.html'
boton.innerText='Atras'
//------------------------------------Alemania--------------------------------------
if(viaje=="al"){
    // fetch('https://api.github.com/repos/JuanAnRz/empresa-de-viajes/contents/js/serv.json')
    //     .then(response=> response.json())
    //     .then(data=>{
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
//------------------------------------Creamos la Opcion 1--------------------------

                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc1[0].lugares_a_visitar
                    pasaj=opc1[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc1[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                    op1.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op1.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op1.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op1.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op1.appendChild(contrata)
                }
//------------------------------------Creamos la Opcion 2--------------------------

                for (let index = 0; index < opc2.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc2[0].lugares_a_visitar
                    pasaj=opc2[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc2[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc2[0].hospedaje
                    duracion.innerText="Duracion: "+ opc2[0].duracion;
                    trans.innerText="Transporte: "+opc2[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc2[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op2.appendChild(fecha)
                    op2.appendChild(trans)
                    op2.appendChild(duracion)
                    op2.appendChild(hospedaje)
                    op2.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op2.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op2.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op2.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op2.appendChild(contrata)
                }
                main.appendChild(boton);
            }
//         )
// }

//------------------------------------Pompeya--------------------------------------
if(viaje=="it"){
    // fetch('./js/serv.json')
    //     .then(response=> response.json())
    //     .then(data=>{
                let title=document.createElement("title");
                lugar= data[1].Italia;
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
//------------------------------------Creamos la Opcion 1--------------------------

                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc1[0].lugares_a_visitar
                    pasaj=opc1[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc1[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                    op1.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op1.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op1.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op1.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op1.appendChild(contrata)
                }
//------------------------------------Creamos la Opcion 2--------------------------

                for (let index = 0; index < opc2.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc2[0].lugares_a_visitar
                    pasaj=opc2[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc2[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc2[0].hospedaje
                    duracion.innerText="Duracion: "+ opc2[0].duracion;
                    trans.innerText="Transporte: "+opc2[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc2[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op2.appendChild(fecha)
                    op2.appendChild(trans)
                    op2.appendChild(duracion)
                    op2.appendChild(hospedaje)
                    op2.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op2.appendChild(div)

                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op2.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op2.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op2.appendChild(contrata)
                }
                main.appendChild(boton);

            }
//         )
// }

//------------------------------------Japon--------------------------------------
if(viaje=="ja"){
    // fetch('./js/serv.json')
    //     .then(response=> response.json())
    //     .then(data=>{
                let title=document.createElement("title");
                lugar= data[2].Japon;
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
//------------------------------------Creamos la Opcion 1--------------------------

                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc1[0].lugares_a_visitar
                    pasaj=opc1[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc1[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                    op1.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op1.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op1.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op1.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op1.appendChild(contrata)
                }
//------------------------------------Creamos la Opcion 2--------------------------

                for (let index = 0; index < opc2.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc2[0].lugares_a_visitar
                    pasaj=opc2[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc2[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc2[0].hospedaje
                    duracion.innerText="Duracion: "+ opc2[0].duracion;
                    trans.innerText="Transporte: "+opc2[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc2[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op2.appendChild(fecha)
                    op2.appendChild(trans)
                    op2.appendChild(duracion)
                    op2.appendChild(hospedaje)
                    op2.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op2.appendChild(div)

                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op2.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op2.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op2.appendChild(contrata)
                }
                main.appendChild(boton);

            }
//         )
// }

//------------------------------------Korea--------------------------------------
if(viaje=="ko"){
    // fetch('./js/serv.json')
    //     .then(response=> response.json())
    //     .then(data=>{
                let title=document.createElement("title");
                lugar= data[3].Corea_del_Norte;
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
//------------------------------------Creamos la Opcion 1--------------------------

                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc1[0].lugares_a_visitar
                    pasaj=opc1[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc1[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                    op1.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op1.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op1.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op1.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op1.appendChild(contrata)
                }
//------------------------------------Creamos la Opcion 2--------------------------

                for (let index = 0; index < opc2.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc2[0].lugares_a_visitar
                    pasaj=opc2[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc2[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc2[0].hospedaje
                    duracion.innerText="Duracion: "+ opc2[0].duracion;
                    trans.innerText="Transporte: "+opc2[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc2[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op2.appendChild(fecha)
                    op2.appendChild(trans)
                    op2.appendChild(duracion)
                    op2.appendChild(hospedaje)
                    op2.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op2.appendChild(div)

                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op2.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op2.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op2.appendChild(contrata)
                }
                main.appendChild(boton);

            }
//         )
// }
//------------------------------------Ucrania--------------------------------------
if(viaje=="uc"){
    // fetch('./js/serv.json')
    //     .then(response=> response.json())
    //     .then(data=>{
                let title=document.createElement("title");
                lugar= data[4].Ucrania;
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
//------------------------------------Creamos la Opcion 1--------------------------

                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc1[0].lugares_a_visitar
                    pasaj=opc1[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc1[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                    op1.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op1.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op1.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op1.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op1.appendChild(contrata)
                }
//------------------------------------Creamos la Opcion 2--------------------------

                for (let index = 0; index < opc2.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc2[0].lugares_a_visitar
                    pasaj=opc2[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc2[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc2[0].hospedaje
                    duracion.innerText="Duracion: "+ opc2[0].duracion;
                    trans.innerText="Transporte: "+opc2[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc2[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op2.appendChild(fecha)
                    op2.appendChild(trans)
                    op2.appendChild(duracion)
                    op2.appendChild(hospedaje)
                    op2.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op2.appendChild(div)

                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op2.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op2.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op2.appendChild(contrata)
                }
                main.appendChild(boton);

            }
//         )
// }
//------------------------------------Uruguay--------------------------------------
if(viaje=="ur"){
    // fetch('./js/serv.json')
    //     .then(response=> response.json())
    //     .then(data=>{
                let title=document.createElement("title");
                lugar= data[5].Uruguay;
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
//------------------------------------Creamos la Opcion 1--------------------------

                for (let index = 0; index < opc1.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc1[0].lugares_a_visitar
                    pasaj=opc1[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc1[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc1[0].hospedaje
                    duracion.innerText="Duracion: "+ opc1[0].duracion;
                    trans.innerText="Transporte: "+opc1[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc1[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op1.appendChild(fecha)
                    op1.appendChild(trans)
                    op1.appendChild(duracion)
                    op1.appendChild(hospedaje)
                    op1.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op1.appendChild(div)
                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op1.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op1.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op1.appendChild(contrata)
                }
//------------------------------------Creamos la Opcion 2--------------------------

                for (let index = 0; index < opc2.length; index++) {
                    let fecha=document.createElement("h2");
                    let trans=document.createElement("h2");
                    let duracion=document.createElement("h2")
                    let hospedaje= document.createElement("h2")
                    let visit=document.createElement("h2")
                    lug= opc2[0].lugares_a_visitar
                    pasaj=opc2[0].pasajeros
                    let adul= pasaj.adultos
                    let meno= pasaj.menores
                    let pasajeros= document.createElement("h2")
                    let precio= document.createElement("h1")
                    precio.innerText=opc2[0].valor
                    precio.className="precio"

                    hospedaje.innerText="Hotel: "+opc2[0].hospedaje
                    duracion.innerText="Duracion: "+ opc2[0].duracion;
                    trans.innerText="Transporte: "+opc2[0].transporte
                    fecha.innerText="Fecha de salida: "+ opc2[0].fecha;
                    visit.innerText="Los sitios a visitar son: "

                    op2.appendChild(fecha)
                    op2.appendChild(trans)
                    op2.appendChild(duracion)
                    op2.appendChild(hospedaje)
                    op2.appendChild(visit)
                    
                    const div=document.createElement("div");
                    div.className="dLug"
                    op2.appendChild(div)

                    let paje
                    if(meno!=0 && adul!=0){
                        paje=adul+" Adultos y "+meno+" Menores"
                    }else if(adul==0){
                        paje=meno+" Menores"
                    }else{
                        paje=adul+" Adultos "
                    }
                    
                    pasajeros.innerText="Servicio para: "+paje
                    op2.appendChild(pasajeros)
                    for (let index = 0; index < lug.length; index++) {
                        const element = lug[index];
                        let  place=document.createElement("li")
                        place.innerText=element
                        place.className="places"
                        div.appendChild(place)
                    }

                    op2.appendChild(precio)

                    let contrata=document.createElement("button")
                    contrata.innerText="Contratar"
                    contrata.className="contrata"
                    op2.appendChild(contrata)
                }
                main.appendChild(boton);

            }
//         )
// }