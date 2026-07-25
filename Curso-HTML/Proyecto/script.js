console.log("Contando del 1 al 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Números pares");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

/*
Respuestas al mini reto:
1. ingrementa el valor de i en 1 en cada iteración del bucle for.
2. 3 4 5 
3. el for se usa cuando se conoce el número de iteraciones, mientras que el while se usa cuando no se conoce el número de iteraciones.
4. se ha olvidado el incremento de i en el bucle for, lo que provoca un bucle infinito.
5. for(let i = 1; i <= 10; i--) {
    console.log(i); }
6. for(let i = 1; i <= 10; i++) {
    console.log(7*i); }
*/

/*
Respuestas al mini reto:
1. una funcion nos ayuda a reutilizar código y a organizarlo mejor, nos permite tener un bloque de codigo multifuncional.
2. el paramtro es una variable que se pasa a la función para que pueda ser utilizada dentro de ella, mientras que el argumento es el valor que se le pasa a esa variable cuando se llama a la función.
3. imprime 4
4. le da una valor de retorno a una funcion.
5. toma la varible dentro de la funcion pero como esta solo existe dentro de la funcion no se puede usar fuera de ella,por lo que no retornaria nada.
6. funcion cuadrado(numero){
  return numero * numero;
}
  console.log(cuadrado(5)); 
*/