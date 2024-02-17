class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        Queue<Integer> minHeap = new PriorityQueue<>();

        for (int i = 1; i < heights.length; ++i) {
            int diff = heights[i] - heights[i - 1];
            if (diff <= 0)
                continue;

            minHeap.offer(diff);
            
            if (minHeap.size() > ladders)
                bricks -= minHeap.poll();
            if (bricks < 0)
                return i - 1;
            }

        return heights.length - 1;       
    }
}
