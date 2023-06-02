// Lazy Loading
let images = document.querySelectorAll("img[data-src]");

function loadImages(img){
    const src = img.getAttribute("data-src")
    if(!src){
        return;
    }
    img.src = src;
}
const imgO = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            loadImages(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgO);


images.forEach(image => {
    imgObserver.observe(image);
});

// Days since last visit
const msToDays = 84600000;
let paragraph = document.querySelector("#visit");
let today = Date.now();
let lastVisit = Number(window.localStorage.getItem("visit-day")) || 0;

if (lastVisit === 0){
    paragraph.innerHTML = "This is your first time visiting our page!";
}
else {
    let difference = Math.round((today - lastVisit) / msToDays);
    paragraph.innerHTML = "It has been " + difference + " days since your last visit!";
}

localStorage.setItem("visit-day", today);