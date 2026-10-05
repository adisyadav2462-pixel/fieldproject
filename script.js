// Contact Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let message = document.getElementById("message").value.trim();

            if(name === ""){
                alert("Please enter your name.");
                return;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if(!email.match(emailPattern)){
                alert("Please enter a valid email address.");
                return;
            }

            let phonePattern = /^[0-9]{10}$/;

            if(!phone.match(phonePattern)){
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            if(message.length < 10){
                alert("Message should contain at least 10 characters.");
                return;
            }

            alert("✅ Thank you for contacting Apparel Enterprises!\n\nYour message has been sent successfully.");

            form.reset();

        });

    }

});

// Welcome Message

window.onload = function(){

    console.log("Welcome to Apparel Enterprises Website");

};