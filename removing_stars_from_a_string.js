/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let st = [];

    for (let c of s) {
        if (c === '*') {
            st.pop();
        } else {
            st.push(c);
        }
    }

    return st.join('');    
};
