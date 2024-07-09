var i = 0;
var txt = 'Proactive Computer Technology major (3.5 GPA) graduated from Greenville Technical College, with 2+ years of work experience in a professional environment. Aiming to leverage a proven knowledge of database design, network administration, and server administration skills to successfully fill the information technology role at your company. Frequently praised as hard-working by my peers, I can be relied upon to help your company achieve its goals.';
var speed = 10;
function typeWriter() { // Terminal typewriting output
  if (i < txt.length) {
    document.getElementById("terminal-p").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var NavPosts = document.getElementById("profile-nav1");
var NavExposure = document.getElementById("profile-nav2");
var NavSkills = document.getElementById("profile-nav3");
var PostsContent = document.getElementById("posts");
var ExposureContent = document.getElementById("exposure");
var SkillsContent = document.getElementById("skills");
NavPosts.addEventListener('click', function(){ // Hightlight the selected tab on profile navbar
  NavExposure.classList.remove('selected');
  NavSkills.classList.remove('selected');
  this.classList.add('selected');

  ExposureContent.classList.add('hidden'); // Hide all other content, other than what is selected
  SkillsContent.classList.add('hidden');
  PostsContent.classList.remove('hidden');
})
NavExposure.addEventListener('click', function(){ // Hightlight the selected tab on profile navbar
  NavPosts.classList.remove('selected');
  NavSkills.classList.remove('selected');
  this.classList.add('selected');

  SkillsContent.classList.add('hidden'); // Hide all other content, other than what is selected
  PostsContent.classList.add('hidden');
  ExposureContent.classList.remove('hidden');
})
NavSkills.addEventListener('click', function(){ // Hightlight the selected tab on profile navbar
  NavExposure.classList.remove('selected');
  NavPosts.classList.remove('selected');
  this.classList.add('selected');

  ExposureContent.classList.add('hidden'); // Hide all other content, other than what is selected
  PostsContent.classList.add('hidden');
  SkillsContent.classList.remove('hidden');
})


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Systems Administrator", "Linux Administrator", "Windows Administrator", "superuser", "student", "solution"];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});