let nombre  = prompt('Ingrese su nombre de usuario: ');
const tesoro = [];
const usuario = {nombre:nombre,ubicacion: [0,0]};
let distanciaX = 0;
let distanciaY = 0;

function mostrarMenuPrincipal(nombre = "Usuario"){
    let opcionIniciar = prompt(`Bienvenido ${nombre} a la búsqueda del tesoro\nUsted podrá:\n1. Jugar\n2. Controles\n3. Salir`)
    while (True){
        switch(opcionIniciar){
            case "1":
        }
    }
}
function iniciarJuego(){
    console.log('Usted se encuentra en Canadá, específicamente en la Isla del Roble en búsqueda de un tesoro valuado en 100.000 euros. Nadie está seguro sobre la historia, pero durante dos siglos congregó a varios investigadores y buscadores de tesoros, aunque hasta el momento, ninguno logró encontrarlo.\n En este momento, usted cuenta con un mapa y una serie de pistas que proveen la información necesaria para hallarlo… o quizás tal vez no.')
    console.log()
}

function generarMapa(){
    let xTesoro = Math.floor(Math.random()*1000)-1000
    let yTesoro = Math.floor(Math.random()*1000)-1000
    tesoro.push(xTesoro,yTesoro)
    console.log(tesoro)
    let xUsuario = Math.floor(Math.random()*1000)-1000
    let yUsuario = Math.floor(Math.random()*1000)-1000
    usuario.ubicacion[0] = xUsuario
    usuario.ubicacion[1] = yUsuario
}

function encontrarTesoro(){
    distanciaX = tesoro[0] - usuario.ubicacion[0];
    distanciaY = tesoro[1] - usuario.ubicacion[1];
}

generarMapa()
encontrarTesoro()

function caminar(){
    while (usuario.ubicacion[0] != tesoro[0] && usuario.ubicacion[1] != tesoro[1]){
        console.log(`El tesoro se encuentra en (${tesoro[0]},${tesoro[1]}) y ${usuario.nombre} se encuentra en (${usuario.ubicacion})`)
        encontrarTesoro()
        if (distanciaX < 0){
            let pasosIzq = prompt("¿Cuántos metros quieres caminar hacia la izquierda? ") 
            usuario.ubicacion[0] -= Number(pasosIzq);
            if (pasosIzq > distanciaX){
                console.log("¡Te has pasado!")
            }
            else if (pasosIzq < distanciaX){
                console.log("¡Aún te falta por llegar!")
            }
            else{
                console.log("¡Muy bien!")
            }
        }
        else if (distanciaX > 0){
            let pasosDer = prompt("¿Cuántos metros quieres caminar hacia la derecha? ") 
            usuario.ubicacion[0] += Number(pasosDer);
            if (pasosDer > distanciaX){
                console.log("¡Te has pasado!")
            }
            else if (pasosDer < distanciaX){
                console.log("¡Aún te falta por llegar!")
            }
            else{
                console.log("¡Muy bien!")
            }
        }

        if (distanciaY < 0){
            let pasosAba = prompt("¿Cuántos metros quieres caminar hacia abajo? ")
            usuario.ubicacion[1] -= Number(pasosAba);
            if (pasosAba > distanciaY){
                console.log("¡Te has pasado hacia abajo!")
            }
            else if (pasosAba < distanciaY){
                console.log("¡Aún te falta por llegar!")
            }
            else{
                console.log("¡Muy bien!")
            }
        }
        else if (distanciaY > 0){
            let pasosArr = prompt("¿Cuántos metros quieres caminar hacia arriba? ") 
            usuario.ubicacion[1] += Number(pasosArr);
            if (pasosArr > distanciaY){
                console.log("¡Te has pasado!")
            }
            else if (pasosArr < distanciaY){
                console.log("¡Aún te falta por llegar!")
            }
            else{
                console.log("¡Muy bien!")
            }
        }
    }
    console.log("¡Llegaste!")
}

caminar()