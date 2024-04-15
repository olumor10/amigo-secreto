let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    
    if (nome == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    let listaNomes = document.getElementById('lista-amigos');
    
    if (amigos.includes(nome.toUpperCase())) {
         alert('Amigo já adicionado! Por Favor, adicione outro amigo.');
         return;
    }else{
        amigos.push(nome.toUpperCase());     
    }

    if (listaNomes.textContent == ''){
        listaNomes.textContent = nome;
    } else{
        listaNomes.textContent = listaNomes.textContent + ', '+nome;
    }
    document.getElementById('nome-amigo').value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}