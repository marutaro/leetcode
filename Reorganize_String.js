/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const charFreq = {};
    for (const c of s) {
        charFreq[c] = (charFreq[c] || 0) + 1;
    }
    
    const maxHeap = Object.entries(charFreq).map(([char, freq]) => [-freq, char]);
    makeHeap(maxHeap);

    const res = [];
    let prevFreq = 0, prevChar = '';

    while (maxHeap.length) {
        const [freq, char] = popHeap(maxHeap);
        res.push(char);

        if (prevFreq < 0) {
            maxHeap.push([prevFreq, prevChar]);
            makeHeap(maxHeap);
        }
        
        prevFreq = freq + 1;
        prevChar = char;
    }
    
    if (res.length !== s.length) {
        return '';
    }
    
    return res.join('');    
};

function makeHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function popHeap(arr) {
    const top = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    heapify(arr, 0);
    return top;
}

function heapify(arr, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < arr.length && arr[left][0] < arr[largest][0]) {
        largest = left;
    }

    if (right < arr.length && arr[right][0] < arr[largest][0]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest);
    }
}
