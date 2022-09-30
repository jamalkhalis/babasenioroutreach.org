let nameFormInput = "";
let emailFormInput = "";
let phoneFormInput = "";
let subjectFormInput = "";
let messageFormInput = "";

const sendMessage = document.getElementById('sendMessage');
const nameForm = document.getElementById('nameForm');
const emailForm = document.getElementById('emailForm');
const phoneForm = document.getElementById('phoneForm');
const subjectForm = document.getElementById('subjectForm');
const messageForm = document.getElementById('messageForm');
const yourMessageIsSent = document.getElementById('yourMessageIsSent');


nameForm.addEventListener('input', function(event) {
  nameFormInput = event.target.value;
})

emailForm.addEventListener('input', function(event) {
  emailFormInput = event.target.value;
})

phoneForm.addEventListener('input', function(event) {
  phoneFormInput = event.target.value;
})

subjectForm.addEventListener('input', function(event) {
  subjectFormInput = event.target.value;
})

messageForm.addEventListener('input', function(event) {
  messageFormInput = event.target.value;
})


sendMessage.addEventListener('click', function(event) {

  let messageObject = {
    name: nameFormInput,
    emailAddress: emailFormInput,
    phone: phoneFormInput,
    subject: subjectFormInput,
    message: messageFormInput
  }

  fetch("https://bcs.babaccm.com:8444/contact", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageObject)
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);

    if (result) {
      yourMessageIsSent.textContent = `Your message is sent! we will contact you, thank you so much!`;
      nameForm.value = "";
      emailForm.value = "";
      phoneForm.value = "";
      subjectForm.value = "";
      messageForm.value = "";

      nameFormInput = "";
      emailFormInput = "";
      phoneFormInput = "";
      subjectFormInput = "";
      messageFormInput = "";
    }

  })



})