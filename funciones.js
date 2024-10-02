function saludo(nombre, apellido) {
    return "Hola " + nombre + " " + apellido
}
console.log(saludo("Antonio", "Martinez"))


function suma(numeroUno, numeroDos) {
    return numeroUno + numeroDos
}
console.log(suma(1, 4))

function resta(numeroUno, numeroDos) {
    return numeroUno - numeroDos
}
console.log(resta(6, 1))

function multiplicacion(numeroUno, numeroDos) {
    return numeroUno * numeroDos
}
console.log(multiplicacion(2, 5))

function division(numeroUno, numeroDos) {
    return numeroUno / numeroDos
}
console.log(division(10, 2))

function esMayor(numeroUno, numeroDos){
    if (numeroUno > numeroDos){
        return numeroUno
    
} else {
    return numeroDos
   }
}
console.log(esMayor(77, 62))