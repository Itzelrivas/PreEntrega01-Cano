/* Iniciamos con la introducción */
let nombre = prompt("¡Holaaa! Este mes de Junio se celebra el aniversaio de Clínica Elitzz, es por eso, que les traemos una gran sorpresa a todos nuestros pacientes. Coloca tu nombre para iniciar con la dinámica, por favor:")
console.log (nombre)

/* Número de tratamientos = número de intentos */
let numIntentos = parseInt(prompt("¿Cuántos tratamientos te haz realizado en los últimos 5 meses en clínica Elitzz?"))
console.log (numIntentos)

/* Adivinanza para ganarse un descuento */
function porcentaje(intentos){
    return (intentos-1)*5 + 15
}

if(numIntentos == 0){
    alert(`¡Nos emociona mucho tener nuevos pacientes interesados en clínica Elitzz! Por lo cual, usa el código ${nombre.toUpperCase()}n10 para obtener un 10% de descuento en tu primer tratamiento`)
}
else{
    do{
        pregunta = parseInt(prompt(`¿En qué año se abrió la clínica Elitzz? Tienes ${numIntentos} oportunidades para escribir la respuesta correcta.`))
        console.log (pregunta)
        if(pregunta == 2015){
            alert(`¡Muchas felicidades! Utiliza el código de descuento ${nombre.toUpperCase()}paciente${porcentaje(numIntentos)} para obtener el ${porcentaje(numIntentos)}% de descuento en tu próximo tratamiento.`)
        }
    
        else if(numIntentos > 1){
            numIntentos = numIntentos - 1
            alert(`En ${pregunta} no fue el año en que Clínica Elitzz abrió. Te quedan ${numIntentos} oportunidades para adivinarlo. ¡Sigue intentándolo!`)
        }
    
        else {
            numIntentos = numIntentos - 1
            alert (`En ${pregunta} no fue el año en que Clínica Elitzz abrió y lamentablemente te has quedado sin más oportunidades, pero no te preocupes, en Elitzz valoramos y agradecemos mucho tu apoyo, así que usa el código ${nombre.toUpperCase()}paciente10si para recibir un 10% de descuento en tu próximo tratamiento.`)}
    }while((pregunta != 2015) && (numIntentos > 0))
}

/* Advertencia sobre el tiempo válido del código */
alert(`Es importante que consideres que los códigos de descuentos solo serán válidos durante el mes de Junio, para que no se te olvide utilizarlo. ¡Muchas gracias por siempre apoyarnos!`)