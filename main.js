const form = document.getElementById('form-agenda');
const agenda= [];
const notas = [];



let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputcontato = document.getElementById('contato');
    const inputtelefone = document.getElementById('telefone');

    if (agenda.includes(inputcontato.value)) {
        alert(`O nome $(inputcontato.value} já foi inserido`);

    } else {

    agenda.push(inputcontato.value);
    notas.push(parseFloat(inputtelefone.value));

    let linha ='<tr>';
    linha += `<td>${inputcontato.value}</td>`;
    linha += `<td>${inputtelefone.value}</td>`;
    
    linha += `</tr>`;
    
    linhas += linha;
}
    inputcontato.value = '';
    inputtelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

