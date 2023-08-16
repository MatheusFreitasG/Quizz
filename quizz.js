//Criamos uma variavel para pegar o id da resposta
const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');
const per1 = document.getElementById('p1');
const per2 = document.getElementById('p2');
const per3 = document.getElementById('p3');
const per4 = document.getElementById('p4');
const per5 = document.getElementById('p5');
const per6 = document.getElementById('p6');


//Criamos a função que v3erifica se a resposta é correta
//Resposta correta
const verificarResposta = (resposta, nquestao) => {
    if (resposta === 'a' && nquestao === '1'){
        resultado1.innerHTML = 'Resposta correta!';
        resultado1.style.color = 'green';
    }else if (resposta === 'a' && nquestao === '2'){
        resultado1.innerHTML = 'Resposta correta!';
        resultado1.style.color = 'green';
    }else if (resposta === 'a' && nquestao === '3'){
        resultado1.innerHTML = 'Resposta correta!';
        resultado1.style.color = 'green';
    }else if (resposta === 'a' && nquestao === '4'){
        resultado1.innerHTML = 'Resposta correta!';
        resultado1.style.color = 'green';
    }else if (resposta === 'a' && nquestao === '5'){
        resultado1.innerHTML = 'Resposta correta!';
        resultado1.style.color = 'green';
    }else{
        resultado1.innerHTML = 'Resposta incorreta!';
        resultado1.style.color = 'red';
    }

};

const proximaPergunta = (prox) => {
    if (prox === 'true'){
        per1.style.display = 'none';
        per2.style.display = 'block';
    }
}

const proximaPergunta2 = (prox) => {
    if (prox === 'true'){
        per2.style.display = 'none';
        per3.style.display = 'block';
    }
}

const proximaPergunta3 = (prox) => {
    if (prox === 'true'){
        per3.style.display = 'none';
        per4.style.display = 'block';
    }
}

const proximaPergunta4 = (prox) => {
    if (prox === 'true'){
        per4.style.display = 'none';
        per5.style.display = 'block';
    }
}

const proximaPergunta5 = (prox) => {
    if (prox === 'true'){
        per5.style.display = 'none';
        per6.style.display = 'block';
    }
}

