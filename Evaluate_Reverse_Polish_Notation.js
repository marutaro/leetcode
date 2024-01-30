/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let c of tokens) {
        if (c === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (c === "-") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        } else if (c === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (c === "/") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first / second));
        } else {
            stack.push(parseInt(c));
        }
    }

    return stack[0];    
};
