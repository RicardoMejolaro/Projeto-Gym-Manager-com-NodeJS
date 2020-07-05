function soma(numeros) {
  const numerosString = String(numeros);
  const numerosSomar = []; 

  for (const numero of numerosString) {
        numerosSomar.push(Number(numero));
  }

  let soma = numerosSomar.reduce((item, next) => {
    return item += next;
  });

  return console.log(soma);
}

soma(4245);

function multiplos() {
  let numero = 1;
  const resultado = [];
  
  for(numero = 1; numero <= 50; numero++) {
    if(numero % 3 == 0 && numero % 5 == 0) {
      resultado.push("FizzBuzz");  

    } else if (numero % 3 == 0) {
       resultado.push("Fizz");  

    } else if (numero % 5 == 0) {
      resultado.push("Buzz"); 
    }
  }
  return resultado;
}

console.log(multiplos());