//se crea el boton con id btnToClick que se añade al html atraves de JS
let button$ = document.createElement('button');
button$.id = 'btnToClick';
button$.textContent = 'Click me';
document.body.appendChild(button$);


//añade el evento click que ejecute un console log con la información del evento del click
button$.onclick = btnOnClick;
button$.addEventListener('click', btnOnClick);

function btnOnClick(btnOnClick) {
    console.log(btnOnClick);
    
}
