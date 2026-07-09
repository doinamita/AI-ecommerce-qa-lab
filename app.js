const categoryCatalog = [
  {
    category: 'Accessories',
    emoji: '🎒',
    items: [
      ['backpack', 'QA Travel Backpack', 49.99, 'Durable backpack for testing sessions.'],
      ['stickers', 'QA Sticker Pack', 21.99, 'Sticker pack for laptops and notebooks.'],
      ['water-bottle', 'Hydration Test Bottle', 24.99, 'Reusable bottle for long testing days.'],
      ['desk-mat', 'Bug Bash Desk Mat', 34.99, 'Large desk mat for QA workflows.'],
      ['phone-stand', 'Mobile Test Phone Stand', 27.99, 'Phone stand for mobile validation.'],
      ['cable-organizer', 'Cable Organizer Kit', 22.99, 'Cable organizer for clean test setups.'],
      ['badge-holder', 'Release Badge Holder', 20.99, 'Badge holder for release events.'],
      ['travel-pouch', 'Device Travel Pouch', 29.99, 'Pouch for cables and test devices.'],
      ['screen-cleaner', 'Screen Cleaner Kit', 23.99, 'Cleaning kit for devices under test.'],
      ['usb-hub', 'Compact USB Hub', 39.99, 'USB hub for QA device labs.'],
      ['tablet-case', 'Tablet Testing Case', 32.99, 'Protective case for tablet testing.'],
      ['keyboard-cover', 'Keyboard Dust Cover', 25.99, 'Cover for keeping keyboards clean.'],
      ['mouse-pad', 'Precision Mouse Pad', 26.99, 'Mouse pad for precise workflows.'],
      ['camera-cover', 'Privacy Camera Cover', 20.99, 'Camera covers for test laptops.'],
      ['device-labels', 'Device Label Pack', 21.99, 'Labels for organizing test devices.'],
      ['storage-box', 'QA Storage Box', 36.99, 'Storage box for test accessories.'],
      ['charging-cable', 'Braided Charging Cable', 28.99, 'Durable cable for daily testing.'],
      ['portable-light', 'Portable Desk Light', 44.99, 'Small light for focused work.'],
      ['lanyard', 'Quality Team Lanyard', 20.99, 'Lanyard for QA events.'],
      ['cleaning-cloth', 'Microfiber Cleaning Cloths', 20.99, 'Cloths for screens and devices.']
    ]
  },
  {
    category: 'Clothing',
    emoji: '👕',
    items: [
      ['shirt', 'Automation T-Shirt', 19.99, 'Soft cotton t-shirt for QA engineers.'],
      ['hoodie', 'Quality Engineering Hoodie', 59.99, 'Warm hoodie for focused engineering days.'],
      ['jacket', 'Release Manager Jacket', 89.99, 'Light jacket for office and travel.'],
      ['cap', 'Bug Hunter Cap', 24.99, 'Cap for bug bash events.'],
      ['socks', 'Regression Socks', 20.99, 'Comfortable socks for long release days.'],
      ['sweatshirt', 'Test Strategy Sweatshirt', 54.99, 'Comfortable sweatshirt for planning sessions.'],
      ['polo', 'QA Lead Polo', 39.99, 'Professional polo for team meetings.'],
      ['beanie', 'Winter QA Beanie', 22.99, 'Warm beanie for cold mornings.'],
      ['raincoat', 'Cloud Testing Raincoat', 79.99, 'Raincoat for unpredictable weather.'],
      ['scarf', 'Sprint Planning Scarf', 29.99, 'Soft scarf for daily commute.'],
      ['gloves', 'Keyboard Gloves', 25.99, 'Light gloves for cold office days.'],
      ['vest', 'Exploratory Testing Vest', 69.99, 'Utility vest for travel days.'],
      ['pants', 'Comfort Work Pants', 64.99, 'Comfortable pants for office work.'],
      ['shorts', 'Summer QA Shorts', 34.99, 'Casual shorts for summer workdays.'],
      ['long-sleeve', 'API Testing Long Sleeve', 32.99, 'Long sleeve shirt for engineers.'],
      ['team-tee', 'Quality Team Tee', 21.99, 'Team t-shirt for QA events.'],
      ['training-shirt', 'Automation Training Shirt', 23.99, 'Shirt for workshop days.'],
      ['zip-hoodie', 'CI Pipeline Zip Hoodie', 74.99, 'Zip hoodie for engineering teams.'],
      ['fleece', 'Defect Triage Fleece', 84.99, 'Soft fleece for cold offices.'],
      ['casual-shirt', 'Daily Standup Shirt', 27.99, 'Casual shirt for daily work.']
    ]
  },
  {
    category: 'Footwear',
    emoji: '👟',
    items: [
      ['sneakers', 'Regression Sneakers', 79.99, 'Comfortable shoes for long release days.'],
      ['running-shoes', 'Sprint Running Shoes', 84.99, 'Light shoes for active days.'],
      ['office-shoes', 'Daily Standup Shoes', 69.99, 'Comfortable shoes for office days.'],
      ['boots', 'Production Support Boots', 94.99, 'Durable boots for winter commute.'],
      ['sandals', 'Summer Release Sandals', 34.99, 'Casual sandals for warm weather.'],
      ['slippers', 'Remote QA Slippers', 29.99, 'Comfortable slippers for remote work.'],
      ['walking-shoes', 'Exploratory Walking Shoes', 74.99, 'Shoes for long walks and testing days.'],
      ['training-shoes', 'Automation Training Shoes', 82.99, 'Shoes for active training sessions.'],
      ['loafers', 'Stakeholder Meeting Loafers', 88.99, 'Professional loafers for meetings.'],
      ['hiking-shoes', 'Bug Hunt Hiking Shoes', 98.99, 'Strong shoes for outdoor weekends.'],
      ['canvas-shoes', 'Casual Canvas Shoes', 44.99, 'Light shoes for everyday use.'],
      ['winter-boots', 'Cold Start Winter Boots', 96.99, 'Warm boots for cold mornings.'],
      ['rain-boots', 'Cloud Failure Rain Boots', 54.99, 'Rain boots for wet days.'],
      ['slip-ons', 'Quick Deploy Slip-ons', 39.99, 'Easy slip-on shoes.'],
      ['trail-shoes', 'Risk Analysis Trail Shoes', 92.99, 'Trail shoes for weekend trips.'],
      ['comfort-shoes', 'Focus Comfort Shoes', 72.99, 'Comfort shoes for long days.'],
      ['gym-shoes', 'Performance Test Gym Shoes', 68.99, 'Gym shoes for active routines.'],
      ['classic-shoes', 'Classic QA Shoes', 64.99, 'Classic everyday shoes.'],
      ['travel-shoes', 'Travel Regression Shoes', 78.99, 'Shoes for travel and commuting.'],
      ['light-sneakers', 'Lightweight Test Sneakers', 58.99, 'Light sneakers for everyday use.']
    ]
  },
  {
    category: 'Electronics',
    emoji: '🎧',
    items: [
      ['headphones', 'Focus Headphones', 99.99, 'Noise-reducing headphones for deep work.'],
      ['keyboard', 'Mechanical QA Keyboard', 89.99, 'Mechanical keyboard for writing test cases faster.'],
      ['mouse', 'Precision Test Mouse', 29.99, 'Lightweight mouse for daily QA workflows.'],
      ['charger', 'Fast USB-C Charger', 34.99, 'Fast charger for mobile testing devices.'],
      ['webcam', 'Video Call Webcam', 74.99, 'Webcam for remote collaboration.'],
      ['microphone', 'Standup Microphone', 64.99, 'Microphone for clear meetings.'],
      ['speaker', 'Desk Speaker', 44.99, 'Speaker for desk setup.'],
      ['power-bank', 'Mobile Testing Power Bank', 49.99, 'Power bank for device testing.'],
      ['monitor-light', 'Monitor Light Bar', 59.99, 'Light bar for monitor setup.'],
      ['wireless-mouse', 'Wireless QA Mouse', 42.99, 'Wireless mouse for flexible workflows.'],
      ['wireless-keyboard', 'Wireless Test Keyboard', 69.99, 'Wireless keyboard for clean desks.'],
      ['tablet-stand', 'Tablet Device Stand', 36.99, 'Stand for tablet testing.'],
      ['bluetooth-tracker', 'Device Tracker Tag', 28.99, 'Tracker for test devices.'],
      ['hdmi-adapter', 'HDMI Adapter', 26.99, 'Adapter for monitor setups.'],
      ['usb-adapter', 'USB-C Adapter', 24.99, 'Adapter for device connections.'],
      ['ethernet-adapter', 'Network Test Adapter', 31.99, 'Adapter for network validation.'],
      ['desk-fan', 'USB Desk Fan', 25.99, 'Small fan for desk comfort.'],
      ['smart-plug', 'Smart Plug', 33.99, 'Smart plug for device control.'],
      ['portable-ssd', 'Portable Test SSD', 94.99, 'Portable SSD for test files.'],
      ['charging-station', 'Device Charging Station', 87.99, 'Charging station for multiple devices.']
    ]
  },
  {
    category: 'Home Office',
    emoji: '🖥️',
    items: [
      ['notebook', 'Bug Bash Notebook', 22.99, 'Notebook for exploratory testing notes.'],
      ['mug', 'Release Day Coffee Mug', 24.99, 'Coffee mug for long regression sessions.'],
      ['desk-chair', 'Ergonomic Desk Chair', 98.99, 'Chair for comfortable workdays.'],
      ['desk-lamp', 'Focus Desk Lamp', 45.99, 'Desk lamp for focused work.'],
      ['whiteboard', 'Test Planning Whiteboard', 57.99, 'Whiteboard for planning test coverage.'],
      ['markers', 'Planning Marker Set', 20.99, 'Markers for whiteboard sessions.'],
      ['sticky-notes', 'Risk Analysis Sticky Notes', 21.99, 'Sticky notes for QA planning.'],
      ['planner', 'Sprint Planner', 27.99, 'Planner for sprint organization.'],
      ['pen-set', 'QA Pen Set', 20.99, 'Pen set for daily notes.'],
      ['document-holder', 'Requirement Document Holder', 32.99, 'Holder for documents and notes.'],
      ['desk-shelf', 'Desk Organizer Shelf', 48.99, 'Shelf for organizing workspace.'],
      ['foot-rest', 'Ergonomic Foot Rest', 39.99, 'Foot rest for better posture.'],
      ['monitor-stand', 'Monitor Stand', 52.99, 'Stand for improving monitor height.'],
      ['paper-tray', 'Document Paper Tray', 28.99, 'Tray for office documents.'],
      ['calendar', 'Release Calendar', 23.99, 'Calendar for release tracking.'],
      ['cork-board', 'QA Notes Cork Board', 35.99, 'Board for planning and reminders.'],
      ['desk-clock', 'Sprint Timer Desk Clock', 31.99, 'Clock for timeboxing sessions.'],
      ['bookend', 'Tech Bookend Set', 26.99, 'Bookend set for office shelves.'],
      ['storage-drawer', 'Office Storage Drawer', 62.99, 'Drawer for office supplies.'],
      ['ergonomic-cushion', 'Ergonomic Seat Cushion', 43.99, 'Cushion for comfortable seating.']
    ]
  }
];

const products = categoryCatalog.flatMap((group) =>
  group.items.map(([id, name, price, description], index) => ({
    id,
    name,
    price,
    description,
    category: group.category,
    emoji: group.emoji,
    rating: Number((4 + ((index % 10) * 0.1)).toFixed(1)),
    stock: index % 9 === 0 && id !== 'backpack' && id !== 'shirt' && id !== 'sneakers' && id !== 'headphones' ? 0 : 5 + (index % 12)
  }))
);

let cart = [];
let couponApplied = false;
let currentProducts = [...products];

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

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
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
  orderConfirmation.textContent = `Order placed successfully. Total paid: ${formatMoney(totals.total)}.`;
  orderConfirmation.classList.remove('hidden');
  cart = [];
  couponApplied = false;
  couponInput.value = '';
  couponMessage.textContent = '';
  checkoutForm.reset();
  clearCheckoutValidation();
  renderCart();
});

renderProducts();
renderCart();
