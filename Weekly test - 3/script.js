let openShopping = document.querySelector('.shopping');
let clearShopping = document.querySelector('.clearShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// -------------------------------
  
// ---------------------------------

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
// closShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

clearShopping.addEventListener('click', () => {
    listCards = []; // Clear the cart items
    total.innerText = 0; // Reset total price to 0
    quantity.innerText = 0; // Reset quantity to 0
    reloadCard(); // Update the cart display
});

let products = [
    {
        id: 1,
        name: 'Happy',
        image: '1.png',
        price: 599
    },
    {
        id: 2,
        name: 'Best of Luck',
        image: '2.png',
        price: 1111
    },
    {
        id: 3,
        name: 'Engel',
        image: '3.png',
        price: 609
    },
    {
        id: 4,
        name: 'Pirate',
        image: '4.png',
        price: 1989
    },
    {
        id: 5,
        name: 'fire',
        image: '5.png',
        price: 791
    },
    {
        id: 6,
        name: 'Think',
        image: '6.png',
        price: 669
    },
    {
        id: 7,
        name: 'Sleep',
        image: '7.png',
        price: 999
    },
    {
        id: 8,
        name: 'Devil',
        image: '8.png',
        price: 888
    },
    {
        id: 9,
        name: 'Money',
        image: '9.png',
        price: 9999
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';

    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}