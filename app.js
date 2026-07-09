let products = [];
let currentProducts = [];

let cart = [];
let couponApplied = false;

const STORAGE_KEYS = {
  cart: 'ai-ecommerce-cart',
  coupon: 'ai-ecommerce-coupon',
  lastOrder: 'ai-ecommerce-last-order'
};

const productGrid = document.getElementById('product-grid');
const emptyProducts = document.getElementById('empty-products');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const categorySelect = document.getElementById('category');
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
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const addressError = document.getElementById('address-error');
const checkoutErrorSummary = document.getElementById('checkout-error-summary');
const lastOrderSummary = document.getElementById('last-order-summary');

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}


function saveCartToStorage() {
  const savedCart = cart.map((item) => ({
    id: item.id,
    quantity: item.quantity
  }));

  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(savedCart));
}

function restoreCartFromStorage() {
  const savedCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');

  cart = savedCart
    .map((savedItem) => {
      const product = products.find((item) => item.id === savedItem.id);

      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity: savedItem.quantity
      };
    })
    .filter(Boolean);

  couponApplied = localStorage.getItem(STORAGE_KEYS.coupon) === 'QA10';

  if (couponApplied) {
    couponInput.value = 'QA10';
    couponMessage.textContent = 'Coupon QA10 applied.';
  }

  renderCart();
  renderLastOrder();
}

function saveCouponToStorage() {
  if (couponApplied) {
    localStorage.setItem(STORAGE_KEYS.coupon, 'QA10');
  } else {
    localStorage.removeItem(STORAGE_KEYS.coupon);
  }
}

function saveLastOrder(order) {
  localStorage.setItem(STORAGE_KEYS.lastOrder, JSON.stringify(order));
}

function renderLastOrder() {
  const savedOrder = localStorage.getItem(STORAGE_KEYS.lastOrder);

  if (!savedOrder) {
    lastOrderSummary.classList.add('hidden');
    lastOrderSummary.textContent = '';
    return;
  }

  const order = JSON.parse(savedOrder);
  lastOrderSummary.textContent = `Last order: ${order.itemCount} item(s), total ${order.total}.`;
  lastOrderSummary.classList.remove('hidden');
}

async function loadProducts() {
  try {
    const response = await fetch('./data/products.json');

    if (!response.ok) {
      throw new Error('Product data request failed');
    }

    products = await response.json();
    currentProducts = [...products];
    restoreCartFromStorage();
    applyFilters();
  } catch (error) {
    productGrid.innerHTML = '';
    emptyProducts.textContent = 'Product data could not be loaded.';
    emptyProducts.classList.remove('hidden');
    console.error('Failed to load product data', error);
  }
}

function renderProducts() {
  productGrid.innerHTML = '';

  currentProducts.forEach((product) => {
    const card = document.createElement('article');
    const isOutOfStock = product.stock === 0;

    card.className = 'product-card';
    card.setAttribute('data-testid', `product-card-${product.id}`);

    card.innerHTML = `
      <div class="emoji" aria-hidden="true">${product.emoji}</div>
      <p class="product-meta">${product.category} · ⭐ ${product.rating}</p>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="stock ${isOutOfStock ? 'out-of-stock' : ''}">
        ${isOutOfStock ? 'Out of stock' : `${product.stock} items left`}
      </p>
      <p class="price" data-testid="price-${product.id}">${formatMoney(product.price)}</p>
      <button
        class="primary"
        data-testid="add-${product.id}"
        data-product-id="${product.id}"
        ${isOutOfStock ? 'disabled' : ''}
      >
        ${isOutOfStock ? 'Out of stock' : 'Add to cart'}
      </button>
    `;

    productGrid.appendChild(card);
  });

  emptyProducts.classList.toggle('hidden', currentProducts.length > 0);
}

function applyFilters() {
  const search = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  currentProducts = products.filter((product) => {
    const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(search);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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

  if (!product || product.stock === 0) {
    return;
  }

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  cartPanel.classList.add('open');
  renderCart();
  saveCartToStorage();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
  saveCartToStorage();
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
    couponInput.value = 'QA10';
    couponMessage.textContent = 'Coupon QA10 applied: 10% discount.';
  } else {
    couponApplied = false;
    couponMessage.textContent = 'Invalid coupon code.';
  }

  renderCart();
  saveCouponToStorage();
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
categorySelect.addEventListener('change', applyFilters);
cartToggle.addEventListener('click', () => cartPanel.classList.add('open'));
cartClose.addEventListener('click', () => cartPanel.classList.remove('open'));
applyCouponButton.addEventListener('click', applyCoupon);
checkoutOpen.addEventListener('click', () => {
  clearCheckoutValidation();
  checkoutModal.classList.remove('hidden');
});
checkoutClose.addEventListener('click', () => {
  clearCheckoutValidation();
  checkoutModal.classList.add('hidden');
});

function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.classList.toggle('hidden', !message);
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function clearCheckoutValidation() {
  setFieldError(nameInput, nameError, '');
  setFieldError(emailInput, emailError, '');
  setFieldError(addressInput, addressError, '');
  checkoutErrorSummary.textContent = '';
  checkoutErrorSummary.classList.add('hidden');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateCheckoutForm() {
  clearCheckoutValidation();

  let isValid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();

  if (cart.length === 0) {
    checkoutErrorSummary.textContent = 'Cannot place an order with an empty cart.';
    checkoutErrorSummary.classList.remove('hidden');
    isValid = false;
  }

  if (!name) {
    setFieldError(nameInput, nameError, 'Full name is required.');
    isValid = false;
  }

  if (!email) {
    setFieldError(emailInput, emailError, 'Email is required.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    setFieldError(emailInput, emailError, 'Enter a valid email address.');
    isValid = false;
  }

  if (!address) {
    setFieldError(addressInput, addressError, 'Address is required.');
    isValid = false;
  } else if (address.length < 10) {
    setFieldError(addressInput, addressError, 'Address must be at least 10 characters.');
    isValid = false;
  }

  return isValid;
}

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateCheckoutForm()) {
    return;
  }

  const totals = calculateTotals();
  const lastOrder = {
    itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    total: formatMoney(totals.total),
    createdAt: new Date().toISOString()
  };

  orderConfirmation.textContent = `Order placed successfully. Total paid: ${formatMoney(totals.total)}.`;
  orderConfirmation.classList.remove('hidden');
  cart = [];
  couponApplied = false;
  couponInput.value = '';
  couponMessage.textContent = '';
  checkoutForm.reset();
  clearCheckoutValidation();
  renderCart();
  saveCartToStorage();
  saveCouponToStorage();
  saveLastOrder(lastOrder);
  renderLastOrder();
});

loadProducts();
renderCart();
