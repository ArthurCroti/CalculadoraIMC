const calcular = document.getElementById('Calcular');


function imc() {
    const nome = document.getElementById('Nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('Resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificaco = '';
        if (valorIMC < 18.5) {
            classificaco = 'Abaixo do peso'
        } else if (valorIMC < 25) {
            classificaco = ' com peso ideal Parabens!!!'
        } else if (valorIMC < 30) {
            classificaco = 'levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificaco = 'obesidade grau 1'
        } else if (valorIMC < 40) {
            classificaco = 'obesidade gau 2'
        } else {
            classificaco = 'com obesidade grau 3. Cuidado!!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificaco}`;
        





    } else {
        alert('Preencha todos os campos!')
    }
}
calcular.addEventListener('click', imc)