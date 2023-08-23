const infoSections = document.querySelectorAll('.info');
const windowHeight = window.innerHeight;

// Função para verificar se a seção está visível na janela
function isSectionInView(section) {
    const rect = section.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= windowHeight);
}

// Função para mostrar seções visíveis
function showVisibleSections() {
    infoSections.forEach(section => {
        if (isSectionInView(section)) {
            section.classList.add('active');
        }
    });
}

// Evento de rolagem
window.addEventListener('scroll', showVisibleSections);

// Mostrar as seções visíveis ao carregar a página
window.addEventListener('load', showVisibleSections);
