document.addEventListener('DOMContentLoaded', () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    const buttons = document.querySelectorAll('.order-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.flex');
            const price = parseFloat(productCard.querySelector('[data-product-price]').getAttribute('data-product-price'));

            totalQuantity++;
            totalPrice += price;

            document.getElementById('purchase-quantity').textContent = totalQuantity;
            document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
        });
    });
});






<!----------------------- JavaScript for Mobile Menu Toggle and Swiper -------------------------->
    
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Initialize Swiper
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000, // Delay between transitions (in ms)
                disableOnInteraction: false, // Keep autoplay after user interactions
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });