const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color){
    image1.src = `img/undraw_articles_wbpb_${color}.svg`
    image2.src = `img/undraw_books_re_8gea_${color}.svg`
    image3.src = `img/undraw_signal_searching_re_yl8n_${color}.svg`
}

function toggleDarkLightMode (isLight){
    nav.style.backgroundColor = isLight ?'rgb(255 255 255 / 50%)': 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = isLight ?'rgb(0 0 0 /50%)' :'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ?'Light Mode': 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') :imageMode('dark');
}

function switchTheme(e){
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(true);
    }
}

toggleSwitch.addEventListener('change',switchTheme )

// check local storage
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    document.documentElement.setAttribute('data-them', currentTheme);

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}