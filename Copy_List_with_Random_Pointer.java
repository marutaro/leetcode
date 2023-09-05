class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> hashMap = new HashMap<>();
        Node cur = head;

        while (cur != null) {
            hashMap.put(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;

        while (cur != null) {
            Node copy = hashMap.get(cur);
            copy.next = hashMap.get(cur.next);
            copy.random = hashMap.get(cur.random);
            cur = cur.next;
        }

        return hashMap.get(head);        
    }
}
