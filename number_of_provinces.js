/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Set();
    let provinces = 0;
    
    const dfs = (city) => {
        visited.add(city);
        for (let cur = 0; cur < isConnected[city].length; cur++) {
            const connected = isConnected[city][cur];
            if (connected && !visited.has(cur)) {
                dfs(cur);
            }
        }
    };
    
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            dfs(i);
            provinces += 1;
        }
    }
    
    return provinces;    
};
