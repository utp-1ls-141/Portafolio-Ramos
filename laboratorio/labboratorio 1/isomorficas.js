function isomorphic (str1, str2) {

    var len1 = str1.length;//verificar el tamaño de las cadenas//

    if (len1 != str2.length) {//verifica si la cadena 1 es del mismo tamaño de la cadena 2//
        return false;
    }

    var chMap = {};//objeto//

    for (var i = 0; i < len1; i++) {

        if (!chMap[str1[i]]) {
            chMap[str1[i]] = str2[i];

        } else if (chMap[str1[i]] !== str2[i]) {
            return false;
        }
    }
    return true;
}
function marvel(){
    
    var resultado;
    var primero = pal1.value.toLowerCase();
    var segundo = pal2.value.toLowerCase();
    var tercero = primero.length;
    var cuarta =  segundo.length;
    if(primero==="" || segundo===""){ //comprobar si el input tiene texto//
        resultado = "Ingrese una palabra";
        
    }else{
        
        if(!document.getElementById('pal1').checkValidity() || !document.getElementById('pal2').checkValidity()){ //comprobar si se cumple el patron de solo letras//
            resultado = "ha ingresado algo distinto a letras";
        }else{
            
            if(tercero != cuarta){ //valida si las cadenas si tienen el mismo tamaño//
                resultado = "no son isomorficas";
            
            }else{
                
                if(primero === segundo){//es para comprobar si son la misma palabra//
                    resultado = "son isomorficas";
                    }else{
                       
                    if(isomorphic(primero,segundo)){

                        resultado = "Son isomorficas";

                     }else{
                        resultado = "No son isomorficas";
                        
                    }
                }
            }
        }
    }
    $("#deadpool").modal("show");//abre el modal//
    $("#thanos").html(resultado);//copia la cadena del resultado dentro del modal//


}