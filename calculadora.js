//calculadora
 function sumar(a,b)
{
    return a + b
}
function restar(a,b)
{
    return a - b
}
function multiplicar(a,b)
{
    return a * b
}
function dividir(a,b)
{
    return a / b
}

function calcular(a, b, opc)
{
switch(opc)
    {
        case 1:{
            console.log("La suma de "+ a +" y " + b + " es " + sumar(a,b));
            return sumar(a,b)
            break;
        } 
        case 2:{
            console.log("La resta de "+ a +" y " + b + " es " + restar(a,b));
            return restar(a,b)
            break;
        }
        case 3:{
            console.log("La multiplicacion de "+ a + " y " + b + " es " + multiplicar(a,b));
           return multiplicar(a,b)
            break;
        }
        case 4:{
            console.log("La division de "+ a + " y " + b + " es " + dividir(a,b));
            return dividir(a,b)
            break;
        }
        default:{
            console.log("No existe esa opcion")
            break;
        } 
    }
}