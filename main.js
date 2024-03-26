
document.getElementById('checkbox').addEventListener('change', function(event) {
    if(event.target.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}


function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Obtém o tema salvo no localStorage ou usa o tema padrão 'light'
    changeTheme(savedTheme);
    // Atualiza os botões para refletir o tema ativo
    document.querySelectorAll('.theme-selector button').forEach(button => { // Seleciona todos os botões do seletor de tema
        if (button.textContent.trim().toLowerCase() === savedTheme) {   // Verifica se o botão tem o mesmo texto que o tema ativo
            button.disabled = true; // Desabilita o botão do tema ativo
        } else {
            button.disabled = false; // Habilita o botão do tema não ativo
        }
    });
}

document.addEventListener("DOMContentLoaded", function() { // Aguarda o carregamento do DOM
    applySavedTheme(); 

    document.querySelectorAll('.theme-selector button').forEach(button => { // Seleciona todos os botões do seletor de tema
        button.addEventListener('click', function() {
            const theme = localStorage.getItem('theme') || 'light';
            changeTheme(theme);
            applySavedTheme(); // Reaplica o tema e atualiza os botões
        });
    });
});

document.addEventListener("DOMContentLoaded", function() { // Aguarda o carregamento do DOM
    // Função para filtrar a galeria
    function filterGallery(category) {
        const items = document.querySelectorAll('#galleryItems .item'); // Seleciona todos os itens da galeria
        items.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) { // Verifica se o item corresponde ao filtro
                item.style.display = 'block'; // Mostra o item se corresponder ao filtro
            } else {
                item.style.display = 'none'; // Esconde o item se não corresponder
            }
        });
    }

    // Manipulação de eventos para os botões de filtro
    const filterButtons = document.querySelectorAll('#galleryFilters .filter-btn'); // Seleciona todos os botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() { // Adiciona um evento de clique a cada botão
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');
            // Filtra a galeria com base no atributo 'data-filter' do botão
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });

    // Chama a função de filtragem inicialmente para aplicar o filtro 'all'
    filterGallery('all');
});


