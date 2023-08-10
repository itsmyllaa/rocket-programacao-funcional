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

//Stateless
let numb = 2;

//Stateful function
function square() {
    return number * number
}
number = square()

//Stateless function
const square = n => n * n;

//Caracteristica das funções
const random = (number, Math) =>
Math.floor(Math.random() * number);

//recursive
//Find the factorial of a number
const factorial = x => {
    //if number is 0
    if (x === 0){
        return 1;
    }
    return x * factorial(x - 1);
}

//Função Impura

//Exemplo 1: está dependendo de dado externo
// Que não foi passado como parâmetro
function calculateCircumference(radius){
    return Math.PI * (radius + radius)
}

//Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Carmada',
    age: 'jovem'
}
function changeName(name) {
    person.name = name 
}
//Função pura

//Exemplo 1 
const calculateCircumference = function(pi, radius) {
    return pi * (radius + radius)
}
//Com arrow function
const calculateCircumference = (pi, radius) =>
pi * (radius + radius)

//Exemplo 2
const changePersonalName = (person, name) => 
{person, name}

//First Class Function
const sayMyName = () => console.log('Mayk')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))

//Higher-order function
//Exemplos com .map() JS

const numbers = [2, 4, 8, 16]

const square = n => n * n 

const squaredNumber = numbers.map(square)

//Exemplo de um retorno de função
//(currying ou aplicação parcial de função)

const pause = wait => fn => setTimeout(fn, wait)

pause(600)( () => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1000ms')) 

//Composição de funções

const people = ['Rafa, Diego, Dani, Rod']
const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())