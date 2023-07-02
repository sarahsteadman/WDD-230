
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
});
    
document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#update").innerHTML = document.lastModified;

const banner = document.querySelector('#banner');
today = now.getDay();

if(today == 2 || today == 1){
    banner.classList.toggle('show');
}

