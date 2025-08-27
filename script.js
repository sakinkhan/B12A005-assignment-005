console.log('Script.js linked successfully!')
// On clicking a card's Call Button, following actions will happen:
// Show an alert with a message including the service name and number
// Each call will cut 20 coins. Reduce Coin after each click.
// If coins are less than 20, show a relevant alert and terminate the process.
// Add this service into the Call History section with:
// Service name
// Service number

const callButtons = document.getElementsByClassName('call-btn');
let serviceNames = document.getElementsByClassName('service-name');
let serviceNumbers = document.getElementsByClassName('service-number');
console.log(serviceNames.length, serviceNumbers.length, callButtons.length);

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener('click', function () {
    const name = serviceNames[i] ? serviceNames[i].innerText : 'N/A';
    const number = serviceNumbers[i] ? serviceNumbers[i].innerText : 'N/A';
    alert(`${name} and ${number}`);
    console.log(name, number);
  });
}


