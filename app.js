const products = [
  { id: 'backpack', name: 'QA Travel Backpack', price: 49.99, emoji: '🎒', description: 'Durable backpack for testing sessions.' },
  { id: 'shirt', name: 'Automation T-Shirt', price: 19.99, emoji: '👕', description: 'Soft cotton t-shirt for QA engineers.' },
  { id: 'sneakers', name: 'Regression Sneakers', price: 79.99, emoji: '👟', description: 'Comfortable shoes for long release days.' },
  { id: 'headphones', name: 'Focus Headphones', price: 99.99, emoji: '🎧', description: 'Noise-reducing headphones for deep work.' }
];

let cart = [];
let couponApplied = false;
let currentProducts = [...products];

const productGrid = document.getElementById('product-grid');
const emptyProducts = document.getElementById('empty-products');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const cartPanel = document.getElementById('cart-panel');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const emptyCart = document.getElementById('empty-cart');
const cartCount = document.getElementById('cart-count');
const subtotalElement = document.getElementById('subtotal');
const discountElement = document.getElementById('discount');
const totalElement = document.getElementById('total');
const couponInput = document.getElementById('coupon');
const couponMessage = document.getElementById('coupon-message');
const applyCouponButton = document.getElementById('apply-coupon');
const checkoutOpen = document.getElementById('checkout-open');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutClose = document.getElementById('checkout-close');
const checkoutForm = document.getElementById('checkout-form');
const orderConfirmation = document.getElementById('order-confirmation');

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function renderProducts() {
  productGrid.innerHTML = '';
  currentProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-testid', `product-card-${product.id}`);
    card.innerHTML = `
      <div class="emoji" aria-hidden="true">${product.emoji}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price" data-testid="price-${product.id}">${formatMoney(product.price)}</p>
      <button class="primary" data-testid="add-${product.id}" data-product-id="${product.id}">Add to cart</button>
    `;
    productGrid.appendChild(card);
  });

  emptyProducts.classList.toggle('hidden', currentProducts.length > 0);
}

function applyFilters() {
  const search = searchInput.value.trim().toLowerCase();
  currentProducts = products.filter((product) => product.name.toLowerCase().includes(search));

  if (sortSelect.value === 'price-asc') {
    currentProducts.sort((a, b) => a.price - b.price);
  }

  if (sortSelect.value === 'price-desc') {
    currentProducts.sort((a, b) => b.price - a.price);
  }

  renderProducts();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  cartPanel.classList.add('open');
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function calculateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  return { subtotal, discount, total };
}

function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.setAttribute('data-testid', `cart-item-${item.id}`);
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>Qty: ${item.quantity}</p>
      </div>
      <div>
        <p>${formatMoney(item.price * item.quantity)}</p>
        <button class="link-button" data-testid="remove-${item.id}" data-remove-id="${item.id}">Remove</button>
      </div>
    `;
    cartItems.appendChild(row);
  });

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = String(count);
  emptyCart.classList.toggle('hidden', cart.length > 0);
  checkoutOpen.disabled = cart.length === 0;

  const totals = calculateTotals();
  subtotalElement.textContent = formatMoney(totals.subtotal);
  discountElement.textContent = formatMoney(totals.discount);
  totalElement.textContent = formatMoney(totals.total);
}

function applyCoupon() {
  const coupon = couponInput.value.trim().toUpperCase();

  if (coupon === 'QA10') {
    couponApplied = true;
    couponMessage.textContent = 'Coupon QA10 applied: 10% discount.';
  } else {
    couponApplied = false;
    couponMessage.textContent = 'Invalid coupon code.';
  }

  renderCart();
}

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-product-id]');
  if (button) {
    addToCart(button.dataset.productId);
  }
});

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-remove-id]');
  if (button) {
    removeFromCart(button.dataset.removeId);
  }
});

searchInput.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);
cartToggle.addEventListener('click', () => cartPanel.classList.add('open'));
cartClose.addEventListener('click', () => cartPanel.classList.remove('open'));
applyCouponButton.addEventListener('click', applyCoupon);
checkoutOpen.addEventListener('click', () => checkoutModal.classList.remove('hidden'));
checkoutClose.addEventListener('click', () => checkoutModal.classList.add('hidden'));

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const totals = calculateTotals();
  orderConfirmation.textContent = `Order placed successfully. Total paid: ${formatMoney(totals.total)}.`;
  orderConfirmation.classList.remove('hidden');
  cart = [];
  couponApplied = false;
  couponInput.value = '';
  couponMessage.textContent = '';
  renderCart();
});

renderProducts();
renderCart();
