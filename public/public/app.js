function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });

    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

    document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

// Grab HTML Elements
const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});