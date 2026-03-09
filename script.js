document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountSpan = document.getElementById('cart-count');
    let cartItemCount = 0; // In a real app, this would come from local storage or a server

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            const productName = event.target.dataset.productName;

            // Basic alert for demonstration
            alert(`"${productName}" added to cart! (Product ID: ${productId})`);

            // Update cart count (front-end only for this example)
            cartItemCount++;
            cartCountSpan.textContent = cartItemCount;

            // In a real application, you would:
            // 1. Send an AJAX request to your backend to add the item to the user's cart
            // 2. Update a global state management system (e.g., Redux, Vuex)
            // 3. Store cart data in localStorage if the user isn't logged in
            // 4. Provide visual feedback (e.g., a small pop-up, item flying to cart icon)
            console.log(`Product added: ${productName} (ID: ${productId})`);
        });
    });

    // Smooth scrolling for anchor links (optional, but improves UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You could add more interactive elements here, e.g.:
    // - Image sliders/carousels
    // - Product quick-view modals
    // - Form validations
    // - Dynamic content loading
});