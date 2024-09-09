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