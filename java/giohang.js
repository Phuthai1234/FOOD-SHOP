document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart");
    
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}đ</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}đ</td>
                <td><button onclick="removeFromCart(${index})">Xóa</button></td>
            `;
            cartItemsContainer.appendChild(row);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Tổng tiền: ${total}đ`;
    }

    window.removeFromCart = function(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    };

    clearCartButton.addEventListener("click", function() {
        localStorage.removeItem("cart");
        loadCart();
    });
    
    loadCart();
});
