class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return new int[0][];
        }

        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0])); // Sort intervals based on start times

        List<int[]> merged = new ArrayList<>();
        int[] mergedInterval = intervals[0]; // Initialize the first interval as the current merged interval

        for (int i = 1; i < intervals.length; i++) {
            int[] interval = intervals[i];
            // If the current interval overlaps with the merged interval, merge them
            if (interval[0] <= mergedInterval[1]) {
                mergedInterval[1] = Math.max(mergedInterval[1], interval[1]); // Update the end time
            } else {
                merged.add(mergedInterval); // Add the merged interval to the result list
                mergedInterval = interval; // Update the merged interval to the current interval
            }
        }

        merged.add(mergedInterval); // Add the last merged interval to the result list

        return merged.toArray(new int[merged.size()][]);        
    }
}
