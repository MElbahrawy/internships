const form = document.querySelector("form");
const statusDisplay = document.querySelector("#status");
const email = document.querySelector("#userEmail");
const errorMessage = document.querySelector("#response-error-message");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMessage.textContent = "";
  statusDisplay.textContent = "";
  const data = {
    status: "Rejected",
  };
  statusDisplay.textContent = data.status;
  statusDisplay.classList.add(data.status);
  //   try {
  //     const response = await fetch("", {
  //       method: "GET",
  //       body: email.value,
  //     });
  //     const data = await response.json();
  //     statusDisplay.textContent = data.status;
  //     statusDisplay.classList.add(data.status);
  //   } catch (error) {
  //     console.log("Error:", error);
  //     errorMessage.textContent = "An error occurred. Please try again.";
  //   }
});
