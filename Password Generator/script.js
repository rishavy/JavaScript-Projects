const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-button");
const lengthInput = document.getElementById("length");
const includeNumericCheckbox = document.getElementById("includeNumeric");
const includeCharactersCheckbox = document.getElementById("includeCharacters");

// Function to generate a random password
const generatePass = () => {
  let newPass = "";
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numeric = "1234567890";
  let specialCharacters = "()[]<>&%@#";

  // Include numeric characters if checkbox is checked
  if (includeNumericCheckbox.checked) {
    characters += numeric;
  }

  // Include special characters if checkbox is checked
  if (includeCharactersCheckbox.checked) {
    characters += specialCharacters;
  }

  for (let i = 0; i < lengthInput.value; i++) {
    newPass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  passwordInput.value = newPass;
};

// Call the function to generate password on page load
generatePass();

// Copy Button Click Event Handle
copyBtn.addEventListener("click", () => {
    passwordInput.select();
    document.execCommand("copy");
    copyBtn.classList.remove("fas", "fa-copy"); // Remove copy icon
    copyBtn.classList.add("far", "fa-clipboard"); // Add clipboard icon
    copyBtn.disabled = true; // Disable the button after clicking
    setTimeout(() => {
      copyBtn.classList.remove("far", "fa-clipboard"); // Remove clipboard icon
      copyBtn.classList.add("fas", "fa-copy"); // Add copy icon
      copyBtn.disabled = false; // Enable the button after 5 seconds
    }, 5000);
  });

// Generate Button Click Event Handle
generateBtn.addEventListener("click", generatePass);
