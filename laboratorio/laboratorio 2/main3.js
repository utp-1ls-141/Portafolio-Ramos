function Concatenar(){
    var p1 = pal1.value;
    var p2 = pal2.value;

    var res = p1 + " " + p2;

    $("#mod1").modal('show');
    $("#conca").html(res);
}

function crear_Mat(){
    var num=num1.value;
    var res="<table cellpadding='10'>";
    var content=0;
    var aux=num;
    var aux2=0;

    for (var i=0; i<num; i++){
        res=res+"<tr>";
        for (var j=0; j<num; j++){
            if (i==j){
                while (content%23!=0 || content==0){
                    content=Math.floor(Math.random()*100)+ 1;
                }
            }else{
                content=Math.floor(Math.random()*100)+ 1;
            }
            if(aux==i && aux2==j){
                content=Math.floor(Math.random()*100)+ 1;
               while (primo(content)==false){
                    content=Math.floor(Math.random()*100)+ 1;
                
            }
            content=Math.floor(Math.random()*100)+ 1;
                    }
            res=res+"<td>"+content+"</td>";
        }
        res=res+"</tr>";
        aux--;
        aux2++;
    }
    res=res+"</table>";

    

    $("#mod2").modal('show');
    $("#matriz").html(res);
}
function primo(num){
    for(i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
    }