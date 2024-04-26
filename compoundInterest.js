/*- A calculator that determines the future value of a one-time deposit assuming compound
interest - it is used to help you decide how much a CD will be worth when it matures
2
a. It would accept the deposit, interest rate, and number of years from the user
b. It would display the future value and the total interest earned
Example: If you deposit $1,000 in a CD that earns 1.75% interest and matures in 5 years,
your CD's ending balance will be $1,092.62 and you would have earned $92.62 in interest

Note: The numbers above assume daily compounding 


*/

function getPayment(deposit, interestRate, numberOfYears){
    /* output = P(1+r/n)(nt) */

    p = deposit;
    t = numberOfYears;
    r = interestRate;
    const n = 365;
    

    //Solution for the Amount 
    //output = p * (1+(r/n)) ** (n * t)
    output = p * Math.pow(1+r/n,(n * t))
    return output;
 
}

function getTotalInterest(deposit, total)
{
    p = deposit;
    t = total;
 
    output = total - deposit
    return output;
}

rate = getTotalInterest(1000,1092.44)
console.log(rate)
result = getPayment(1000, 1.75 / 100, 5)
console.log(result)

console.log()
