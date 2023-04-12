/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const components = path.split("/");
    const st = [];

    for (const comp of components) {
        if (comp === "" || comp === ".") {
            continue;
        }

        if (comp === "..") {
            if (st.length) {
                st.pop();
            }
        } else {
            st.push(comp);
        }
    }

    return "/" + st.join("/");    
};
