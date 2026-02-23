/* REAL LIFE APPLICATION FLOW */

// ERROR HANDLING + VALIDATION + ARRAYS + STRINGS + DATE + TIME

try {

  console.log("---- LOGIN SYSTEM ----");

  // VALIDATION
  let username = "sidra";
  let password = "12345";

  if(username === "" || password === ""){
    throw new Error("Login fields cannot be empty");
  }

  console.log("Login Successful:", username.toUpperCase());


  console.log("\n---- PRODUCT SEARCH ----");

  // STRING OPERATION
  let searchProduct = "laptop";
  console.log("Searching for:", searchProduct.toUpperCase());


  console.log("\n---- SHOPPING CART ----");

  // ARRAYS
  let cart = ["Laptop", "Mouse", "Keyboard"];
  console.log("Items in cart:", cart);
  console.log("Total items:", cart.length);


  console.log("\n---- PAYMENT SYSTEM ----");

  let balance = 20000;
  let totalAmount = 25000;

  // ERROR HANDLING
  if(totalAmount > balance){
    throw new Error("Payment failed: Insufficient balance");
  }

  console.log("Payment successful");


  console.log("\n---- ORDER BOOKING ----");

  // DATE & TIME
  let now = new Date();
  console.log("Order Date:", now.toDateString());
  console.log("Order Time:", now.toLocaleTimeString());


} catch(error){

  console.log("\n⚠ SYSTEM ERROR:");
  console.log(error.message);

} finally {

  console.log("\nExecution finished");
}