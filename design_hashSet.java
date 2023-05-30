class MyHashSet {
    private int size;
    private List<List<Integer>> hashset;

    public MyHashSet() {
        size = 1000;
        hashset = new ArrayList<>(size);
        for (int i = 0; i < size; i++) {
            hashset.add(new ArrayList<>());
        }        
    }

    private int _hash(int key) {
        return Integer.hashCode(key) % size;
    }
    
    public void add(int key) {
        int index = _hash(key);
        List<Integer> bucket = hashset.get(index);
        for (int value : bucket) {
            if (value == key) {
                return;
            }
        }
        bucket.add(key);        
    }
    
    public void remove(int key) {
        int index = _hash(key);
        List<Integer> bucket = hashset.get(index);
        for (int i = 0; i < bucket.size(); i++) {
            if (bucket.get(i) == key) {
                bucket.remove(i);
                return;
            }
        }        
    }
    
    public boolean contains(int key) {
        int index = _hash(key);
        List<Integer> bucket = hashset.get(index);
        for (int value : bucket) {
            if (value == key) {
                return true;
            }
        }
        return false;        
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */
