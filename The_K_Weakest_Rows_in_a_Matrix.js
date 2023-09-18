/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let rowStrengthSet = new Set();

    for (let rowIndex = 0; rowIndex < mat.length; rowIndex++) {
        let oneCount = 0;

        for (let colIndex = 0; colIndex < mat[rowIndex].length; colIndex++) {
            if (mat[rowIndex][colIndex] === 1) {
                oneCount++;
            } else {
                break;
            }
        }

        rowStrengthSet.add([oneCount, rowIndex]);
    }

    const sortedRows = Array.from(rowStrengthSet);
    sortedRows.sort((a, b) => a[0] - b[0]);

    let weakestRowIndices = [];
    for (let i = 0; i < k; i++) {
        weakestRowIndices.push(sortedRows[i][1]);
    }

    return weakestRowIndices;    
};
