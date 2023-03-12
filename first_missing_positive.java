class Solution {
    public int firstMissingPositive(int[] nums) {
       List<Integer> numsList = new ArrayList<Integer>();
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                numsList.add(nums[i]);
            }
        }
        
        for (int i = 0; i < numsList.size(); i++) {
            int n = Math.abs(numsList.get(i));
            if (n <= numsList.size() && numsList.get(n - 1) > 0) {
                numsList.set(n - 1, -numsList.get(n - 1));
            }
        }
        
        for (int i = 0; i < numsList.size(); i++) {
            if (numsList.get(i) > 0) {
                return i + 1;
            }
        }
        
        return numsList.size() + 1;        
    }
}
