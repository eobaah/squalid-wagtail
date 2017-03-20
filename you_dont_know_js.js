/* Practice

There is absolutely no substitute for practice in learning programming. No amount of articulate writing on my part is alone going to make you a programmer.

With that in mind, let's try practicing some of the concepts we learned here in this chapter. I'll give the "requirements," and you try it first. Then consult the code listing below to see how I approached it.

Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
*/

const taxRate = 0.09;
const phonePrice = 700;
const accessoryPrice = 50;
const spendingThreshld = 800;
var accountBalance = 10000;
var count = 0;
var transaction = ( phonePrice + accessoryPrice );
transaction = transaction + taxPaid(transaction);

function taxPaid(amount) {
  return amount * taxRate;
}

if( phonePrice > spendingThreshld ) {
  "You need to save that money fool!"
} else if ( transaction > accountBalance ) {
  "You cannot afford this playa. You only have $" + Math.abs(transaction-accountBalance).toFixed(2) + " to play with"
} else {
  while ( transaction <= accountBalance ) {
    accountBalance -= transaction
    count++
  }
  "You purchased " + count + " phone(s) and now need an extra $" + (transaction-accountBalance).toFixed(2) + " to purchase the next one";
}
