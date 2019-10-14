//alert("publicBurgers");

const getSubmit = document.querySelector("#submit");

getSubmit.addEventListener("click", function(event) {
  event.preventDefault();
  var burgerName = document.querySelector("#inpAddBurger").value.trim();
  if (burgerName == "") {
    alert("You need to tell us what you'd like to order!");
  } else {
    let submitNewBurger = { burger_name: burgerName };
    console.log(submitNewBurger);

    $.ajax("/api/newBurger", {
      type: "POST",
      data: submitNewBurger
    }).then(function(resp) {
      // reload the page to display new burger
      console.log(resp);
      location.reload();
    });
  }
});

const devourBurger = document.querySelectorAll(".btnUndev")
devourBurger.forEach(function(element){ 
    element.addEventListener("click",function(event){
        event.preventDefault();
        let submitDevour = {burger_name: element.innerHTML};
        console.log(submitDevour);

        $.ajax("/api/devour", {
            type: "PUT",
            data: submitDevour
        })
        .then(function(resp){
          console.log(resp)
          location.reload()
        })
        .catch(function(err){
          console.log(err)
        });
    })
});