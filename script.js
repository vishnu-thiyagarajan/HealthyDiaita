document.querySelectorAll('.gallery .content img').forEach((image) => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})
document.querySelector('.popup-image span').onclick = ()  => {
    document.querySelector('.popup-image').style.display = 'none';
}
function navClose() {
    if (window.innerWidth <= 991) navToggle();
}
function navToggle() {
    var nav = document.querySelector('nav');
    var menu = document.querySelector('.menu i');
    nav.classList.toggle('toggle');
    menu.classList.toggle('fa-times');
}
function vidToggle() {
    var show = document.querySelector('.video-container');
    var video = document.querySelector('video');
    show.classList.toggle('toggleVid');
    video.currentTime = 0;
    video.pause();
}
function readToggle(index) {
    var dots = document.getElementById("dots" + index);
    var moreText = document.getElementById("more" + index);
    var btnText = document.getElementById("readMore" + index);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
let sendTrigger = document.getElementById("sendmessage");
sendTrigger.onclick = function sendMail(){
    let nameField = document.getElementById("name")
    let emailField = document.getElementById("email")
    let messageField = document.getElementById("message")
    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name.length<=2 && !emailregex.test(email) && message.split(" ").length <= 2) return   
    Email.send({
        SecureToken : "f23021b9-c59e-4830-9514-23a0538ed88e",
        To : 'healthydiaita@gmail.com',
        From : 'healthydiaita@gmail.com',
        Subject : "Mail from HealthyDiaita Website",
        Body : `
        Im ${name},<br/><br/>                
        my message: ${message},<br/>
        reply me by: ${email}<br/><br/>
        Thanks,<br/>
        ${name}<br/>
        `
    }).then(
    message => {
        alert("We have received your message! Will get to you soon!");
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
    }
    ).catch(err=>alert("Something went wrong! Can you reach us by phone?"))

}

// Function which adds the 'animated' class to any '.animatable' in view
var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = window.scrollY + window.innerHeight,
        animatables = document.querySelectorAll('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if (animatables.length == 0) {
        window.removeEventListener('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    animatables.forEach(function(animatable) {
        console.log(animatable.classList);
        if ((animatable.offsetTop + animatable.offsetHeight - 200) < offset) {
            animatable.classList.remove('animatable');
            animatable.classList.add('animated');
        }
    });

};

// Hook doAnimations on scroll, and trigger a scroll
window.addEventListener('scroll', doAnimations);
window.dispatchEvent(new Event('scroll'));
