function bankApp() {
  let input = '';
  let balance = 1000;
  while (input.toLowerCase() != 'q') {
    input = prompt('Enter one of the following: \nW: Withdraw\nD: Deposit\nB: View Balance\nQ: Quit');
    switch (input.toLowerCase()) {
      case 'w':
        console.log('Withdraw Money');
        let withdrawal = prompt('How much would you like to withdraw?');
        balance -= withdrawal;
        break;
      case 'd':
        console.log('Deposit Money');
        let deposit = prompt('How much are you depositing?');
        balance += Number(deposit);
        break;
      case 'b':
        console.log('View Balance');
        alert('Current Balance: ' + balance);
        break;
      case 'q':
        break;
      default:
        console.log('Invalid option choice');
        alert('Invalid option choice!')
        break;
    }
  }

  console.log('Thank you for using BankApp! Goodbye.');
}
