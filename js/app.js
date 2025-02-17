let header = document.querySelector("header");
let navigation = document.querySelector("nav");
let menu = document.querySelector("ul");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let mobileWidth = 600;




hamburgerIcon.addEventListener("click", () => {
    navigation.classList.toggle("hidden");
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "inline-block";
})
crossIcon.addEventListener("click",()=>{
    navigation.classList.toggle("hidden");
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "inline-block";
});

function updateNavVisibility(){
    let screenWidth = document.documentElement.clientWidth; //should be defined in the function
    if (screenWidth > 600){
        navigation.classList.remove("hidden");
    }
    else{
        navigation.classList.add("hidden");
        crossIcon.style.display = "none";
        hamburgerIcon.style.display = "inline-block";
    }
}

window.addEventListener('resize', updateNavVisibility);

updateNavVisibility(); //upon reload