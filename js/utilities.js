
function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const inputValue=document.getElementById(id).innerText
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function showSectionById(id) {
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the curent clicking section by removing hidden class
    document.getElementById(id).classList.remove('hidden')
}