let button = document.querySelector('button');
button.onclick =function () {
    alert("Bienbenido a servicions de TI \nVamos a ayudarlo con su experiencia por el sitio por favor selecciones las opciones utilizando el teclado numerico");
    let seleccion = prompt("selecciona una de las siguientes opciones \n1 Contratar servicio. \n2 Nuestra garantia. \n3 Salir")
    if (seleccion = 1){
        function sumarServicios(web, app, marketing, redes, soporte){
            return web + app + marketing + redes + soporte
        }

        let web1 = Number(prompt("Primer servicio"))
        let app1 = Number(prompt("Segundo servicio"))
        let marketing1 = Number(prompt("Tercer servicio"))
        let redes1 = Number(prompt("Cuarto servicio"))
        let soporte = Number(prompt("Quinto servicio"))

        let serviciosContratados = sumarServicios()
    }else if (seleccion = 2){
        alert("Somos una empresa con mas de 2 años de experiencia y con una retención de clientes del 95%, quedando totalmente satisfecho \n\nLo invitamos a realizar su pedido con toda confianza. \n\nContamos con diversos metodos de pago como son: \n - Pago en linea \n - Pago por transferencia bancaria")
    }else if (seleccion = 3){
        alert("Gracias por su visita \nLo esperamos de nuevo")
    }
    else if(seleccion > 3){
        alert("Opcion no valida")
    }

}
