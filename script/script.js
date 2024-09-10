document.addEventListener("DOMContentLoaded", function() {
    // Carrossel Simples
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    let counter = 0;
    const size = images[0].clientWidth;

    function moveToNextSlide() {
        if (counter >= images.length - 1) {
            counter = -1;
        }
        carouselSlide.style.transform = 'translateX(' + (-size * (++counter)) + 'px)';
    }

    setInterval(moveToNextSlide, 3000);

    // Validação de Formulário
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Por favor, insira um email válido.");
            event.preventDefault();
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    });
});
