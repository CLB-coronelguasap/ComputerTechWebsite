// This file contains JavaScript code to enhance the functionality of the website using Material Web components.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const favoriteColor = document.querySelector('md-outlined-text-field').value;
    const selectedRadio = document.querySelector('md-radio:checked');

    if (selectedRadio) {
      alert(`Your favorite color is ${favoriteColor} and you selected ${selectedRadio.label}.`);
    } else {
      alert('Please select an option.');
    }
  });
});