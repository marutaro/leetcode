class Solution {
    public int makeArrayIncreasing(int[] arr1, int[] arr2) {
        Map<Integer, Integer> prev = new HashMap<>();
        prev.put(-1, 0);
        Arrays.sort(arr2);

        for (int n : arr1) {
            Map<Integer, Integer> temp = new HashMap<>();

            for (int key : prev.keySet()) {
                if (n > key) {
                    temp.put(n, Math.min(temp.getOrDefault(n, Integer.MAX_VALUE), prev.get(key)));
                }
                
                int idx = binarySearch(key, arr2);
                
                if (idx < arr2.length) {
                    temp.put(arr2[idx], Math.min(temp.getOrDefault(arr2[idx], Integer.MAX_VALUE), prev.get(key) + 1));
                }
            }

            prev = temp;
        }

        return prev.values().stream().min(Integer::compareTo).orElse(-1);
    }
    
    private int binarySearch(int target, int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = (left + right) / 2;
            
            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }        
}
