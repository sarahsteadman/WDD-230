const file = './directory.json';

const displayBusinesses = (businesses) =>{
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        image.setAttribute('src', business.img);
        image.setAttribute('alt',  `image of ${business.name}`);
        image.setAttribute('loading', 'lazy');

        h2.textContent = `${business.name}`
        p.textContent = `Address: ${business.address}`
        p2.textContent = `Phone: ${business.phone}`
        p3.textContent = `Email: ${business.email}`

        card.appendChild(h2);
        card.appendChild(image)
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        cards.appendChild(card);
    })
}

async function getbusinessData() {
    const response = await fetch(file);
    const data = await response.json();
    console.table(data.businesses); 
    displayBusinesses(data.businesses);
  }
  
  getbusinessData();