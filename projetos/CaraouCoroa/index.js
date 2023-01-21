var qtd = 0;
var v = 0;
var d = 0;
function caraCoroa (escolha){
    let x = escolha;
    qtd++;
    console.log(qtd)
    let novaQtd = true;
    let resposta = getRandomIntInclusive(2, 11);
        let jogadas = document.getElementById('jogadas');
        if(qtd <= jogadas.value){
        if(resposta % 2 === 0){
            if(x === 0){
                console.log('venceu')
                document.getElementById('resultado').innerHTML = 'Parabéns, Você venceu!'
                v++;
                console.log(qtd);
                novaQtd = true;
            }
            else{
                console.log('perdeu')
                document.getElementById('resultado').innerHTML = 'Você perdeu :('
                d++;
                novaQtd = false;
            }
        }
        else{
            if(x === 0){
                console.log('perdeu')
                document.getElementById('resultado').innerHTML = 'Você perdeu :('
                d++;
                novaQtd = false;
            }
            else{
                console.log('venceu')
                document.getElementById('resultado').innerHTML = 'Parabéns, Você venceu!'
                v++;
                novaQtd = true;
            }
        }

       }
       else{
         resultado()
       }
     }
    
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function resultado(){
    let jogadas = document.getElementById('jogadas');
    let cara = document.getElementById('cara');

    document.getElementById('relatorio').innerHTML = `Você ganhou ${v} vezes e perdeu ${d} vezes.`
      
    console.log("Programa finalizado");
    return(0)
}

  function recomecar (){
    qtd = 0;
    v = 0;
    d = 0;
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('relatorio').innerHTML = ``
  }
