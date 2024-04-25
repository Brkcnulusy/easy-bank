const easyBank = (function () {

    // Variables
    const targetImage = document.querySelector('.js-target-image');
    const navbar = document.querySelector('.js-navbar');




    // Event Listeners
    const _eventListeners = function () {
        targetImage.addEventListener('click', _openMenu);
    }


    // FunC

    const _openMenu = function () {
        navbar.classList.add('active');
        if(targetImage.src == 'http://127.0.0.1:5500/assets/images/icon-hamburger.svg') {
            targetImage.src = 'http://127.0.0.1:5500/assets/images/icon-close.svg';
            navbar.classList.add('active');
        } else {
            targetImage.src = 'http://127.0.0.1:5500/assets/images/icon-hamburger.svg';
            navbar.classList.remove('active');
        }
    }


    return {
        init: function () {
            _eventListeners();
        }
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    easyBank.init();
})