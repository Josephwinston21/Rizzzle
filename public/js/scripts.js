document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Example DOM manipulation: Adds a shadow effect to the header
    if (header) {
        header.style.boxShadow = '0px 4px 2px -2px gray';
    }

    // Example event listener: Attaches click events to all links in the footer
    const footerLinks = footer.querySelectorAll('a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`You clicked on ${e.target.textContent}`);
        });
    });

    // Example: Toggle mobile menu
        const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener("click", function () {
                document.querySelector(".navbar").classList.toggle("open");
            });
        }

    console.log('Rizzzle app initialized successfully!');
});



