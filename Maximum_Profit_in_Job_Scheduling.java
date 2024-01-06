class Solution {
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int max_profit = 0;
        int n = startTime.length;
        int[][] jobs = new int[n][3];
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> a[0] - b[0]);

        for (int i = 0; i < n; i++) {
            jobs[i] = new int[]{startTime[i], endTime[i], profit[i]};
        }

        Arrays.sort(jobs, (a, b) -> a[0] - b[0]);

        for (int[] job : jobs) {
            while (!heap.isEmpty() && job[0] >= heap.peek()[0]) {
                max_profit = Math.max(max_profit, heap.poll()[1]);
            }
            heap.offer(new int[]{job[1], job[2] + max_profit});
        }

        return Math.max(max_profit, heap.stream().mapToInt(arr -> arr[1]).max().orElse(0));        
    }
}
