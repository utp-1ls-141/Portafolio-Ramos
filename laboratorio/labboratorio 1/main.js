
(function (){
    //primera prueba
   alert("Thanos a borrado la mitad del universo");
   alert("No me quiero ir Señor Stark");
    // segunda prueba
   //document.getElementById("remplazame").innerHTML = console.log(5+5);
  // tercera prueba 
   //var nombre = "Pedro", apellido = "Ramos";
   //console.log( "el estudiante es: " +nombre + "" +apellido + "." );

   // tercera prueba
function sortNumber(a, b){
  return a-b;
  }
  function __sort(a){
    return a.sort(sortNumber);
  }
  function sum(a){
    var acum = 0;
    for(var i=0; i < a.lenght; i++){
    acum += a[i];
    }
    return acum;
  }


   function randomGenerator(callback){
    var cantidad = 5, randoms = [];
    for(var i = 0; i < cantidad; i++){
      randoms.push(Math.floor(Math.random()*10)+ 1);
    }
   console.log(randoms);
    return typeof(callback) !== "undefined"? callback(randoms): randoms;
   }

   console.log(randomGenerator());
   console.log(randomGenerator(__sort));
   console.log(randomGenerator(sum));
     })();        
   

