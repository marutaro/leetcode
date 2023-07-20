/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const res = []
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]
        const cur = asteroids[i]
        
        if (!res.length || last < 0 || cur > 0) {
            res.push(cur)
        } else if (-cur == last) {
            res.pop()
        } else if (-cur > last) {
            res.pop()
            i--
        }
    }
    
    return res  
};
