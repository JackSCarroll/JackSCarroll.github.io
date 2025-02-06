 const swup = new Swup(); 

 function initializeEventListeners() {
    // FIRST LOAD ANIMATION
    const firstLoad = document.getElementById('body');
    window.onload = function() {D
        setTimeout(firstLoad.classList.remove('first-load'), 1000);
    }
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

    //
    // Image Modal Logic
    //
    const images = document.querySelectorAll('.gallery-item img');
    let imgSrc;
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    images.forEach((image) => {
        image.addEventListener('click', (event) => {
            imgSrc = event.target.src;
            modal.style.display = 'flex';
            modalImg.src = imgSrc;
            captionText.innerHTML = event.target.alt;
        });
    });

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
 }
 
 document.addEventListener('DOMContentLoaded', () => {
     initializeEventListeners();
 });
 
 // Reinitialize event listeners after Swup content replacement
 swup.hooks.on('content:replace', () => {
     initializeEventListeners();
 });


