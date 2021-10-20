const imc = (peso, altura) => (parseFloat(peso / (altura**2)).toPrecision(4))

console.log(imc(75, 1.8))
