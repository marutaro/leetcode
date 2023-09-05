var copyRandomList = function(head) {
    const hashMap = new Map();
    let cur = head;

    while (cur) {
        hashMap.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    cur = head;

    while (cur) {
        const copy = hashMap.get(cur);
        copy.next = hashMap.get(cur.next) || null;
        copy.random = hashMap.get(cur.random) || null;
        cur = cur.next;
    }

    return hashMap.get(head);   
};
