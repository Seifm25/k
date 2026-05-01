let lightMode = localStorage.getItem('lightMode'); 
const themeSwitch = document.getElementById('theme-switch');

const enablelightMode = () => {
    document.body.classList.add('lightMode');
    localStorage.setItem('lightMode', 'active');
}

const disablelightMode = () => {
    document.body.classList.remove('lightMode');
    localStorage.setItem('lightMode', null);
}

if (lightMode === "active") enablelightMode();

themeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightMode');
    lightMode !== "active" ? enablelightMode() : disablelightMode();
});