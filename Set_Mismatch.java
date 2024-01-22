class Solution {
    public int[] findErrorNums(int[] nums) {
        int actualSum = 0;
        Set<Integer> uniqueSet = new HashSet<>();

        for (int num : nums) {
            actualSum += num;
            uniqueSet.add(num);
        }

        int duplicate = actualSum - uniqueSet.stream().mapToInt(Integer::intValue).sum();

        int n = nums.length;
        int expectedSum = n * (1 + n) / 2;

        int missing = expectedSum + duplicate - actualSum;

        return new int[]{duplicate, missing};        
    }
}
