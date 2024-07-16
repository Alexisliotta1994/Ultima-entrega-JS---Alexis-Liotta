 /* Ultima entrega js - Alexis Liotta - */
 
let buscador = document.getElementById("buscadorId")
let boton = document.getElementById("botoncitoId")
let ciudad = document.getElementById("ciudad")
let region = document.getElementById("region")
let pais = document.getElementById("pais")
let latitud = document.getElementById("latitud")
let longitud = document.getElementById("longitud")
let humedad = document.getElementById("humedad")
let condicion = document.getElementById("condicion")
let temperatura = document.getElementById("temperatura")
let horayfecha = document.getElementById("horayfecha")
let imagen = document.getElementById("imgPronostico")
let contenidoCard = document.getElementById("contenidoCard")

boton.addEventListener("click", (e)  => {  
 let busqueda = buscador.value
 console.log(busqueda)
 fetch(`https://api.weatherapi.com/v1/current.json?key=e8b7d794439744b6a5700937241307&q=${busqueda}`)

  .then(response => response.json())
  .then(data =>{
    imagen.src = `https://${data.current.condition.icon}`
    ciudad.innerText = `Ciudad: ${data.location.name}`
    region.innerText = `Region: ${data.location.region}`
    pais.innerText   = `Pais: ${data.location.country}`
    latitud.innerText = `Latitud: ${data.location.lat}`
    longitud.innerText = `longitud: ${data.location.lon}`
    humedad.innerText = `Humedad: ${data.current.humidity}`
    condicion.innerText = `Condicion: ${data.current.condition.text}`
    temperatura.innerText = `Temperatura: ${data.current.temp_c}`
    horayfecha.innerText = `Hora y Fecha: ${data.location.localtime}`
  });

  contenidoCard.className = "conte" 
    
})

