const personagens = [
    {
        id: 1,
        name: "Dipper Pines",
        type: "Human",
        description: "Um garoto inteligente e curioso de 12 anos que descobre um diário misterioso em Gravity Falls.",
        image: "assets/img/dipper.png"
    },
    {
        id: 2,
        name: "Mabel Pines",
        type: "Human",
        description: "A irmã gêmea de Dipper, sempre otimista, cheia de energia e apaixonada por suéteres.",
        image: "assets/img/mabel.png"
    },
    {
        id: 3,
        name: "Stanley Pines",
        type: "Human",
        description: "O tio-avô vigarista, mas amoroso, dono da 'Cabana do Mistério'.",
        image: "assets/img/stanley.png"
    },
    {
        id: 4,
        name: "Stanford Pines",
        type: "Human",
        description: "O irmão gêmeo perdido de Stan e o brilhante autor dos diários.",
        image: "assets/img/stanford.png"
    },
    {
        id: 5,
        name: "Soos Ramirez",
        type: "Human",
        description: "O adorável e atrapalhado faz-tudo que trabalha na Cabana do Mistério.",
        image: "assets/img/soos.png"
    },
    {
        id: 6,
        name: "Wendy Corduroy",
        type: "Human",
        description: "A adolescente legal e descontraída que trabalha na Cabana do Mistério e é a paixão de Dipper.",
        image: "assets/img/wendy.png"
    },
    {
        id: 7,
        name: "Bill Cipher",
        type: "Demon",
        description: "Um demônio dos sonhos interdimensional e o antagonista principal da série.",
        image: "assets/img/bill.png"
    },
    {
        id: 8,
        name: "Waddles",
        type: "Animal",
        description: "O adorável porquinho de estimação da Mabel.",
        image: "assets/img/waddles.png"
    },
    {
        id: 9,
        name: "Gideon Gleeful",
        type: "Human",
        description: "Uma criança vidente e rival do Tio Stan que busca poder desesperadamente.",
        image: "assets/img/gideao.png"
    },
    {
        id: 10,
        name: "Old Man McGucket",
        type: "Human",
        description: "O brilhante, mas excêntrico 'maluco' local de Gravity Falls.",
        image: "assets/img/mcgucket.png"
    }
];

const grade = document.getElementById('character-grid');
const campoBusca = document.getElementById('search-bar');
const selecaoFiltro = document.getElementById('filter-select');

function renderizarPersonagens(personagensParaRenderizar) {
    grade.innerHTML = '';
    
    if (personagensParaRenderizar.length === 0) {
        grade.innerHTML = 
        '<div class="no-results" id="no-results-message">Nenhum personagem encontrado.</div>';
        return;
    }

    personagensParaRenderizar.forEach(personagem => {
        const cartao = document.createElement('div');
        cartao.className = 'character-card';
        cartao.setAttribute('data-type', personagem.type);
        
        let tipoPt = personagem.type;
        if(personagem.type === 'Human') tipoPt = 'Humano';
        if(personagem.type === 'Demon') tipoPt = 'Demônio';
        if(personagem.type === 'Animal') tipoPt = 'Animal';

        cartao.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${personagem.image}" alt="${personagem.name}" class="character-image">
                    <h2 class="character-name">${personagem.name}</h2>
                    <div><span class="character-type">${tipoPt}</span></div>
                    <button class="flip-button">Veja a descrição</button>
                </div>
                <div class="card-back">
                    <h2 class="character-name">${personagem.name}</h2>
                    <p class="character-description">${personagem.description}</p>
                    <button class="flip-button">Voltar à frente</button>
                </div>
            </div>
        `;

        cartao.addEventListener('click', () => {
            cartao.classList.toggle('flipped');
        });

        grade.appendChild(cartao);
    });
}

function aplicarFiltro() {
    const termoBusca = campoBusca.value.toLowerCase();
    const tipoFiltro = selecaoFiltro.value;
    
    const personagensFiltrados = personagens.filter(personagem => {
        const correspondeBusca = personagem.name.toLowerCase().includes(termoBusca) || personagem.description.toLowerCase().includes(termoBusca);
        const correspondeTipo = tipoFiltro === 'All' || personagem.type === tipoFiltro;
        
        return correspondeBusca && correspondeTipo;
    });
    
    renderizarPersonagens(personagensFiltrados);
}

campoBusca.addEventListener('input', aplicarFiltro);
selecaoFiltro.addEventListener('change', aplicarFiltro);

renderizarPersonagens(personagens);
