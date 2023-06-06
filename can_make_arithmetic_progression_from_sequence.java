class Solution {
    public boolean canMakeArithmeticProgression(int[] arr) {
        int minimum = Integer.MAX_VALUE;
        int maximum = Integer.MIN_VALUE;
        int n = arr.length;

        for (int num : arr) {
            minimum = Math.min(minimum, num);
            maximum = Math.max(maximum, num);
        }

        int diff = (maximum - minimum) / (n - 1);
        Set<Integer> nums = new HashSet<>();

        for (int num : arr) {
            nums.add(num);
        }

        if (diff == 0) {
            return nums.size() == 1;
        }

        for (int i = minimum; i <= maximum; i += diff) {
            if (!nums.contains(i)) {
                return false;
            }
        }

        return true;
    }
}
