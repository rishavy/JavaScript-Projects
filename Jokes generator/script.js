let jokeButton = document.getElementById("joke-button");
let jokeBox = document.getElementById("joke-text");
let loaderContainer = document.querySelector(".loaderContainer");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
jokeBox.style.display = "";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

jokeButton.addEventListener("click", () => {
  loaderContainer.style.display = "flex";
  jokeBox.style.display = "none";
  async function fetchJoke() {
    try {
      jokeButton.disabled = true;
      let response = await fetch(apiURL, options);
      let data = await response.json();
      jokeBox.innerText = data[0].joke;
      jokeButton.disabled = false;
      jokeBox.style.display = "block";
      loaderContainer.style.display = "none";
    } catch (error) {
      console.log(error);
      jokeButton.disabled = false;
      jokeBox.innerText = "Something went wrong";
      loaderContainer.style.display = "none";
      jokeBox.style.display = "block";
    }
  }
  fetchJoke();
});
