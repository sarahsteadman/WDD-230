let images = document.querySelectorAll("img[data-src]");

function loadImages(img){
    const src = img.getAttribute("data-src")
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
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
}, imgOptions);


images.forEach(image => {
    imgObserver.observe(image);
});