/*
let teste = function(msg) {
    return "hello " +msg

}
*/

let {soma, multiplica} = require('./lib.js')

let calc = (func, x1, x2) => {
    return (func, x1, x2) * 2;
}

console.log(calc(soma,2,3))

/*
console.log(soma(20,40))
*/

/*
let obj =(
    nome: "andre",
    idade = 22,
    cor = "azul",
    soma: function(a, b){
        return a + b
    },
    subtrai: function(a, b) {
        return
    },
    multiplica: function(a, b)
)
*/