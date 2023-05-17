console.log("well if I was a chicken...");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function(){
    if(input.value != ""){
        const list2 = document.createElement("li");
        list2.textContent = input.value;
        
        const del = document. createElement("button");
        del.textContent = "X";
        
        list2.appendChild(del);
        list.appendChild(list2);

        del.addEventListener('click', function(){
            list.removeChild(list2)
        })

        focus(input);
        input.value = "";
    }})
