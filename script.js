let temperatura = document.querySelector("#temperatura");
const botaoConverter = document.querySelector("button");
let deTemp = document.querySelector(".deTemp");
let paraTemp = document.querySelector(".paraTemp");
let resultado = document.querySelector(".resultado");

botaoConverter.addEventListener("click", () => {
  let unidade = deTemp.value + paraTemp.value;
  converterTemperatura(unidade, temperatura.value);
});

function converterTemperatura(unidade, temperatura) {
  let temp;
  temperatura = Number(temperatura);

  switch (unidade) {
    case "CF":
      temp = (temperatura * 9) / 5 + 32;
      resultado.textContent = `${temp.toFixed(2)}°${paraTemp.value}`;
      break;
    case "FC":
      temp = (temperatura - 32) * (5 / 9);
      resultado.textContent = `${temp.toFixed(2)}°${paraTemp.value}`;
      break;
    case "CK":
      temp = temperatura + 273.15;
      resultado.textContent = `${temp.toFixed(2)}°${paraTemp.value}`;
      break;
    case "FK":
      temp = (temperatura - 32) * (5 / 9) + 273.15;
      resultado.textContent = `${temp.toFixed(2)}°${paraTemp.value}`;
      break;
    case "KC":
      temp = temperatura - 273.15;
      resultado.textContent = `${temp.toFixed(2)}°${paraTemp.value}`;
      break;
    case "KF":
      temp = (temperatura - 273.15) * (9 / 5) + 32;
      resultado.textContent = `${temp.toFixed(2)}°${paraTemp.value}`;
      break;
    default:
      resultado.textContent = `${temperatura}°${paraTemp.value}`;
  }
}
