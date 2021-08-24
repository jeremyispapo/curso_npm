const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const ramdomnumbers = () => {
	const number = numeros[Math.floor(Math.random() * numeros.length)]
	console.log(number)
}

module.exports = { ramdomnumbers }