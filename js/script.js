document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.link-card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // e.preventDefault();

            // Efeito visual de clique "apertando"
            this.style.transform = 'scale(0.98)';

            setTimeout(() => {
                // Remove o inline style para voltar ao CSS original (hover)
                this.style.transform = '';
            }, 100);
        });
    });
});