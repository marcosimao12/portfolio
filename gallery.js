
document.getElementById('checkbox').addEventListener('change', function(event) { // Adiciona um evento de mudança ao checkbox
    if(event.target.checked) { // Verifica se o checkbox está marcado
        document.body.classList.add('dark-theme'); // Adiciona a classe 'dark-theme' ao corpo do documento
    } else { // Se o checkbox não estiver marcado
        document.body.classList.remove('dark-theme'); // Remove a classe 'dark-theme' do corpo do documento
    }
});



function toggleSidebar() { // Função para alternar a barra lateral
    var sidebar = document.querySelector('.sidebar'); // Seleciona a barra lateral
    var hamburger = document.getElementById('hamburger-icon'); // Seleciona o ícone do hambúrguer

    sidebar.classList.toggle('open'); // Adiciona ou remove a classe 'open' da barra lateral

    if (sidebar.classList.contains('open')) { // Verifica se a barra lateral está aberta
        hamburger.style.display = "none"; // Esconde o ícone do hambúrguer
    } else {
        hamburger.style.display = "block"; // Mostra o ícone do hambúrguer
    }

    document.addEventListener('click', function(event) { // Adiciona um evento de clique ao documento
        var sidebar = document.querySelector('.sidebar'); // Seleciona a barra lateral
        var hamburger = document.getElementById('hamburger-icon'); // Seleciona o ícone do hambúrguer
 
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) { // Verifica se o clique não foi dentro da barra lateral ou do ícone do hambúrguer
            sidebar.classList.remove('open'); // Remove a classe 'open' da barra lateral
            hamburger.style.display = 'block'; // Mostra o ícone do hambúrguer
        } 
    });
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


// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".item img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.forEach(function(image) {
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

window.onscroll = function() {showContactsOnScroll()};

function showContactsOnScroll() {
    // Verifica se o usuário chegou ao final da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Mostra a seção de contatos
        document.getElementById("contacts-section").style.display = "block";
    }
}

function showContacts() {
    document.getElementById("contacts-section").style.display = "block";
    // Opção para animar o scroll até a seção de contatos
    document.getElementById("contacts-section").scrollIntoView({behavior: 'smooth'});
}

document.querySelectorAll('.sidebar a').forEach(link => { // Seleciona todos os links da barra lateral  
    link.addEventListener('click', function(e) {        // Adiciona um evento de clique a cada link
        const target = document.querySelector(this.getAttribute('href')); // Seleciona o elemento de destino com base no atributo href do link
        if (target) {
            e.preventDefault(); // Impede o comportamento padrão de navegação
            // Se o target estiver oculto, exiba-o
            target.style.display = 'block';
            // Rola suavemente até o target
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
