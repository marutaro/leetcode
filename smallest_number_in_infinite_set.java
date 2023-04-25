class SmallestInfiniteSet {
    private PriorityQueue<Integer> heap;
    private int min_num;

    public SmallestInfiniteSet() {
        heap = new PriorityQueue<>();
        min_num = 1;        
    }
    
    public int popSmallest() {
        if (!heap.isEmpty()) {
            return heap.poll();
        }
        min_num += 1;
        return min_num - 1;        
    }
    
    public void addBack(int num) {
        if (min_num > num && !heap.contains(num)) {
            heap.offer(num);
        }        
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.popSmallest();
 * obj.addBack(num);
 */
