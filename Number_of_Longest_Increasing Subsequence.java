class Solution {
    public int findNumberOfLIS(int[] nums) {
        Map<Integer, Map<Integer, Integer>> dp = new HashMap<>();
        dp.put(-1, new HashMap<>());
        dp.get(-1).put(Integer.MIN_VALUE, 1);
        List<Integer> sortedNums = new ArrayList<>();

        for (int num : nums) {
            int insertIndex = bisectLeft(sortedNums, num);
            if (insertIndex == sortedNums.size()) {
                sortedNums.add(num);
            } else {
                sortedNums.set(insertIndex, num);
            }

            int total = 0;
            for (Map.Entry<Integer, Integer> entry : dp.getOrDefault(insertIndex - 1, new HashMap<>()).entrySet()) {
                int prevNum = entry.getKey();
                int count = entry.getValue();
                if (prevNum < num) {
                    total += count;
                }
            }
            dp.putIfAbsent(insertIndex, new HashMap<>());
            dp.get(insertIndex).put(num, dp.getOrDefault(insertIndex, new HashMap<>()).getOrDefault(num, 0) + total);
        }

        int result = 0;
        for (int count : dp.getOrDefault(sortedNums.size() - 1, new HashMap<>()).values()) {
            result += count;
        }
        return result; 
    }

    private int bisectLeft(List<Integer> arr, int target) {
        int left = 0;
        int right = arr.size();

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr.get(mid) < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }  
}
