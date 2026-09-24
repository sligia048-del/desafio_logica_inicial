function ranking (numV, numD) 
{let nivel; if(numV <= 10){
    nivel = "Ferro";
} else if(numV <= 30){
    nivel = "Bronze"
} else if(numV <= 50){
    nivel = "Prata"
} else if(numV <= 80){
    nivel = "Ouro"
} else if(numV <= 90){
    nivel = "Diamante"
} else if(numV <= 100){
    nivel = "Lendário"
} else{
    nivel = "Imortal"}
   return { subtraction: numV - numD, nivel: nivel };
}

let resultado = ranking(86, 19)


    console.log("O Herói tem saldo de vitória de " + resultado.subtraction + " e está no nível " + resultado.nivel);