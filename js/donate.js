// onclick go to Blog
document.getElementById('blog-btn').addEventListener('click',function() {
    window.location.href='./blog.html';
})
// For Noakhali Fund Donation
document.getElementById('btn-noakhali').addEventListener('click', function(event) {
    event.preventDefault();
    
    const inputNoakhali = getInputFieldValueById('input-noakhali');
    
    // Validation
    if (isNaN(inputNoakhali) || inputNoakhali < 0) { 
        alert('Failed to Donate Money. Please insert a proper amount you want to donate.');
        return;
    }
    
    const fundNoakhali = getTextFieldValueById('fund-noakhali');
    const balance = getTextFieldValueById('balance');
    
    if (inputNoakhali > balance) {
        alert("You do not have enough money to donate.");
        return;
    }
    
    const newFundNoakhali = inputNoakhali + fundNoakhali;
    const newBalance = balance - inputNoakhali;
    
    document.getElementById('fund-noakhali').innerText = newFundNoakhali;
    document.getElementById('balance').innerText = newBalance;

    // Save to history of transaction
    const div = document.createElement('div');
    div.classList.add('border-2', 'p-4', 'rounded-lg');
    div.innerHTML = `
        <h3 class="text-2xl font-semibold">Donated ${inputNoakhali} TK for Flood Relief in Noakhali, Bangladesh</h3>
        <p class="text-md text-gray-600">Time: ${new Date}</p>
    `;
    
    document.getElementById('transaction-container').appendChild(div);

    alert("Congratulations! You have donated for flood relief in Noakhali, Bangladesh.");
});

// For Injured Fund Donation
document.getElementById('btn-injured').addEventListener('click', function(event) {
    event.preventDefault();
    
    const inputInjured = getInputFieldValueById('input-injured');
    // Validation
    if (isNaN(inputInjured) || inputInjured < 0) { 
        alert('Failed to Donate Money. Please insert a proper amount you want to donate.');
        return;
    }
    
    const fundInjured = getTextFieldValueById('fund-injured');
    const balance = getTextFieldValueById('balance');
    
    if (inputInjured > balance) {
        alert("You do not have enough money to donate.");
        return;
    }
    
    const newFundInjured = inputInjured + fundInjured;
    const newBalance = balance - inputInjured;
    
    document.getElementById('fund-injured').innerText = newFundInjured;
    document.getElementById('balance').innerText = newBalance;

    // Save to history of transaction
    const div = document.createElement('div');
    div.classList.add('border-2', 'p-4', 'rounded-lg');
    div.innerHTML = `
        <h3 class="text-2xl font-semibold">Donated ${inputInjured} TK for Aid to Injured in Quota Movement</h3>
        <p class="text-md text-gray-600">Thank you for your generosity!</p>
    `;
    
    document.getElementById('transaction-container').appendChild(div);

    alert("Congratulations! You have donated aid for the Injured in the Quota Movement.");
});



// For Feni People Fund Donation; 
document.getElementById('btn-feni').addEventListener('click', function(event) {
    event.preventDefault();
    const inputFeni = getInputFieldValueById('input-feni');
    // validation
    if (isNaN(inputFeni) || inputFeni < 0) { 
        alert('Failed to Donate Money. Please insert a proper amount you want to donate.');
        return;
    } 
    const fundFeni = getTextFieldValueById('fund-feni');
    const balance = getTextFieldValueById('balance');
    if (inputFeni > balance) {
        alert("You do not have enough money to donate.");
        return;
    }
    const newFundFeni = inputFeni + fundFeni;
    const newBalance = balance - inputFeni;
    document.getElementById('fund-feni').innerText = newFundFeni;
    document.getElementById('balance').innerText = newBalance;

    // Save to history of transaction
    const div = document.createElement('div');
    div.classList.add('border-2', 'p-4', 'rounded-lg');
    div.innerHTML = `
        <h3 class="text-2xl font-semibold">Donated ${inputFeni} TK for Flood Relief in Feni, Bangladesh</h3>
        <p class="text-md text-gray-600">Thank you for your generosity!</p>
    `;
    document.getElementById('transaction-container').appendChild(div);

    alert("Congratulations! You have donated for flood relief in Feni, Bangladesh.");
});



