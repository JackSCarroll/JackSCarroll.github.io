
//container.addEventListener('animationend', () => {
//    container.classList.remove('apply-shake');
//});

//
// Main page console wiggle logic
//
const parallaxContainer = document.getElementById('parallax-container');
document.addEventListener('mousemove', (event) => {
    const moveX = (event.clientX / window.innerWidth) * 20 - 10;
    const moveY = (event.clientY / window.innerHeight) * 20 - 10;
    parallaxContainer.style.backgroundPosition = `${moveX}px ${moveY}px`;
});


//
// Mobile Hambuger Menu Logic
//
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});