const form = document.getElementById("form");
const userNameInput = document.getElementById("user-name");
const streetNameInput = document.getElementById("street-name");
const houseNumberInput = document.getElementById("house-number");
const dateInput = document.getElementById("date");
const resultDiv = document.getElementById("result");

// Check if data exists in local storage and display it on the page
if (localStorage.getItem("userName") && localStorage.getItem("streetName") && localStorage.getItem("houseNumber") && localStorage.getItem("date")) {
    const userName = localStorage.getItem("userName");
    const streetName = localStorage.getItem("streetName");
  const houseNumber = localStorage.getItem("houseNumber");
  const date = localStorage.getItem("date");
  const result = `Name: ${userName} \nstreet: ${streetName} ${houseNumber} \ndate: ${date}`;
  resultDiv.innerText = result;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = userNameInput.value;
  const streetName = streetNameInput.value;
  const houseNumber = houseNumberInput.value;
  const date = dateInput.value;
  const result = `Name: ${userName} \nstreet: ${streetName} ${houseNumber} \ndate: ${date}`;
  resultDiv.innerText = result;
  
  // Store data in local storage
  localStorage.setItem("userName", userName);
  localStorage.setItem("streetName", streetName);
  localStorage.setItem("houseNumber", houseNumber);
  localStorage.setItem("date", date);
});
