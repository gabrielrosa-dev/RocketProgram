let preco = 725.50
let desconto = 0.10

let valordesconto = preco * 0.10
let precoFinal = preco - valordesconto   
let impostoPercentual = Math.random() * (25 - 12) + 12;

console.log("Preço original: ", preco)
console.log("Valor do desconto: ", valordesconto + "%")
console.log("Preço final: ", precoFinal)
console.log("Imposto percentual: ", impostoPercentual.toFixed(2) + "%")    
console.log("Valor final com imposto: ", (precoFinal * (1 + impostoPercentual / 100)).toFixed(2))