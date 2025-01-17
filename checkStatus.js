const form = document.querySelector("form");
const statusContainer = document.querySelector("#status-container");
const nameDisplay = document.querySelector("#name");
const trackDisplay = document.querySelector("#track");
const cityDisplay = document.querySelector("#city");
const phoneDisplay = document.querySelector("#phone");
const statusDisplay = document.querySelector("#status");
const reasonDisplay = document.querySelector("#reason");
const email = document.querySelector("#userEmail");
const errorMessage = document.querySelector("#response-error-message");
const data = {
  trainee: {
    FirstName: "John",
    LastName: "Doe",
    Track: "Web Development",
    City: "New York",
    Phone: "123-456-7890",
    StatusOfTrainee: "Pending",
    Reason: "I'm interested in web development",
  },
};
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMessage.textContent = "";
  statusDisplay.textContent = "";
  //   try {
  //     const response = await fetch(
  //       "http://127.0.0.1:8012/cloudjetInternship/get_trainee_by_email.php",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ email: email.value }),
  //       }
  //     );
  //     const data = await response.json();
  statusContainer.classList.remove("d-none");
  nameDisplay.textContent =
    data.trainee.FirstName + " " + data.trainee.LastName;
  trackDisplay.textContent = data.trainee.Track;
  cityDisplay.textContent = data.trainee.City;
  phoneDisplay.textContent = data.trainee.Phone;
  statusDisplay.textContent = data.trainee.StatusOfTrainee;
  statusDisplay.classList.add(data.trainee.StatusOfTrainee);
  reasonDisplay.textContent = data.trainee.Reason;
  //   } catch (error) {
  //     console.log("Error:", error);
  //     errorMessage.textContent = "An error occurred. Please try again.";
  //   }
});
