//website wasnt made by me btw
function toggleShowcase() {
    var showcaseSection = document.getElementById('showcase');
    if (showcaseSection.classList.contains('visible')) {
        showcaseSection.style.animation = 'fadeOutSlideOut 0.5s forwards'; 
        setTimeout(() => {
            showcaseSection.classList.remove('visible');
            showcaseSection.style.display = 'none'; 
        }, 500); 
    } else {
        showcaseSection.style.display = 'block'; 
        setTimeout(() => {
            showcaseSection.classList.add('visible'); 
        }, 10);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    function adjustStylesForMobile() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (width <= 768) {
            document.body.style.fontSize = '14px';
            var navElements = document.querySelectorAll('.navbar, .nav-links, .nav-links li');
            navElements.forEach(function(el) {
                el.style.width = '100%';
                el.style.textAlign = 'center';
            });
            var buttons = document.querySelectorAll('.btn');
            buttons.forEach(function(btn) {
                btn.style.width = '100%';
                btn.style.marginTop = '10px';
            });
        }

        if (width <= 480) {
            document.querySelector('.headline').style.fontSize = '1.5rem';
            var cards = document.querySelectorAll('.card');
            cards.forEach(function(card) {
                card.style.padding = '10px';
            });
        }
    }

    adjustStylesForMobile();
    window.onresize = adjustStylesForMobile;
});
