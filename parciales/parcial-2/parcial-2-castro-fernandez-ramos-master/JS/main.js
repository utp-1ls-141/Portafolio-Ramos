/*  Por las brillantes Mentes de 
Ramon Castro
Manuel Fernandez
Pedro Ramos */
 
$(document).ready(function(){
    $('#btn1').prop('disabled',true);
    $('#btn2').prop('disabled',true);
    $('#btn3').prop('disabled',true);
    $('#btn4').prop('disabled',true);        
    $('#str1').keyup(function(){
        $('#btn1').prop('disabled', this.value == "" || $("#str2").val()== "" || $("#str3").val()== ""  ? true : false);     
    })
    $('#str2').keyup(function(){
        $('#btn1').prop('disabled', this.value == "" || $("#str1").val()== ""|| $("#str3").val()== ""  ? true : false);     
    })
    $('#str3').keyup(function(){
        $('#btn1').prop('disabled', this.value == "" || $("#str1").val()== ""|| $("#str3").val()== ""  ? true : false);     
    })
    $('#num1').keyup(function(){
        $('#btn2').prop('disabled', this.value == "" ? true : false);     
    })
    $('#num2').keyup(function(){
        $('#btn3').prop('disabled', this.value == "" ? true : false);     
    })
    $('#num3').keyup(function(){
        $('#btn4').prop('disabled', this.value == "" ? true : false);     
    })
});  
$(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".carousel-control-prev").click();
       return false;
    }
    if (e.keyCode === 39) {
       // Next
       $(".carousel-control-next").click();
       return false;
    }
});
function control1(){
    var str1=$("#str1").val(); 
    var str2=$("#str2").val(); 
    var str3=$("#str3").val(); 
    isomorphic(str1,str2,str3);
}
function control2(){
    var num=$("#num1").val(); 
    if(num<=0){
        $('.modal-body').html('No se puede usar numeros menores o iguales a 0');
        return;
    }
    mostrarMatriz(num);
}
function control3(){
    var num=parseInt($("#num2").val());  
    if(num<=0){
        $('.modal-body').html('No se puede usar numeros menores o iguales a 0');
        return;
    }
    a=isPalindromo(num.toString());
    b=isPalindromo(num.toString(2));
    
    if(a==true && b==true)
        $('.modal-body').html('Es doblemente palindromo');
    else 
        $('.modal-body').html('No es doblemente palindromo');
      
}
function control4(){
    var num=$("#num3").val();  
    $("#num3").val().length;
    if(num<=0){
        $('.modal-body').html('No se puede usar numeros menores o iguales a 0');
        return;
    }
    for(i=0;i<=num.length;i++){
        if(!isPrimo(parseInt(num))){
           
            $('.modal-body').html('Existen numeros que no son primos');
            return;
        }
    num=num.charAt(num.length-1)+''+num.substring(0,num.length-1);
    }
    $('.modal-body').html('Toda la serie es prima');
}

function isPalindromo(pal){
    pal=pal.replace(/\s+/g, '');
    var rev=pal.split("").reverse().join("");
    if (pal==rev)
        return true;
    else 
        return false;
    
    }
function mostrarMatriz(num){
    var cad='<table>';
    var aux=num-1;
    var aux2=0;
    for(i=0;i<num;i++){
        cad+='<tr>'
        for(x=0;x<num;x++){
        if(i==x){
            if(num%2!=0){
                var esp=(num-1)/2;
                if(x==esp && i==esp){
                    cad+='<td>'+23+'</td>';
                }
                else{
                    do{
                    y=Math.floor((Math.random() * 70)+1 );
                    }while(y%23!=0);
                    cad+='<td>'+y+'</td>';
                }
            }
            else{
                do{
                y=Math.floor((Math.random() * 70)+1 );
                }while(y%23!=0);
                cad+='<td>'+y+'</td>';
            }}
        else if(aux==x && aux2==i){
            do{
            y=Math.floor((Math.random() * 70)+1 );
            }while(!isPrimo(y));
            cad+='<td>'+y+'</td>';
        }
        
        else{
            cad+='<td>'+Math.floor((Math.random() * 70)+1 )+'</td>';}
        } 
        cad+='</tr>';
    aux--;
    aux2++;
    }
    $('.modal-body').html(cad);
}
function isPrimo(nx){
    for(index=2;index<nx;index++){
        if(nx%index==0){
            return false;
        }
    }
    return true;
}

function isomorphic (vari1, vari2,vari3) {
if ( vari1.length != vari2.length || vari1.length != vari3.length ) {
    $('.modal-body').html('Las palabras no tienen la misma cantidad de letras');
}
    if ( vari1.length != vari3.length ) {
        $('.modal-body').html('Las palabras no tienen la misma cantidad de letras');
    }
    if ( vari2.length != vari3.length ) {
        $('.modal-body').html('Las palabras no tienen la misma cantidad de letras');
    }
    
    var chMap = {};
    var chMap2 = {};
    var chMap3={};
    var chMap4={};
    var vari4= vari1;
    var vari5=vari2;
    var vari6=vari1;
    var vari7= vari1;
    var vari8= vari3;
 
    for (i = 0; i < vari1.length; i++) {
    
        if (!chMap[vari1[i]]) {   	
            chMap[vari1[i]] = vari2[i];
     
        } else if (chMap[vari1[i]] !== vari2[i]) {
        	$('.modal-body').html('las palabras no son isomorficas');
           
        }
    }
    for (i = 0; i < vari4.length; i++) {
        if (!chMap2[vari4[i]]) {   	
            chMap2[vari4[i]] = vari3[i];
     
        } else if (chMap2[vari4[i]] !== vari3[i]) {
        	$('.modal-body').html('las palabras no son isomorficas');
           
        }
    }
    for (i = 0; i < vari5.length; i++) {
    	
        if (!chMap3[vari5[i]]) {   	
            chMap3[vari5[i]] = vari6[i];
     
        } else if (chMap3[vari5[i]] !== vari6[i]) {
        	$('.modal-body').html('las palabras no son isomorficas');
           
        }
    }
    for (i = 0; i < vari8.length; i++) {
    	
        if (!chMap4[vari8[i]]) {   	
            chMap4[vari8[i]] = vari7[i];
     
        } else if (chMap4[vari8[i]] !== vari7[i]) {
        	$('.modal-body').html('las palabras no son isomorficas');
   
        }
    }
     
    $('.modal-body').html('las palabras son isomorficas');
    
}