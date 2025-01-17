// Fake data array
const students = [
  {
    Id: 1,
    FirstName: "Mohamed",
    LastName: "El Bahrawy",
    Email: "mohamed@gmail.com",
    Track: "Backend",
    CV: "CV1.pdf",
    StatusOfTrainee: "Pending",
    City: "Benha",
    GraduationYear: "2023",
    University: "Benha University",
    WhyChoosingYou:
      "I chose this track because I am passionate about backend development and I want to learn more about it.",
    PerviousWork: "none",
    programmingLanguages: "HTML, CSS, Javascript",
  },
  {
    Id: 2,
    FirstName: "Sara",
    LastName: "Ahmed",
    Email: "sara.ahmed@gmail.com",
    Track: "Frontend",
    CV: "CV2.pdf",
    StatusOfTrainee: "Accepted",
    City: "Benha",
    GraduationYear: "2023",
    University: "Benha University",
    WhyChoosingYou:
      "I chose this track because I am passionate about backend development and I want to learn more about it.",
    PerviousWork: "none",
    programmingLanguages: "HTML, CSS, Javascript",
  },
  {
    Id: 3,
    FirstName: "Ahmed",
    LastName: "Ali",
    Email: "ahmed.ali@gmail.com",
    Track: "Fullstack",
    CV: "CV3.pdf",
    StatusOfTrainee: "Rejected",
    City: "Benha",
    GraduationYear: "2023",
    University: "Benha University",
    WhyChoosingYou:
      "I chose this track because I am passionate about backend development and I want to learn more about it.",
    PerviousWork: "none",
    programmingLanguages: "HTML, CSS, Javascript",
  },
  {
    Id: 4,
    FirstName: "Fatma",
    LastName: "Adel",
    Email: "fatma.adel@gmail.com",
    Track: "UI/UX",
    CV: "CV4.pdf",
    StatusOfTrainee: "Pending",
    City: "Benha",
    GraduationYear: "2023",
    University: "Benha University",
    WhyChoosingYou:
      "I chose this track because I am passionate about backend development and I want to learn more about it.",
    PerviousWork: "none",
    programmingLanguages: "HTML, CSS, Javascript",
  },
];
const studentContainer = document.querySelector("#internship-applicants");
const loginContainer = document.querySelector("#admin-login");
const loginForm = document.querySelector("#admin-login form");
const textarea = document.querySelector("#Reason");
// Status options
const statusOptions = ["Pending", "Accepted", "Rejected"];

const handleChangeStatus = async (e) => {
  const button = e.target;
  const studentCard = button.closest(".cloud-background");
  const textarea = studentCard.querySelector("#Reason");
  const buttons = studentCard.querySelectorAll("button");

  // Get values
  const status = button.innerText == "Accept" ? "Accepted" : "Rejected"; // "Accept" or "Reject"
  const reason = textarea.value;
  const studentId = button.id;

  // Disable inputs
  textarea.disabled = true;
  buttons.forEach((btn) => (btn.disabled = true));

  // Here you can send the data to your backend
  const formData = new FormData();
  formData.append("Id", studentId);
  formData.append("StatusOfTrainee", status);
  formData.append("Reason", reason);
  //   try {
  //     const response = await fetch(
  //       "https://internships.cloudjet.org/edit_trainee_status.php",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );
  //     const data = await response.json();
  const statusElement = studentCard.querySelector(
    ".Pending, .Accepted, .Rejected"
  );
  statusElement.innerHTML = `<strong>Status:</strong> ${status}`;
  statusElement.className = status;
  //   } catch (error) {
  //     console.log(error);
  //   textarea.disabled = false;
  //   buttons.forEach((btn) => (btn.disabled = false));
  //   }
};

// Function to dynamically create student cards
function createStudentCards(students) {
  students.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.className = "cloud-background";
    studentDiv.id = student.Id;

    studentDiv.innerHTML = `
        <p><strong>Student Name:</strong> ${
          student.FirstName + " " + student.LastName
        }</p>
        <p><strong>Email:</strong> ${student.Email}</p>
        <p><strong>Track:</strong> ${student.Track}</p>
        <p><strong>City:</strong> ${student.City}</p>
        <p><strong>Graduation Year:</strong> ${student.GraduationYear}</p>
        <p><strong>University:</strong> ${student.University}</p>
        <p><strong>Why Choosing You:</strong> ${student.WhyChoosingYou}</p>
        <p><strong>Previous Work:</strong> ${student.PerviousWork}</p>
        <p><strong>Programming Languages:</strong> ${
          student.programmingLanguages
        }</p>
        <p><strong>Cv:</strong> <a href="${
          student.CV
        }" target="_blank">Download</a></p>
        <p class="${student.StatusOfTrainee}"><strong>Status:</strong> ${
      student.StatusOfTrainee
    }</p>
    <div class="mb-2">
              <label for="Reason" class="form-label">Reason</label>
              <textarea
                type="text"
                placeholder="Reason Message..."
                class="form-control"
                id="Reason"
                required
              ></textarea>
            </div>
            <div class="d-flex justify-content-end gap-2 flex-wrap">
              <button id="${
                student.Id
              }" class="btn btn-danger" onclick="handleChangeStatus(event)">Reject</button>
              <button id="${
                student.Id
              }" class="btn btn-success" onclick="handleChangeStatus(event)">Accept</button>
            </div>
      `;

    studentContainer.appendChild(studentDiv);
  });
}

loginForm.onsubmit = async (e) => {
  e.preventDefault();
  //   let Username = document.querySelector("#Username").value;
  //   let Password = document.querySelector("#Password").value;
  //   const formData = new FormData();
  //   formData.append("Username", Username);
  //   formData.append("Password", Password);
  //   try {
  //     const response = await fetch(
  //       "https://internships.cloudjet.org/signin.php",
  //       {
  //         method: "POST",

  //         body: formData,
  //       }
  //     );
  //     const data = await response.json();
  //     if (data.admin_id) {
  //       studentContainer.innerHTML = "";
  //       getData();
  //     } else {
  //       studentContainer.innerHTML = `<h3 class="text-danger mx-auto">Invalid credentials</h3>`;
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     studentContainer.innerHTML = `<h3 class="text-danger mx-auto">Error Occurred while Signing in</h3>`;
  //   }
  // };
  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://internships.cloudjet.org/get_trainees.php",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const students = await response.json();
  //     // Call the function to generate the divs
  //     if (students.length === 0) {
  //       studentContainer.innerHTML = `<h3 class="text-danger mx-auto">No data found</h3>`;
  //       return;
  //     }
  createStudentCards(students);
  //     loginContainer.style.display = "none";
  //     return;
  //   } catch (error) {
  //     studentContainer.innerHTML = `<h3 class="text-danger mx-auto">Error Occurred while fetching data</h3>`;
  //   }
};
