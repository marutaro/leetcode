class Solution {
    public List<List<Integer>> findMatrix(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Map<Integer, Integer> freq = new HashMap<>();

        for (int num : nums) {
            freq.put(num, 1 + freq.getOrDefault(num, 0));

            if (freq.get(num) > res.size()) {
                res.add(new ArrayList<>());
            }

            res.get(freq.get(num) - 1).add(num);
        }

        return res;        
    }
}
