
const datefield = document.querySelector("#time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
    );
    datefield.textContent = fulldate;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
    console.log("I hear you!");
});
    
document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#update").innerHTML = document.lastModified;