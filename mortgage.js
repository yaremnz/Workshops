/*- A mortgage calculator - it is used to calculate out how much a monthly payment for a loan
would be (minus any insurance or taxes), as well as how much interest you would pay over the
life of the loan.
a. It would accept the principal, interest rate, and loan length from the user
b. It would display the expected monthly payment and total interest paid
Example: A $53,000 loan at 7.625% interest for 15 years would have a $495.09/mo
payment with a total interest of $36,115.99

CTRL-F5 or CTRL+FN+F5 */

function getPayment(principleAmount, percentageRate, numberOfMonths){
    // P ((r (1+r)n) / ((1+r)n-1))
    r = percentageRate / 12
    n = numberOfMonths
    P = principleAmount
    output = P * ((r*(1+r) ** n) / ((1+r) ** n - 1))
    return output;
}

result = getPayment(53000, 7.625 / 100, 15 * 12)
console.log(result)

result = getPayment(10000, 3.5 / 100, 60)
console.log(result)
