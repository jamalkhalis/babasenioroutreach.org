let nameFormInput = "";
let emailFormInput = "";
let passwordFormInput = "";
let studentVolunteerFormInput = "";
let nonStudentVolunteerFormInput = "";
let messageFormInput = "";

const sendMessage = document.getElementById('sendMessage');
const nameForm = document.getElementById('nameForm');
const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');
const studentVolunteerForm = document.getElementById('studentVolunteerForm');
const nonStudentVolunteerForm = document.getElementById('nonStudentVolunteerForm');
const messageForm = document.getElementById('messageForm');
const yourMessageIsSent = document.getElementById('yourMessageIsSent');


nameForm.addEventListener('input', function(event) {
  nameFormInput = event.target.value;
})

emailForm.addEventListener('input', function(event) {
  emailFormInput = event.target.value;
})

passwordForm.addEventListener('input', function(event) {
  passwordFormInput = event.target.value;
})

studentVolunteerForm.addEventListener('input', function(event) {
  studentVolunteerFormInput = event.target.value;
})

nonStudentVolunteerForm.addEventListener('input', function(event) {
  nonStudentVolunteerFormInput = event.target.value;
})

messageForm.addEventListener('input', function(event) {
  messageFormInput = event.target.value;
})


sendMessage.addEventListener('click', function(event) {

  let messageObject = {
    name: nameFormInput,
    emailAddress: emailFormInput,
    password: passwordFormInput,
    studentVolunteer: studentVolunteerFormInput,
    nonStudentVolunteer: nonStudentVolunteerFormInput,
    message: messageFormInput
  }

  fetch("http://localhost:8081/volunteer-registration", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageObject)
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);

    if (result) {
      yourMessageIsSent.textContent = `You're registred, thank you so much!`;
      nameForm.value = "";
      emailForm.value = "";
      passwordForm.value = "";
      studentVolunteerForm.value = "";
      nonStudentVolunteerForm.value = "";
      messageForm.value = "";

      nameFormInput = "";
      emailFormInput = "";
      passwordFormInput = "";
      studentVolunteerFormInput = "";
      nonStudentVolunteerFormInput = "";
      messageFormInput = "";
    }

  })



})