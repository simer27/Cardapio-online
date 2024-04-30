const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-Items");
const cartTotal = document.getElementById("cart-total");
const checkout = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");


cartBtn.addEventListener("click", function() {
  cartModal.style.display = "flex";
})

closeModalBtn.addEventListener("click", function() {
  cartModal.style.display = "none";
})

cartModal.addEventListener("click", function(event) {
  if (event.target=== cartModal) {
    cartModal.style.display = "none";
  }
})