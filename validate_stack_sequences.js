/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const st = [];
    let i = 0;

    for (const n of pushed) {
        st.push(n);

        while (st.length > 0 && st[st.length - 1] === popped[i]) {
            st.pop();
            i++;
        }
    }

    return i === popped.length;    
};
