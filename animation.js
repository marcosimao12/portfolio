/*document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animatedBox');
    let scale = 1;
    let direction = 1;

    function pulseBox() {
        if (scale >= 1.2) direction = -1; // Inverte a direção se muito grande
        else if (scale <= 1) direction = 1; // Inverte a direção se muito pequeno

        scale += direction * 0.01; // Ajusta a escala
        box.style.transform = `scale(${scale})`; // Aplica a escala
        
        requestAnimationFrame(pulseBox); // Continua a animação
    }

    pulseBox();
});
