let itemSelected = [];
  
let itemlist =[{}, {name: "Espresso Martini", price: 999, quantity: 0},
                 {name:"Appreciation pack", price: 2456 , quantity: 0},
                 {name: "Gin cherry Sour", price: 859, quantity: 0},
                 {name: "old fashioned Espresso", price: 9599, quantity: 0},
                 {name: "Cosmopolitan Mocktail", price: 959, quantity: 0},
                 {name: "Celebration pack", price: 999.00, quantity:0},
                 {name: "Assorted Cocktail", price: 799, quantity: 0}]

function additem(event){
    event.preventDefault();
    const item = event.target;
    const itemId = item.getAttribute('data-id');
    itemlist[itemId].quantity++;
    
    console.log( itemlist );
}
// Wait for the DOM to be fully loaded before executing JavaScript code
document.addEventListener("DOMContentLoaded", function additem() {
  // Find all the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Add a click event listener to each "Add to Cart" button
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function additem(event) {
            event.preventDefault();
      const productId = button.getAttribute("data-id");
      alert("Added product with ID " + productId + " to the cart.");
    });
  });
});


