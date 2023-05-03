class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }

        for (int num : nums2) {
            set2.add(num);
        }

        Set<Integer> diff1 = new HashSet<>(set1);
        diff1.removeAll(set2);

        Set<Integer> diff2 = new HashSet<>(set2);
        diff2.removeAll(set1);

        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<>(diff1));
        result.add(new ArrayList<>(diff2));

        return result;
    }
}
