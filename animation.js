document.addEventListener('DOMContentLoaded', () => {
    // Exemplo simples de animação
    const box = document.getElementById('animatedBox');
    let angle = 0;

    function rotateBox() {
        angle = (angle + 2) % 360;
        box.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotateBox);
    }

    rotateBox();
});
