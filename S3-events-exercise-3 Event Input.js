const input$ = document.querySelector('input');

input$.addEventListener('input', showValue); //the event is input
//the event is input. Mientras se escribe, a tiempo real se muestra en el Inspect-Console
function showValue(){
    let value = this.value;
    console.log(value);
}


//imprime en consola lo que se escribe en mi caso fue BILI.
// la unica diferencia entre ej2 y ej 3 es el tipo de evento que se escucha 'focus'(ej2) y 'input'(ej3)
