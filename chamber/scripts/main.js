
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

//////////////////////////////////////////////////Cards///////////////////////////////////////////////////////////
const file = 'scripts/directory.json';
let cards = document.querySelector('#spotlights');

const displayBusinesses = (businesses) =>{

    businesses.sort(() => Math.random() - 0.5);

    spotlights = [businesses[0], businesses[1], businesses[2]];

    spotlights.forEach((business) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let h5 = document.createElement('h5');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        

        image.setAttribute('src', business.img);
        image.setAttribute('alt',  `image of ${business.name}`);
        image.setAttribute('loading', 'lazy');
        
        h5.textContent = `${business.name}`
        p2.textContent = `${business.phone}`
        p3.textContent = `${business.email}`
        p4.textContent = `${business.website}`
        
        card.appendChild(h5);
        card.appendChild(image)
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        cards.appendChild(card);
        
    })
}

async function getbusinessData() {
    const response = await fetch(file);
    const data = await response.json();
    
    spotlights = data.businesses.filter(b => b.membership == "Gold" || b.membership == "Silver")
    
    displayBusinesses(spotlights);
  }
  
  getbusinessData();