/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let res = 0;
    let customerLeft = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            customerLeft++;

            if (customerLeft > 0) {
                res = i + 1;
                customerLeft = 0;
            }
        } else {
            customerLeft--;
        }
    }

    return res;    
};
