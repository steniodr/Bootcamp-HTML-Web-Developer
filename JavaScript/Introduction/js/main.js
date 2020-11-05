var phrase = "Esse é somente um teste de como um arquivo JavaScript pode ser executado numa pagina HTML. Em um arquivo js";

let num1 = 10;
let num2 = 15;

console.log(phrase);
console.log(phrase.replace('js', '"main.js"'));

console.log(`Soma de duas variaveis: ${num1 + num2}.`);

let name = "Stenio";
let surname = "Dias Rapchan";

alert(`Nome completo: ${name + " " + surname}.`);

let list = ['HTML', 'CSS'];
list.push('JavaScript');
list.push('Bugs');
list.pop();

console.log(list);
console.log(list.join(" | "));

let knowlegde = [{
    habilidade: 'HTML',
    nivel: 'Iniciante'
}, {
    habilidade: 'javascript',
    nivel: 'Intermediário'
}];

console.log(knowlegde);

let idade = prompt('Qual a sua idade?');

if (idade >= 18) {
    alert('Maior de idade');
}
else{
    alert('Menor de idade');
}

console.log('Testando While:');
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}

console.log('Testando For:');
for(count = 5; count >= 0; count--){
    console.log(count);
}

let date = new Date();
alert('Dia de hoje: ' + date.toLocaleDateString());

function sum(n1, n2){
    return n1 + n2;
}
console.log(sum(10, 5));

function setReplace(phrase, name, new_name){
    return phrase.replace(name, new_name);
}
console.log(setReplace('Olar pessoas', 'Olar', 'Olá'));

function verifyDate(date){
    var valid;
    var today = new Date().toLocaleDateString();
    if (date == today){
        valid = "A resposta esta correta! *voz do Silvio Santos";
    } else {
        valid = "Errooooou!! *voz do Faustão";
    }
    return valid;
}

todayDate = prompt("Qual a data de hoje (DD/MM/YYYY)?")
console.log(verifyDate(todayDate))

function clicked(){
    alert("Obrigado por clicar aqui!");
    let button = document.getElementById('button_test');
    button.innerHTML = 'Clicado';
    button.style.display = 'none';
    document.getElementById('button_dio').style.visibility = "visible";
    // button.style.visibility = 'hideen';
}
function goToDIO(){
    window.open('https://digitalinnovation.one/');
    // window.location.href = 'https://digitalinnovation.one/' //Same tab
}
function changeText(elem) {
    elem.innerHTML = "<b>Hmmm que rebelde, gostei de você!<b>";
}
function backText(elem) {
    setTimeout(()=>{
        elem.innerHTML = "Não passe o mouse aqui!!!"
    }, 1000)
}
function pageLoad(){
    alert("Pagina quentinha saindo!")
}
function changed(elem){
    console.log("Otima escolha... Opção " + elem.value);
}