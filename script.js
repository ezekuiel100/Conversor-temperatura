let temperatura = document.querySelector("#temperatura");
let unidadeOrigem = document.querySelector(".unidade-origem-select");
let unidadeDestino = document.querySelector(".unidade-destino-select");
let resultado = document.querySelector(".resultado");

const botaoConverter = document.querySelector("button");

let conversoes = {
  CF: (temperatura) => (temperatura * 9) / 5 + 32,
  FC: (temperatura) => (temperatura - 32) * (5 / 9),
  CK: (temperatura) => temperatura + 273.15,
  FK: (temperatura) => (temperatura - 32) * (5 / 9) + 273.15,
  KC: (temperatura) => temperatura - 273.15,
  KF: (temperatura) => (temperatura - 273.15) * (9 / 5) + 32,
};

botaoConverter.addEventListener("click", () => {
  let unidade = unidadeOrigem.value + unidadeDestino.value;
  let tempValor = Number(temperatura.value);
  converterTemperatura(unidade, tempValor);
});

function converterTemperatura(unidade, temperatura) {
  if (temperatura === "") return;

  let funcaoConversao = conversoes[unidade];

  if (funcaoConversao) {
    let tempFinal = funcaoConversao(temperatura);
    resultado.textContent = `${tempFinal.toFixed(2)}°${unidadeDestino.value}`;
  } else {
    resultado.textContent = `${temperatura}°${unidadeDestino.value}`;
  }
}
