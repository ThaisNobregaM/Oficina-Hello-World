var titulo = document.querySelector("h2")
console.log(titulo)
var input = document.querySelector("input")
console.log(input)
var btn = document.querySelector("button")
console.log(button)
function cliquei(){
    event.preventDefault()
    titulo.innerHTML=input.value
}