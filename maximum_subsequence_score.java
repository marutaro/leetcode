class Solution {
    public long maxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        int[][] pairs = new int[n][2];

        for (int i = 0; i < n; i++) {
            pairs[i] = new int[] { nums2[i], nums1[i] };
        }

        Arrays.sort(pairs, (a, b) -> b[0] - a[0]);
        PriorityQueue<Integer> heap = new PriorityQueue<>(k, (a, b) -> a - b);
        long result = 0, totalSum = 0;

        for (int[] pair : pairs) {
            heap.add(pair[1]);
            totalSum += pair[1];

            if (heap.size() > k) {
                totalSum -= heap.poll();
            }

            if (heap.size() == k) {
                result = Math.max(result, totalSum * pair[0]);
            }
        }

        return result;        
    }
}
