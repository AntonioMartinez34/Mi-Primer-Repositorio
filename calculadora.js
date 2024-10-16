function Calculadora (operacion, numeroUno, numeroDos) {
   if (operacion == "suma") {    
        let resultado = numeroUno + numeroDos
        return resultado
    } else if (operacion == "resta") {
        let resultado = numeroUno - numeroDos
        return resultado
    } else if (operacion == "multiplicacion") {
        let resultado = numeroUno * numeroDos
        return resultado
    } else if (operacion == "division") {
        let resultado = numeroUno / numeroDos
        return resultado
    } else {
        return "Error"
    }
} 
console.log(Calculadora("suma" , 10, 2))