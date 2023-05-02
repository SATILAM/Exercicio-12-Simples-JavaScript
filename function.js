// Array com as distâncias percorridas em cada dia
const distanciasPercorridas = [5, 8, 3, 12, 10];

// Função que calcula a distância total percorrida
function calcularDistanciaTotal(distancias) {
  let distanciaTotal = 0;
  for (let i = 0; i < distancias.length; i++) {
    distanciaTotal += distancias[i];
  }
  return distanciaTotal;
}

// Exibe a distância total percorrida
console.log(`Distância total percorrida: ${calcularDistanciaTotal(distanciasPercorridas)} km`);

// Função que calcula a distância média percorrida por dia
function calcularDistanciaMedia(distancias) {
  const distanciaTotal = calcularDistanciaTotal(distancias);
  const dias = distancias.length;
  return distanciaTotal / dias;
}

// Exibe a distância média percorrida por dia
console.log(`Distância média por dia: ${calcularDistanciaMedia(distanciasPercorridas)} km`);

// Função que encontra a maior distância percorrida em um dia
function encontrarMaiorDistancia(distancias) {
  let maiorDistancia = distancias[0];
  for (let i = 1; i < distancias.length; i++) {
    if (distancias[i] > maiorDistancia) {
      maiorDistancia = distancias[i];
    }
  }
  return maiorDistancia;
}

// Exibe a maior distância percorrida em um dia
console.log(`Maior distância percorrida em um dia: ${encontrarMaiorDistancia(distanciasPercorridas)} km`);