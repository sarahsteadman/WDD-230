let position = document.querySelector('#position-input');

position.addEventListener("input", (event) => {
  if (!(/^[A-Za-z\s\-]*$/.test(position.value))) {
      console.log("invalid")
      console.log(position.value);
      position.setCustomValidity("This field only accepts letters, spaces and dashes.");
    } else {
        console.log("valid");
        console.log(position.value);
        position.setCustomValidity("");
  }
});