const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_articles_wbpb_dark.svg'
    image2.src = 'img/undraw_books_re_8gea_dark.svg'
    image3.src = 'img/undraw_signal_searching_re_yl8n_dark.svg'

}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.remove('fa-moon');
    image1.src = 'img/undraw_articles_wbpb_light.svg';
    image2.src = 'img/undraw_books_re_8gea_light.svg';
    image3.src = 'img/undraw_signal_searching_re_yl8n_light.svg';
}

function switchTheme(e){
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}


toggleSwitch.addEventListener('change',switchTheme )