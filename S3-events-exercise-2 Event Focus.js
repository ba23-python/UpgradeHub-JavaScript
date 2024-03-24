const input$$ = document.querySelector('input');

input$$.addEventListener('focus', showValue);//the event is focus, cuando el cursos esta situado en el campo, se le da foco y se puede escribir.
//cuando escribo algo y le doy al raton fuera del foco, y vuelvo a hacer click en el campo para recuperar el foco de nuevo es cuando muestra lo que se ha escrito


function showValue(){
    let value = input$$.value;
    console.log(value);
}

//Option 2 con THIS
//const input$ = document.querySelector('input');

//input$.addEventListener('focus', showValue); //the event is focus

//function showValue(){
    //let value = this.value;
    //console.log(value);
//}
