# Money-track
Here we are going to discuss the basic process and its basic implementation.

1)Log in/Signup page 
This will be the first page of our website in which if user are visiting the website first time then do Sign Up Otherwise do sign in.
->For designing the page we will be using HTML CSS JAVASCRIPT
->We are going to create two component former one for sign up form and and later for login form

->html code
<!DOCTYPE html>
<html>
<head>
  <title>Login & Sign Up Page</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="form-container">
      <h2>Login</h2>
      <form id="login-form">
        <input type="email" id="login-email" placeholder="Email" required>
        <input type="password" id="login-password" placeholder="Password" required>
        <button type="submit">Log In</button>
      </form>
    </div>
    <div class="form-container">
      <h2>Sign Up</h2>
      <form id="signup-form">
        <input type="text" id="signup-username" placeholder="Username" required>
        <input type="email" id="signup-email" placeholder="Email" required>
        <input type="password" id="signup-password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>


->Javascript code
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;
  
  // Perform login logic here, e.g., API call or form validation
  console.log("Email:", email);
  console.log("Password:", password);
  
  // Reset form fields
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("signup-username").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  
  // Perform sign-up logic here, e.g., API call or form validation
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  
  // Reset form fields
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
});



2)In second page we will do all the process like Add amount,Transaction description,Graph,Show total amount

->For adding amount(total income)We are going to take single variable and update it each transaction
->For each transation we will generat unique transaction Id.It will help for easy the search and delete operation
->Basic javascript code
/*********
function generateTransactionId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
*****/




->Now we are going to process the transaction by user.In which we are going to show the Transction History and the percentage of amount
->
function addEditTransaction(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values from main page
  const transactionId = document.getElementById('transactionIdInput').value;
  const description = document.getElementById('descriptionInput').value;
  const amount = parseFloat(document.getElementById('amountInput').value);

  // Create transaction object
  const transaction = {
    id: transactionId || generateTransactionId(),
    description,amount
  };

  // Check if the transaction is new or being edited
  const existingTransaction = transactions.find(t => t.id === transaction.id);
  if (existingTransaction) {
    // Update existing transaction
    existingTransaction.description = transaction.description;
    existingTransaction.amount = transaction.amount;
  } else {
    // Add new transaction
    transactions.push(transaction);
  }

  // Clear input fields
  document.getElementById('transactionIdInput').value = '';
  document.getElementById('descriptionInput').value = '';
  document.getElementById('amountInput').value = '';

  // Update transaction list and total balance
  updateTransactionList();
  updateTotalBalance();
}



->If someone added the wrong transaction details they can delete the transaction.
Basic javascript code
// Function to delete a transaction
function deleteTransaction(transactionId) {
  // Find index of the transaction in the array
  const transactionIndex = transactions.findIndex(t => t.id === transactionId);

  // Remove the transaction from the array
  if (transactionIndex !== -1) {
    transactions.splice(transactionIndex, 1);
  }

  // Update transaction list and total balance
  updateTransactionList();
  updateTotalBalance();
}


->In the upper function we have used the updateTransactionList and updateTotalBalance functions so we have to write it.


->If anyone has written the wrong description and the amount added is the same or visa versa then they edit the transaction details

Basic javascript code

// Function to edit a transaction
function editTransaction(transactionId) {
  // Find the transaction in the array
  const transaction = transactions.find(t => t.id === transactionId);

  // Fill the form with transaction details
  document.getElementById('transactionIdInput').value = transaction.id;
  document.getElementById('descriptionInput').value = transaction.description;
  document.getElementById('amountInput').value = transaction.amount.toFixed(2);
}

->Now we are going to form the graph of Transaction history so that it will be visible 

->for that basic javascript code
// Graph data
const graphData = [
  { label: 'A', value: 30, color: '#ff0000' },
  { label: 'B', value: 20, color: '#00ff00' },
  { label: 'C', value: 50, color: '#0000ff' },
];
//graph array data can be modified as a user make the transaction

// Calculate total value
const totalValue = graphData.reduce((sum, data) => sum + data.value, 0);

// Get canvas element and context
const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

// Set center and radius of the graph
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(centerX, centerY) - 10;

// Set starting angle
let startAngle = 0;

// Draw the graph
graphData.forEach(data => {
  const { value, color } = data;
  const endAngle = startAngle + (2 * Math.PI * value / totalValue);

  // Draw the arc
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.lineTo(centerX, centerY);
  ctx.fill();
  ctx.closePath();

  // Update start angle for the next arc
  startAngle = endAngle;
});
//It will make a graph of all the transactions history
