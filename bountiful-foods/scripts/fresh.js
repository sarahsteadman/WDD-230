// Supply Fruit List
url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
fruits = [];

async function getData(){
  const response = await fetch(url);
  return await response.json();
}
async function getfruits() {
  let data = await getData();
  let f1 = document.querySelector("#f1");
  let f2 = document.querySelector("#f2");
  let f3 = document.querySelector("#f3");

  data.forEach((i) => {
    let option1 = document.createElement("option");
    option1.value = i.name;
    option1.textContent = i.name;
    f1.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = i.name;
    option2.textContent = i.name;
    f2.appendChild(option2);

    let option3 = document.createElement("option");
    option3.value = i.name;
    option3.textContent = i.name;
    f3.appendChild(option3);
  });

  return data;
}
let data = getfruits();

let cards = document.querySelector("#cards");

document
.querySelector("#smoothie-form")
.addEventListener("submit", function (event) {
    let s = Number(window.localStorage.getItem("smoothies")) || 0;
    localStorage.setItem("smoothies", s + 1);
    console.log(Number(window.localStorage.getItem("smoothies")));
    event.preventDefault();
    
    let fname = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let cell = document.querySelector("#cell").value;
    let f1 = document.querySelector("#f1").value;
    let f2 = document.querySelector("#f2").value;
    let f3 = document.querySelector("#f3").value;
    let instructions = document.querySelector("#instructions").value;

    let card = document.createElement("section");
    let title = document.createElement("h4");
    let recipe = document.createElement("p");
    let info = document.createElement("p");
    let date = document.createElement("p");
    let special = document.createElement("p");
    let blender = document.createElement("img");
    
    let blenders = ["blue", "green", "yellow", "purple"];
    blenders.sort(() => Math.random() - 0.5);
    color = blenders[0];
    
    blender.setAttribute("src", `images/${color}-blender.png`);
    blender.setAttribute("alt", `blender`);
    blender.setAttribute("loading", "lazy");
    
    cell = cell.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    recipe.classList.add('big');
    let today = new Date();

    title.textContent = `${fname}'s Smoothie`;
    info.textContent = `${email} | ${cell}`;
    date.textContent = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    recipe.textContent = `${f1} | ${f2} | ${f3}`;
    special.textContent = instructions;
    
    card.appendChild(title);
    card.appendChild(info);
    card.appendChild(date);
    if (instructions.length > 0){
      card.appendChild(special);
    }
    card.appendChild(blender);
    card.appendChild(recipe);
    getNutrition(f1, f2, f3).then(nutritionBlock => {
      card.appendChild(nutritionBlock);
    }).catch(error => {
      console.log(error);
    });
    
    cards.appendChild(card);
    
    card.scrollIntoView();
    cards.classList.remove("empty");
  });
  
  async function getNutrition(f1,f2,f3){
    let data = await getData();
    let fruit1 = 1;
    let fruit2 = 1;
    let fruit3 = 1;
    
    data.forEach((i) => {
      if (i.name == f1){
        fruit1 =i.nutritions;
      }
      if (i.name == f2){
        fruit2 =i.nutritions;
      }
      if (i.name == f3){
        fruit3 =i.nutritions;
      }
    });

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p'); 
    let p4 = document.createElement('p');
    let p5 = document.createElement('p'); 
    let nutritionBlock = document.createElement('div'); 

    p1.textContent = `Carbohydrates: ${(fruit1.carbohydrates + fruit2.carbohydrates + fruit3.carbohydrates).toFixed(2)}`
    p2.textContent = `Protein: ${(fruit1.protein + fruit2.protein + fruit3.protein).toFixed(2)}`
    p3.textContent = `Fat: ${(fruit1.fat + fruit2.fat + fruit3.fat).toFixed(2)}`
    p4.textContent = `Calories: ${(fruit1.calories + fruit2.calories + fruit3.calories).toFixed(0)}`
    p5.textContent = `Sugar: ${(fruit1.sugar + fruit2.sugar + fruit3.sugar).toFixed(2)}`

    nutritionBlock.appendChild(p1);
    nutritionBlock.appendChild(p2);
    nutritionBlock.appendChild(p3);
    nutritionBlock.appendChild(p4);
    nutritionBlock.appendChild(p5);

    return nutritionBlock;
  }
