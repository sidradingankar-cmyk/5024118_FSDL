let accounts = [];

function createAccount(){

  try{

    let name = prompt("Enter account holder name:");
    let deposit = parseFloat(prompt("Enter initial deposit:"));

    if(!name || isNaN(deposit)){
      throw new Error("Invalid input");
    }

    let account = {
      id: accounts.length + 1,
      name,
      balance: deposit
    };

    accounts.push(account);

    console.log("Account created:", account);

  }catch(error){
    console.log("Error:", error.message);
  }
}

function depositMoney(){

  let id = parseInt(prompt("Enter account ID:"));
  let amount = parseFloat(prompt("Enter deposit amount:"));

  let acc = accounts.find(a => a.id === id);

  if(acc){
    acc.balance += amount;
    console.log("New balance:", acc.balance);
  }else{
    console.log("Account not found");
  }
}

createAccount();
depositMoney();