class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        List<Integer> res = new ArrayList<>();
        int left = 0;
        int right = 0;
        Deque<Integer> q = new ArrayDeque<>();

        while (right < nums.length) {
            while (!q.isEmpty() && nums[right] > nums[q.peekLast()]) {
                q.pollLast();
            }
            q.offerLast(right);

            if (left > q.peekFirst()) {
                q.pollFirst();
            }

            if (right + 1 >= k) {
                res.add(nums[q.peekFirst()]);
                left++;
            }
            right++;
        }

        return res.stream().mapToInt(Integer::intValue).toArray();        
    }
}
