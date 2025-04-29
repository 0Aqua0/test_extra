

const cards = document.querySelectorAll('.card');

    function scaleCard(card, scale) {
        const elements = card.querySelectorAll('.card-img, .card-title, .btn-primary');
        elements.forEach(element => {
            element.style.transform = `scale(${scale})`;
        });
    }

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            scaleCard(card, 0.98);
        });

        card.addEventListener('mouseleave', () => {
            scaleCard(card, 1);
        });
    });