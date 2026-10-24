const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');

const cardFlip = new Audio('imgs/flip.mp3');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();

        cardFlip.currentTime = 0;
        cardFlip.play().catch(err => console.log("flip audio error:", err));

        document.querySelector('.card.active')?.classList.remove('active');

        card.classList.add('active');
        overlay.classList.add('active');
    });
});

overlay.addEventListener('click', () => {
    cardFlip.currentTime = 0;
    cardFlip.play().catch(err => console.log("flip audio error:", err));
    
    document.querySelector('.card.active')?.classList.remove('active');
    overlay.classList.remove('active');
});