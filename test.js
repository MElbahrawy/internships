const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const track = document.querySelector("#track");
const fileInput = document.querySelector("#cv");
const cvLabel = document.querySelector("#cvName");
const responseMessage = document.querySelector("#response");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  cvLabel.textContent = file.name;
});
form.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", `${firstName} ${lastName}`);
  // Add all input values to FormData
  inputs.forEach((input) => {
    if (input.id !== "firstName" && input.id !== "lastName") {
      formData.append(input.id, input.value);
    }
  });
  // Add track select value
  formData.append("track", track.value);
  // For file input specifically
  const cvFile = fileInput.files[0];
  if (cvFile) {
    formData.append("cv", cvFile);
  }
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);
  responseMessage.textContent = "Submitting data...";
  try {
    const response = await fetch("", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("Success:", data);
    responseMessage.textContent = "Data submitted successfully!";
    responseMessage.classList.add("text-success");
  } catch (error) {
    console.log("Error:", error);
    responseMessage.textContent = "An error occurred. Please try again.";
    responseMessage.classList.add("text-danger");
  }
};
