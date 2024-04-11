function sendEmail(){
  var userName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mess = document.getElementById('message').value;

  var messageBody = "name ::"+userName+"<br/> email ::" + email + "<br/> message ::" +mess;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ajithputhukode2000@gmail.com",
    Password : "C4FC203F04657BB34F7524F241803B5E78A5",
    To : 'ajithputhukode2000@gmail.com',
    From : "ajithputhukode2000@gmail.com",
    Subject : "Enquiry about",
    Body : messageBody
}).then(
  message =>{
    if(message=="OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
  
);
}
const usernameInput = document.getElementById('name');

usernameInput.addEventListener('input', function() {
    const usernameValue = usernameInput.value;
    const hasNumbers = /\d/.test(usernameValue);

    if (hasNumbers) {
        alert('Numbers are not allowed in the username field!');
        // You can also clear the input field or prevent further typing here
        // usernameInput.value = '';
    }
});

