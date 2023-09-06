/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    // Step 1: Calculate the length of the linked list
    let length = 0;
    let current = head;
    while (current) {
        length += 1;
        current = current.next;
    }

    // Step 2: Determine the size of each part
    const partSize = Math.floor(length / k);
    const largerParts = length % k;

    // Initialize an array to store the results
    const result = [];

    // Step 3: Split the linked list into parts
    current = head;
    for (let i = 0; i < k; i++) {
        const sublistSize = i < largerParts ? partSize + 1 : partSize;
        if (sublistSize === 0) {
            result.push(null);
        } else {
            const sublistHead = current;
            for (let j = 0; j < sublistSize - 1; j++) {
                current = current.next;
            }
            const nextNode = current.next;
            current.next = null;
            result.push(sublistHead);
            current = nextNode;
        }
    }

    return result;    
};
