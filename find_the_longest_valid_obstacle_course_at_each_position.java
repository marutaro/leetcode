class Solution {
    public int[] longestObstacleCourseAtEachPosition(int[] obstacles) {
        int n = obstacles.length;
        int[] res = new int[n];
        List<Integer> stack = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            int left = 0, right = stack.size() - 1;

            while (left <= right) {
                int mid = (left + right) / 2;
                if (stack.get(mid) <= obstacles[i]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            res[i] = left + 1;

            if (left == stack.size()) {
                stack.add(obstacles[i]);
            } else {
                stack.set(left, obstacles[i]);
            }
        }

        return res;        
    }
}
