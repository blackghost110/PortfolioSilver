let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
      })
    }


  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

function sendMail(){
  let parms = {
    name : document.getElementsByName("name")[0].value,
    email : document.getElementsByName("email")[0].value,
    subject : document.getElementsByName("subject")[0].value,
    message : document.getElementsByName("message")[0].value
  };

  emailjs.send("service_bhcz9lk", "template_2wwiehe", parms).then(alert("Email Sent !"))
}









