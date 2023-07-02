// ///////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const cards = document.querySelector('div.cards');

gridbutton.addEventListener("click", displayGrid);
listbutton.addEventListener("click", displayList);

function displayMethod(d1,d2) {
	cards.classList.add(d1);
	cards.classList.remove(d2);
}
function displayList(){displayMethod("list","grid")}
function displayGrid(){displayMethod("grid","list")}

//////////////////////////////////////////////////Cards///////////////////////////////////////////////////////////
const file = 'scripts/directory.json';

const displayBusinesses = (businesses) =>{

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        

        image.setAttribute('src', business.img);
        image.setAttribute('alt',  `image of ${business.name}`);
        image.setAttribute('loading', 'lazy');
        
        p.setAttribute('class', 'disapear');
        p4.setAttribute('class', 'disapear');
        
        
        h2.textContent = `${business.name}`
        p.textContent = `${business.address}`
        p2.textContent = `${business.phone}`
        p3.textContent = `${business.email}`
        p4.textContent = `${business.website}`
        
        card.appendChild(h2);
        card.appendChild(image)
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        cards.appendChild(card);
        
    })
}

async function getbusinessData() {
    const response = await fetch(file);
    const data = await response.json();
    displayBusinesses(data.businesses);
  }
  
  getbusinessData();