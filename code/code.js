//Imperativa-Declarativa

//Função que eleva o número ao quadrado

//Imperativo: faça da seguinte forma:
let number = 2

function square(){
    return number * number
}
number = square()
//Declarativa: o que fazer e como não fazer:
const square = n => n * n

//Imutabilidade

//Exemplo em JS
const cart = {
    quantity: 2, 
    total: 200
}

//BAD
cart.quantity = 3 

//GOOD
const newCart = {...cart, quantity: 3}

//Exemplo em React JS
const [amount, setAmount] = useState(0)

//BAD
amount = 2

//GOOD
setAmount(2)