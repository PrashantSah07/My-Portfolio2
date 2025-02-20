let txtBlue = document.querySelectorAll('.txtBlue');
let homee = document.querySelector('.homee')
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "black";
        txtBlue.forEach(e => e.style.color = "white");
        txtBlue.forEach(e => e.style.hoverColor = "rgb(105, 30, 245)");
        txtBlue.forEach(e => {
            e.addEventListener("mouseenter", () => {
                e.style.color = "rgb(105, 30, 245)";
            });

            e.addEventListener("mouseleave", () => {
                e.style.color = "white";
            });
        });
        homee.style.color = "rgb(105, 30, 245)"
        navbar.style.padding = "20px 0px";
        iconbar1.style.borderColor = 'white';
        iconbar2.style.borderColor = 'white';
        iconbar3.style.borderColor = 'white';
    } else {
        navbar.style.backgroundColor = "white";
        txtBlue.forEach(e => e.style.color = "black");
        homee.style.color = "rgb(105, 30, 245)"
        txtBlue.forEach(e => {
            e.addEventListener("mouseenter", () => {
                e.style.color = "rgb(105, 30, 245)";
            });

            e.addEventListener("mouseleave", () => {
                e.style.color = "black";
            });
        });
        navbar.style.padding = "25px 0px";
        iconbar1.style.borderColor = 'black';
        iconbar2.style.borderColor = 'black';
        iconbar3.style.borderColor = 'black';
    }
});

let description = document.querySelector('#description');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let javaScript = document.querySelector('#javaScript');
let react = document.querySelector('#react');
let nodeJS = document.querySelector('#nodeJS');
let expressJS = document.querySelector('#expressJS');
let mongoDB = document.querySelector('#mongoDB');
let gitHub = document.querySelector('#gitHub');


html.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'HTML defines the structure of web pages using elements and tags to organize content like text, images, and links.';
});
html.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

css.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'CSS defines the style of a web page, including layout, colors, fonts, spacing, and responsive design for various devices.';
});
css.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

javaScript.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'JavaScript adds interactivity to web pages, allowing dynamic content, animations, form validation, and asynchronous data handling.';
});
javaScript.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

react.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'React is a JavaScript library for building user interfaces, focusing on component-based architecture and efficient updates.';
});
react.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

nodeJS.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'Node.js is a JavaScript runtime for building server-side applications, enabling fast, scalable network programs.';
});
nodeJS.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

expressJS.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'Express.js is a web application framework for Node.js, simplifying routing, middleware, and handling HTTP requests.';
});
expressJS.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

mongoDB.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents for scalability and performance.';
});
mongoDB.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});

gitHub.addEventListener('mouseenter', function () {
    description.style.color = 'black'
    description.innerHTML = 'GitHub is a platform for version control and collaborative software development, using Git to manage code repositories and projects.';
});
gitHub.addEventListener('mouseleave', function () {
    description.style.color = 'rgb(96, 92, 92)'
    description.innerHTML = '*Click Or Hover Mouse Cursor Over Card To Read*';
});


// let form = document.querySelector('form')
// let name = document.getElementById('name');
// let emailId = document.getElementById('emailId');
// let phoneNo = document.getElementById('phoneNo');
// let message = document.getElementById('message');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: 'your_email',
//         Password: "your_password",
//         To: 'your_email',
//         From: 'your_email',
//         Subject: "For Enquiry",
//         Body: 'Name: ' + name.value + '<br>' + 'Email: ' + emailId.value + '<br>' + 'Mobile Number: ' + phoneNo.value + '<br>' + 'Message: ' + message.value,
//         Port: 587
//     }).then(function (msg) {
//         if (msg == 'OK') {
//             swal("Successfully sent message!", "You clicked the button!", "success");
//             form.reset();
//         } else {
//             sweetAlert("Oops...", "Something went wrong!", "error");
//         }
//     });
// });

let navbarToggler = document.querySelector('.navbar-toggler');
let iconbar1 = document.querySelector('.icon-bar1');
let iconbar2 = document.querySelector('.icon-bar2');
let iconbar3 = document.querySelector('.icon-bar3');
let sideNavbar = document.querySelector('.sideNavbar');

let isOn1 = false;
navbarToggler.addEventListener('click', function () {
    if (!isOn1) {
        iconbar2.style.display = 'none';
        navbarToggler.style.gap = '0px';
        iconbar1.style.position = 'absolute'
        iconbar1.style.transform = 'rotate(-45deg)'
        iconbar3.style.transform = 'rotate(45deg)'
        sideNavbar.style.transform = 'translateX(0%)'

    } else {
        iconbar2.style.display = 'flex';
        navbarToggler.style.gap = '4px';
        iconbar1.style.position = 'static'
        iconbar1.style.transform = 'rotate(0deg)'
        iconbar3.style.transform = 'rotate(-0deg)'
        sideNavbar.style.transform = 'translateX(100%)'
    }
    isOn1 = !isOn1;
});


