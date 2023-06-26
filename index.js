let transactions = [];

// Function to generate a unique transaction ID
function generateTransactionId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to add or edit a transaction
function addEditTransaction(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values from the form
  const transactionId = document.getElementById('transactionIdInput').value;
  const description = document.getElementById('descriptionInput').value;
  const amount = parseFloat(document.getElementById('amountInput').value);
  const currency = document.getElementById('currencyInput').value;

  // Create transaction object
  const transaction = {
    id: transactionId || generateTransactionId(),
    description,
    amount,
    currency
  };

  // Check if the transaction is new or being edited
  const existingTransaction = transactions.find(t => t.id === transaction.id);
  if (existingTransaction) {
    // Update existing transaction
    existingTransaction.description = transaction.description;
    existingTransaction.amount = transaction.amount;
    existingTransaction.currency = transaction.currency;
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

// Function to update the transaction list
function updateTransactionList() {
  const tableBody = document.getElementById('transactionTableBody');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Iterate over transactions and add rows to the table
  transactions.forEach((transaction) => {
    const row = document.createElement('tr');

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = transaction.description;

    const amountCell = document.createElement('td');
    amountCell.textContent = transaction.amount.toFixed(2);

    const currencyCell = document.createElement('td');
    currencyCell.textContent = transaction.currency;

    const actionCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTransaction(transaction.id));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTransaction(transaction.id));

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);

    row.appendChild(descriptionCell);
    row.appendChild(amountCell);
    row.appendChild(currencyCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// Function to edit a transaction
function editTransaction(transactionId) {
  // Find the transaction in the array
  const transaction = transactions.find(t => t.id === transactionId);

  // Fill the form with transaction details
  document.getElementById('transactionIdInput').value = transaction.id;
  document.getElementById('descriptionInput').value = transaction.description;
  document.getElementById('amountInput').value = transaction.amount.toFixed(2);
  document.getElementById('currencyInput').value = transaction.currency;
}

// Function to update the total balance
function updateTotalBalance() {
  const totalBalanceElement = document.getElementById('totalBalance');

  // Calculate the total balance in USD
  const totalBalanceUSD = transactions.reduce((total, transaction) => {
    if (transaction.currency === 'USD') {
      return total + transaction.amount;
    } else if (transaction.currency === 'EUR') {
      return total + transaction.amount * 1.13; // Assume EUR to USD conversion rate is 1.13
    } else if (transaction.currency === 'INR') {
      return total + transaction.amount * 0.014; // Assume INR to USD conversion rate is 0.014
    }
    return total;
  }, 0);

  totalBalanceElement.textContent = `Total Balance: $${totalBalanceUSD.toFixed(2)}`;
}

// Attach event listener to the form submit event
const transactionForm = document.getElementById('transactionForm');
transactionForm.addEventListener('submit', addEditTransaction);

// Attach event listener to the cancel button click event
const cancelButton = document.getElementById('c-btn');
cancelButton.addEventListener('click', () => {
  document.getElementById('transactionIdInput').value = '';
  document.getElementById('descriptionInput').value = '';
  document.getElementById('amountInput').value = '';
});

// Initial update of the transaction list and total balance
updateTransactionList();
updateTotalBalance();
