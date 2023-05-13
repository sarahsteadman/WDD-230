
const datefield = document.querySelector("#time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
    );
    datefield.textContent = fulldate;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});
    
document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#update").innerHTML = document.lastModified;