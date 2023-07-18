const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

document.querySelector("#update").innerHTML = document.lastModified;
  