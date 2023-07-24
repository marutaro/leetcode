function myPow(x, n) {
    function calc_power(x, n) {
        if (x === 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }

        let res = calc_power(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) {
            return res * x;
        }

        return res;
    }

    let ans = calc_power(x, Math.abs(n));

    if (n >= 0) {
        return ans;
    }

    return 1 / ans;
}
