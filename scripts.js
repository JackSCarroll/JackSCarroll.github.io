 const swup = new Swup(); 

 function initializeEventListeners() {
     //
     // Background Parallax Logic
     //
     const parallaxContainer = document.getElementById('parallax-container');
     if (parallaxContainer) {
         document.addEventListener('mousemove', (event) => {
             const moveX = (event.clientX / window.innerWidth) * 20 - 10;
             const moveY = (event.clientY / window.innerHeight) * 20 - 10;
             parallaxContainer.style.backgroundPosition = `${moveX}px ${moveY}px`;
         });
     }
 
     const html = document.documentElement;
     html.classList.remove('is-animating');
 
     //
     // Mobile Hamburger Menu Logic
     //
     const hamMenu = document.getElementById('ham-menu');
     const offScreenMenu = document.getElementById('off-screen-menu');
     if (hamMenu && offScreenMenu) {
         hamMenu.addEventListener('click', () => {
             console.log('click');
             hamMenu.classList.toggle('active');
             offScreenMenu.classList.toggle('active');
         });
     }
 }
 
 document.addEventListener('DOMContentLoaded', () => {
     initializeEventListeners();
 });
 
 // Reinitialize event listeners after Swup content replacement
 swup.hooks.on('content:replace', () => {
     initializeEventListeners();
 });


