/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    if (s.length < k) {
        return s;
    }

    const st = [];

    for (const c of s) {
        if (st.length && c === st[st.length - 1][0]) {
            st[st.length - 1][1]++;

            if (st[st.length - 1][1] === k) {
                st.pop();
            }
        } else {
            st.push([c, 1]);
        }
    }

    let res = "";
    for (const [char, count] of st) {
        res += char.repeat(count);
    }

    return res;    
};
