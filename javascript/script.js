// Show the login modal
 document.getElementById("loginButton").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "block";
});

// Show the signup modal
document.getElementById("signupButton").addEventListener("click", function () {
  document.getElementById("signupModal").style.display = "block";
});

// Close the modal when the close button is clicked
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    var modal = this.parentNode.parentNode;
    modal.style.display = "none";
    clearFormInputs(modal);
  });
}

// Toggle password visibility
var togglePasswordIcons = document.getElementsByClassName("toggle-password");
for (var i = 0; i < togglePasswordIcons.length; i++) {
  togglePasswordIcons[i].addEventListener("click", function () {
    var passwordInputId = this.getAttribute("data-target");
    var passwordInput = document.getElementById(passwordInputId);
    var eyeIcon = this;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  });
}

// Handle login form submission
document.getElementById("loginSubmitBtn").addEventListener("click", function () {
  var emailInput = document.getElementById("emailInput").value.trim();
  var passwordInput = document.getElementById("passwordInput").value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("Please enter your email and password.");
  } else {
    alert("Login form submitted successfully.");
    document.getElementById("loginModal").style.display = "none";
    clearFormInputs(document.getElementById("loginModal"));
  }
});

// Handle signup form submission
document.getElementById("signupSubmitBtn").addEventListener("click", function () {
  var emailInput = document.getElementById("signupEmailInput").value.trim();
  var passwordInput = document.getElementById("signupPasswordInput").value.trim();

  if (emailInput === "" || passwordInput === "") {
    alert("Please enter your email and password.");
  } else {
    alert("Signup form submitted successfully.");
    document.getElementById("signupModal").style.display = "none";
    clearFormInputs(document.getElementById("signupModal"));
  }
});

// Clear form inputs
function clearFormInputs(modal) {
  var inputs = modal.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
  //  about me
var typingEffect = new Typed(".multiText",{
  strings : ["Coder","Designer","Full Stack Developer"],
  loop:true,
  typeSpeed :100,
  backSpeed :80,
  backDelay :1500
})
var typingEffect = new Typed(".multitext1",{
  strings : ["Hi there! I'm Keerthi sridatta, a passionate and experienced full stack developer. With a strong foundation in both front-end and back-end development, I love crafting innovative solutions and bringing ideas to life."],
  typeSpeed :5,
  showCursor :false
})
var typingEffect = new Typed(".multitext2",{
  strings : ["On the front-end, I excel in HTML, CSS, and JavaScript,I believe in delivering seamless user experiences through clean and intuitive designs, and I constantly stay updated on the latest UI trends and best practices."],
  typeSpeed :5,
  showCursor :false
})
var typingEffect = new Typed(".multitext3",{
  strings : ["What sets me apart is my ability to understand the bigger picture while paying attention to detail. I take pride in writing clean, maintainable code and following industry best practices."],
  typeSpeed :5,
  showCursor :false
})
var typingEffect = new Typed(".multitext4",{
  strings : ["I am a lifelong learner, always seeking new technologies and staying up to date with the ever-evolving landscape of software development. I believe in the power of continuous improvement and embrace challenges that push me to grow both professionally and personally."],
  typeSpeed :5,
  showCursor :false
})
var typingEffect = new Typed(".multitext5",{
  strings : ["Outside of coding, you'll find me exploring new technologies, attending tech meetups, and engaging with the developer community. I'm a team player with excellent communication skills and a genuine enthusiasm for collaborating on projects that make a positive impact."],
  typeSpeed :5,
  showCursor :false
})
  // Skills
var lines = [
"1. Front-end Development: I have expertise in HTML, CSS, and JavaScript.I can create visually appealing and responsive user interfaces, ensuring a seamless user experience across different devices and browsers.",
"",
"2. Back-end Development: I am well-versed in server-side programming languages like Java. I can build robust and scalable server-side applications.",
"",
"3. Database Management: I have a strong understanding of database concepts and can work with various database systems, such as MySQL, MongoDB, or PostgreSQL. I can design efficient database schemas, write complex queries, and optimize database performance for improved application responsiveness.",
"",
"4. Problem Solving and Debugging: I possess strong problem-solving skills and can effectively troubleshoot and debug issues throughout the development process. I have experience using debugging tools and techniques to identify and resolve bugs, ensuring the stability and reliability of the software.",
"",
"5. Continuous Learning: As a full stack developer, I am committed to continuous learning and staying updated with the latest trends and technologies in the industry. I actively explore new tools, frameworks, and programming languages to enhance my skill set and improve the efficiency and effectiveness of my work."
];

var lineIndex = 0;
var lineElement = document.querySelector('.multilineText');

function typeLine() {
if (lineIndex < lines.length) {
var currentLine = lines[lineIndex];
lineElement.innerHTML += currentLine + '<br>';
lineIndex++;
setTimeout(typeLine, 1000); // Delay between lines (milliseconds)
}
}
typeLine();
  //  project1
// set up text to print, each item in array is new line
var aText = new Array(
"The goal of this project is to design and develop a fully functional e-commerce website using HTML, CSS, Bootstrap, and JavaScript. The website will provide a platform for users to browse, search, and purchase products online. The project will involve creating an intuitive and visually appealing user interface, implementing product listing and details pages, integrating a shopping cart functionality, and ensuring a smooth checkout process.", 
"",
"Key Requirements: ",
"",
"User Interface Design: Create an engaging and responsive user interface that is visually appealing and easy to navigate. The design should incorporate modern UI/UX principles, ensuring a seamless user experience across different devices and screen sizes.",
"",
"Product Catalog: Implement a product catalog that allows users to browse and search for products based on various categories, such as type, brand, or price range. Each product should have a dedicated details page with relevant information, including images, descriptions, pricing, and customer reviews.",
"",
"Shopping Cart Functionality: Develop a shopping cart system that enables users to add products, modify quantities, and remove items. The cart should display the total order value and provide a clear checkout option",
"",
" User Authentication and Registration: Implement a user registration and login system to facilitate personalized experiences, order tracking, and secure transactions. User credentials should be securely stored and validated to ensure data confidentiality.",
"",
"Order Management: Implement an order management system that allows users to view their order history, track shipments, and request returns or exchanges. Additionally, an admin interface should be provided to manage orders, inventory, and product listings.",
"",
"By successfully completing this project, we aim to provide users with a user-friendly and secure e-commerce website that enables convenient online shopping experiences. The project will leverage HTML, CSS, Bootstrap, and JavaScript to create a visually appealing and functional website, meeting modern web development standards and industry best practices."
);
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("multilinetext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br>';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 50);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();


// Show or hide the scroll button based on the scroll position
window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}