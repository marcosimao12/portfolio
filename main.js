
function changeTheme(theme) {
    const bodyClassList = document.body.classList;
    if (theme === 'dark') {
        bodyClassList.add("dark-theme");
    } else {
        bodyClassList.remove("dark-theme");
    }
    localStorage.setItem('theme', theme); // Salva a preferência de tema no localStorage
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    changeTheme(savedTheme);
    // Atualiza os botões para refletir o tema ativo
    document.querySelectorAll('.theme-selector button').forEach(button => {
        if (button.textContent.trim().toLowerCase() === savedTheme) {
            button.disabled = true; // Desabilita o botão do tema ativo
        } else {
            button.disabled = false; // Habilita o botão do tema não ativo
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    applySavedTheme();

    document.querySelectorAll('.theme-selector button').forEach(button => {
        button.addEventListener('click', function() {
            const theme = localStorage.getItem('theme') || 'light';
            changeTheme(theme);
            applySavedTheme(); // Reaplica o tema e atualiza os botões
        });
    });
});



function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('#galleryFilters .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterGallery(this.getAttribute('data-filter'));
        });
    });
});

