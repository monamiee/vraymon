//Select Element func
const selectElement = function (element)
{
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function()
{
    body.classList.toggle('open');

    if(body.classList.contains('open'))
    {
        disableScroll();
    }
    else
    {
        enableScroll();
    }
    
})

let navbar = selectElement('.nav-list');

navbar.addEventListener('click', function()
{
    body.classList.remove('open');
    enableScroll();
})

//navigator element manager
var homelink = document.getElementById('home');
var aboutlink = document.getElementById('about');
var worklink = document.getElementById('work');
var contactlink = document.getElementById('contact');

function cleanSelection()
{
    homelink.classList.remove('selected');
    aboutlink.classList.remove('selected');
    worklink.classList.remove('selected');
    contactlink.classList.remove('selected');
}

function ToggleHomeOnLoad(obj_id)
{
    obj_id = homelink;
    obj_id.classList.toggle('selected');
}


function selectedLink(clicked_id)
{   
    clicked_id = clicked_id || window.event;
    clicked_id = clicked_id.target || e.srcElement;

    cleanSelection();

    if(clicked_id == homelink)
    {
        clicked_id.classList.toggle('selected');
    }
    else if(clicked_id == aboutlink)
    {
        clicked_id.classList.toggle('selected');
    }
    else if(clicked_id == worklink)
    {
        clicked_id.classList.toggle('selected');
    }
    else if(clicked_id == contactlink)
    {
        clicked_id.classList.toggle('selected');
    }
}

//section Detector
window.addEventListener('scroll', () =>
{
    const homebound = 364;
    const aboutbound = 5200;
    const workbound = 6632;
    const contactbound = 4530;    

    const scrolled = window.scrollY;
    //console.log(scrolled);
    if(scrolled <= homebound)
    {
        cleanSelection();
        homelink.classList.toggle('selected');
    }
    else if(scrolled > homebound && scrolled <= aboutbound)
    {
        cleanSelection();
        aboutlink.classList.toggle('selected');
    }
    else if(scrolled > aboutbound && scrolled <= workbound)
    {
        cleanSelection();
        worklink.classList.toggle('selected');
    }
    else if(scrolled > workbound)
    {
        cleanSelection();
        contactlink.classList.toggle('selected');
    }
})




//skill button func
function unity()
{ 
    document.getElementById('displayed-skill') 
    .src="Asset/unitylogo.png"; 
    document.getElementById('displayed-skill-info') 
    .innerHTML="I have been using this Unity Game Engine for about 2 years. Usually, I use Unity for my personal projects for training and learning. My knowledge about Unity Game Engine is quite a lot, but I still want to learn and deepen this Unity Game Engine."; 
} 

function vsc()
{ 
    document.getElementById('displayed-skill') 
    .src="Asset/visualstudioLogo.png"; 
    document.getElementById('displayed-skill-info') 
    .innerHTML="As a programmer, I certainly have to master several programming languages. Some of the programming languages ​​that I have learned and understood include C #, C ++, Java, Html, Css, Python, SQL. I have also used several of these programming languages ​​for projects that I am working on."; 
} 

function oop()
{ 
    document.getElementById('displayed-skill') 
    .src="Asset/OOP.png"; 
    document.getElementById('displayed-skill-info') 
    .innerHTML="Object-Oriented Programming is one of the paradigms that I am good at the most. Because most of the projects I work on are Game Development, OOP is the most important and crucial one, so I'm good at the OOP concept."; 
} 

function sql()
{ 
    document.getElementById('displayed-skill') 
    .src="Asset/SQLlogo.png"; 
    document.getElementById('displayed-skill-info') 
    .innerHTML="I used to use SQL to create small projects to organize data. I have also learned it during the Database course on campus, and I quite understand how to use and work this SQL, and I also quite understand the concepts of databases, DDL, and DML."; 
} 

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 150
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 150
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 150
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 150
});

// Sroll Disbler
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}