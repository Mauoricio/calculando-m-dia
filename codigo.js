function calcularMedia(){

    let notas=[]

    notas[0] = document.querySelector("#Nota01").value;
    notas[1] = document.querySelector("#Nota02").value;
    notas[2] = document.querySelector("#Nota03").value;
    notas[3] = document.querySelector("#Nota04").value;
    notas[4] = document.querySelector("#Nota05").value;
    notas[5] = document.querySelector("#Nota06").value;
    notas[6] = document.querySelector("#Nota07").value;

    let total =  0;


    for(i = 0;  i < notas.length; i++){

        total+= parseFloat(notas[i]);
    }

    let media = total/notas.length;

    if(media>=6){
        alert ("Sua média foi "+media.toFixed(2)+" Aprovado.");
    } else{
        alert ("Sua média foi "+media.toFixed(2)+" Reprovado.");
    }


}
