let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function selfCare() {
    var userId = prompt("Enter your UserID:");
    var billAm = prompt("Bill Amount:");
    var payM = prompt("Enter Payment details:");
    
    if (userId && billAm && payM) {
        alert(`Your Payment is Successful!`);
    } else {
        alert("Invalid Input.");
    }
  }
  function suscbribeAlert() {
    var name = prompt("Enter your name:");
    var email = prompt("Enter your email:");
    
    if (name && email) {
        alert(`Thank you, ${name}! We will reach out to you.`);
    } else {
        alert("Please enter both name and email.");
    }
  }
  function sendM(){
    var nam1 = document.getElementById("nameBox").value;
    var add1 = document.getElementById("addBox").value;
    var eAdd = document.getElementById("emailBox").value;
    var phn1 = document.getElementById("phoneBox").value;
    var sms = document.getElementById("smsBox").value;
  
    var nam_1;
    if (nam1 && add1 && eAdd && phn1 && sms ){
       nam_1 = "Thank You for your Messasge!";
    }
    else{
      nam_1 = "Please fill all the Boxes."
    }
    document.getElementById("charac").innerText = nam_1;
  }