/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    if (colors.length <= 2) {
        return false;
    }

    let aliceTurn = 0;
    let bobTurn = 0;

    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
            if (colors[i] === 'A') {
                aliceTurn++;
            } else {
                bobTurn++;
            }
        }
    }

    return aliceTurn > bobTurn;    
};
