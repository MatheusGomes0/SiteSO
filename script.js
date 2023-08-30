
const infoSections = document.querySelectorAll('.info');
const windowHeight = window.innerHeight;


function isSectionInView(section) {
    const rect = section.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= windowHeight);
}


function showVisibleSections() {
    infoSections.forEach(section => {
        if (isSectionInView(section)) {
            section.classList.add('active');
        }
    });
}


window.addEventListener('scroll', showVisibleSections);

window.addEventListener('load', showVisibleSections);


let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000); // Troque a imagem a cada 2 segundos (2000 milissegundos)
}

showSlides();



