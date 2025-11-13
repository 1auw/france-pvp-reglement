// Curseur personnalisé premium
document.addEventListener('DOMContentLoaded', function() {
    // Créer les éléments du curseur
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Suivre la position de la souris
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation fluide du curseur
    function animateCursor() {
        // Point suit directement
        dotX = mouseX;
        dotY = mouseY;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        // Outline suit avec un léger délai pour effet smooth
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Effet au hover sur éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .cat-btn, .rule-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.borderColor = 'rgba(192, 38, 211, 0.6)';
        });
        
        element.addEventListener('mouseleave', function() {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.borderColor = 'rgba(192, 38, 211, 0.3)';
        });
    });
});

// Gestion de la navigation entre les catégories
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.cat-btn');
    const ruleSections = document.querySelectorAll('.rules-section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Retirer la classe active de tous les boutons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            // Cacher toutes les sections
            ruleSections.forEach(section => section.classList.remove('active'));

            // Afficher la section correspondante
            const targetSection = document.getElementById(category);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll fluide vers le haut de la section
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Ajouter un effet de survol pour les cartes de règles
    const ruleCards = document.querySelectorAll('.rule-card');
    ruleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Gestion de la navigation par URL (optionnel)
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetButton = document.querySelector(`[data-category="${hash}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }

    // Mettre à jour l'URL lors du changement de catégorie
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            history.pushState(null, null, `#${category}`);
        });
    });
});

// Animation au scroll (optionnel - pour effet supplémentaire)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer toutes les cartes de règles
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.rule-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

