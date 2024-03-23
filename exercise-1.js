//con llaves JS se piensa que quieres dar return console.log y te devuelve undefined
//muestro una funccion normal
//function suma(a = 10, b = 5){
    //console.log(a + b);
//}


//suma(); //ejecuta sin ningun parametro. Coje los valor por defecto en este caso 10 y 5
//suma(6); //ejecuta a=6 y el b lo cogera por defecto, o sea b=5
//suma(12, 3); //ejecuta con 2 parametros nuevos 12 y 3

//tiene que ser sin llaves asi porque te esta pindiendo que lo lances





//muestro la misma funccion como arrow function.Hace Exactamente igual
const sumaParameters = (a = 10, b = 5) => {console.log(a + b)};

sumaParameters(); //ejecuta sin ningun parametro. Coje los valor por defecto en este caso 10 y 5
sumaParameters(6); //ejecuta a=6 y el b lo cogera por defecto, o sea b=5
sumaParameters(12, 3); //ejecuta con 2 parametros nuevos 12 y 3