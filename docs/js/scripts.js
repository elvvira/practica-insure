const headerNavElement = document.getElementById ('header__nav');
const headerIconElement = document.getElementById ('header__icon')

headerIconElement.addEventListener('click', (event) => {
    headerNavElement.classList.toggle('header__nav--show');



 
});

headerIconElement.addEventListener('click', (event) =>{
    if (event.target.dataset.image === 'hamburger'){
        event.target.src = 'assets/images/icon-close.svg';
        event.target.dataset.image = 'close'
    }
    else {
        event.target.src = 'assets/images/icon-hamburger.svg';
        event.target.dataset.image = 'hamburger';
    }
});

