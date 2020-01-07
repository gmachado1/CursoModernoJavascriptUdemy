const escola = "Cod3r"

console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))
console.log(escola.substring(3))
console.log(escola.substring(1,3))
console.log(escola.substr(3))
console.log(escola.substr(1,3))

console.log("Escola".concat("!"))

console.log(escola.replace(3,'e'))

const up = texto => texto.toUpperCase()

console.log(`texto é: ${up('gustavo')}`)