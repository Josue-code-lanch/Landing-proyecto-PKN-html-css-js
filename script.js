document.addEventListener("mousemove", function (event) {
    const fondo = document.querySelector('body')
    const x = (event.clientX / window.innerWidth) * 20 - 20;
    const y = (event.clientY / window.innerHeight) * 20 - 20;
    fondo.style.backgroundPosition = x + '% ' + y + '%';
})