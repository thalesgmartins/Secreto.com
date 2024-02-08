function verificaValidadeChute(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    console.log("Valor Inválido");
    elementoChute.innerHTML += "<div>Valor inválido, precisa ser um número!</div>";
    queIssoMeuFilho.play();
    return;
  }

  if (numeroMaiorOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor Inválido: o número precisa estar entre ${menorValor} e  ${maiorValor}</div>`;
    pare.play();
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você acertou! Boa!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar" onclick="location.reload()">Jogar Novamente</button>
    `;
    atumalaka.play();
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    cavalo.play();
   } else {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    cavalo.play();
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
