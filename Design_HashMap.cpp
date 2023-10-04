class Node {
    int key;
    int val;
    Node next;

    Node(int key, int val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

class MyHashMap {

    private Node[] map;

    public MyHashMap() {
        map = new Node[1000];
        for (int i = 0; i < 1000; i++) {
            map[i] = new Node(-1, -1);
        }
    }

    public void put(int key, int value) {
        int hash = hash(key);
        Node cur = map[hash];

        while (cur.next != null) {
            if (cur.next.key == key) {
                cur.next.val = value;
                return;
            }
            cur = cur.next;
        }

        cur.next = new Node(key, value);
    }

    public int get(int key) {
        int hash = hash(key);
        Node cur = map[hash].next;

        while (cur != null) {
            if (cur.key == key)
                return cur.val;
            cur = cur.next;
        }

        return -1;
    }

    public void remove(int key) {
        int hash = hash(key);
        Node cur = map[hash];

        while (cur.next != null) {
            if (cur.next.key == key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }

    private int hash(int key) {
        return key % 1000;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */
