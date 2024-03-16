const orderBtn = document.getElementById('orderBtn');
const loading = document.getElementById('loading');
const orderDetails = document.getElementById('orderDetails');
const foodImage = document.getElementById('foodImage');
const orderID = document.getElementById('orderID');

const menuItems = [
  { name: 'Whopper', image: './assets/whopper.png' },
  { name: 'Fries', image: './assets/fries.png' },
  { name: 'Onion Rings', image: './assets/onion_rings.png' },
  { name: 'Coffee', image: './assets/coffee.png' },
  { name: 'Soda', image: './assets/soda.png' },
  { name: 'Soft Drink', image: './assets/soft_drink.png' },
];

orderBtn.addEventListener('click', () => {
  loading.classList.remove('hidden');
  setTimeout(() => {
    const selectedItems = document.querySelectorAll('input[name="food"]:checked');
    if (selectedItems.length > 0) {
      const orderNumber = generateOrderNumber();
      const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
      const imageTag = document.createElement('img');
      imageTag.src = randomItem.image;
      imageTag.alt = randomItem.name;
      foodImage.innerHTML = '';
      foodImage.appendChild(imageTag);
      orderID.textContent = `Order ID: ${orderNumber}`;
      orderDetails.classList.remove('hidden');
    }
    loading.classList.add('hidden');
  }, getRandomSeconds());
});

function getRandomSeconds() {
  return Math.floor(Math.random() * 5000) + 2000;
}

function generateOrderNumber() {
  return 'BK' + Math.random().toString(36).substr(2, 9);
}
