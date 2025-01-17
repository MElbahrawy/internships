document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll("input");
  const textAreas = document.querySelectorAll("textarea");
  const track = document.querySelector("#Track");
  const fileInput = document.querySelector("#CV");
  const cvLabel = document.querySelector("#cvName");
  const responseMessage = document.querySelector("#response");
  const checkInputs = document.getElementsByName("programmingLanguages");
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    cvLabel.textContent = file.name;
  });
  form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Add all input values to FormData
    inputs.forEach((input) => {
      if (input.name !== "programmingLanguages") {
        formData.append(input.id, input.value);
      }
    });
    textAreas.forEach((textArea) => {
      formData.append(textArea.id, textArea.value);
    });

    // Add track select value
    formData.append("Track", track.value);

    let checkedInputs = [];
    Array.from(checkInputs)
      .filter((input) => input.checked)
      .forEach((input) => checkedInputs.push(input.id));
    formData.append("ProgrammingLanguages", checkedInputs.join(", "));

    // For file input specifically
    const cvFile = fileInput.files[0];
    if (cvFile) {
      formData.append("CV", cvFile);
    }
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    responseMessage.textContent = "Submitting data...";
    responseMessage.className = "";
    // try {
    //     const response = await fetch("https://internships.cloudjet.org/post_trainee.php", {
    //       method: "POST",
    //       body: formData,
    //     });
    //     const data = await response.json();
    inputs.forEach((input) => {
      input.value = "";
    });
    checkInputs.forEach((input) => {
      input.checked = false;
    });
    textAreas.forEach((textArea) => {
      textArea.value = "";
    });
    fileInput.value = "";
    cvLabel.textContent = "";
    // responseMessage.textContent = "Data submitted successfully!";
    // responseMessage.className = "text-success mb-2 mt-3";
    //   } catch (error) {
    //     console.log("Error:", error);
    responseMessage.textContent = "An error occurred. Please try again.";
    responseMessage.className = "text-danger mb-2 mt-3";
    //   }
  };
});
