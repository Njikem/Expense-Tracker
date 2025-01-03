let expenses= [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');


addBtn.addEventListener('click', function(){

    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category ===''){
        alert('Please select a category');
        return;
    }

    if(isNaN(amount) || amount<=0) {
        alert('please enter a valid amount');
        return;
    }

    if(date === ''){
        alert('please select a date');
        return;
    }
    
//Add expense to array and update total
  expenses.push({category, amount, date});
    
    totalAmount += amount;

    totalAmountCell.textContent = totalAmount;

    //Adding a new role on the expenses table

    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    

    //Create a new delete button

    const deleteBtn = document.createElement('button');

    //User remove the expenses-list from expenses table when the user click delete
     deleteBtn.textContent = 'Delete';
     deleteBtn.classList.add('delete-btn');

     deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);
       
        //update total amount
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        //remove row from expense table
        expensesTableBody.removeChild(newRow);

     });

     //Updating the information on the expense table

     const expense = expenses[expenses.length -1];

     categoryCell.textContent = expense.category;
     amountCell.textContent = expense.amount;
     dateCell.textContent = expense.date;
     deleteCell.appendChild(deleteBtn);
    
});




//Update Expense table on page load. that is when you page load the browser you update the expense table

//this loop is use to update the expenses table
for(const expense of expenses){

    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    //adding a new row to the expenses table

    
    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    

    //Create a new delete button

    const deleteBtn = document.createElement('button');


    //User remove the expenses-list from expenses table when the user click delete
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
       expenses.splice(expenses.indexOf(expense), 1);
      
       //update total amount
       totalAmount -= expense.amount;
       totalAmountCell.textContent = totalAmount;

       //remove row from expense table
       expensesTableBody.removeChild(newRow);
      

    });


     //Updating the information

     categoryCell.textContent = expense.category;
     amountCell.textContent = expense.amount;
     dateCell.textContent = expense.amount;
     deleteCell.appendChild(deleteBtn);
    

    
}