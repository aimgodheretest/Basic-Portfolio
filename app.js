let darkMode = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

darkMode.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typingEffect = new Typed('#text',{
    strings:['Murli Kumar','Front-End Engineer','Web Developer'],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    bachDelay:1000
})