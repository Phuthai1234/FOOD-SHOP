function addToCart(name, image, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = { name, image, price, quantity: 1 };

    let existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount(); // Cập nhật số lượng trên icon giỏ hàng
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let cartCountElement = document.getElementById('cart-count');

    if (totalQuantity > 0) {
        cartCountElement.textContent = totalQuantity;
        cartCountElement.style.display = 'block';
    } else {
        cartCountElement.style.display = 'none';
    }
  }

  function openCart() {
      window.location.href = "giohang.html";
  }

  window.onload = updateCartCount;