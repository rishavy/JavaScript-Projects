document.addEventListener("DOMContentLoaded", function() {
  function generateOrderNumber() {
      return Math.floor(Math.random() * 1000000);
  }

  function displayFoodImages() {
      var foodImages = {
          "Whopper": "./assets/whopper.png",
          "Fries": "./assets/fries.png",
          "Onion Rings": "./assets/onion rings.jpg",
          "Coffee": "./assets/coffee.jpg",
          "Drink": "./assets/drink.jpg",
          "Combo": "./assets/combo.png"
      };

      var foodImageContainer = document.getElementById("foodImage");
      foodImageContainer.innerHTML = "";

      var selectedFoods = document.querySelectorAll("input[name='food']:checked");
      if (selectedFoods.length === 0) {
          alert("Please select at least one item");
          return;
      }

      var orderNumber = generateOrderNumber();

      selectedFoods.forEach(function(food) {
          var foodName = food.value;
          var img = document.createElement("img");
          img.src = foodImages[foodName];
          img.alt = foodName;
          foodImageContainer.appendChild(img);
      });

      var loadingMsg = document.getElementById("loading");
      loadingMsg.classList.remove("hidden");

      setTimeout(function() {
          loadingMsg.classList.add("hidden");

          var orderDetails = document.getElementById("orderDetails");
          orderDetails.classList.remove("hidden");

          var orderID = document.getElementById("orderID");
          orderID.textContent = "Order ID: BK" + orderNumber;
      }, 2000);
  }

  var orderBtn = document.getElementById("orderBtn");
  orderBtn.addEventListener("click", function() {
      displayFoodImages();
  });
});
