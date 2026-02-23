try {
  let username = "sidra07";
  
  if (username === "") {
    throw new Error("Username cannot be empty");
  }

  console.log("Login Successful");
}
catch (error) {
  console.log("Login Error:", error.message);
}