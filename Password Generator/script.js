const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-button");
const lengthInput = document.getElementById("length");
const includeLowercaseCheckbox = document.getElementById("includeLowercase");
const includeUppercaseCheckbox = document.getElementById("includeUppercase");
const includeNumericCheckbox = document.getElementById("includeNumeric");
const includeCharactersCheckbox = document.getElementById("includeCharacters");

const generatePass = () => {
  let newPass = "";
  let characters = "";

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (includeLowercaseCheckbox.checked) {
    characters += lowercase;
  }
  if (includeUppercaseCheckbox.checked) {
    characters += uppercase;
  }
  if (includeNumericCheckbox.checked) {
    characters += numeric;
  }
  if (includeCharactersCheckbox.checked) {
    characters += specialCharacters;
  }

  if (characters === "") {
    alert("Please select at least one character type.");
    return;
  }

  for (let i = 0; i < lengthInput.value; i++) {
    newPass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  passwordInput.value = newPass;
};

generatePass();

copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
  copyBtn.classList.remove("fas", "fa-copy");
  copyBtn.classList.add("far", "fa-clipboard");
  copyBtn.disabled = true;
  setTimeout(() => {
    copyBtn.classList.remove("far", "fa-clipboard");
    copyBtn.classList.add("fas", "fa-copy");
    copyBtn.disabled = false;
  }, 700);
});

generateBtn.addEventListener("click", generatePass);
