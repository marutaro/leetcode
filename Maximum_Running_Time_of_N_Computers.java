class Solution {
    public long maxRunTime(int n, int[] batteries) {
        Arrays.sort(batteries);
        int[] charging = Arrays.copyOfRange(batteries, batteries.length - n, batteries.length);

        long total_extra = 0;
        for (int i = 0; i < batteries.length - n; i++) {
            total_extra += batteries[i];
        }        
        
        for (int i = 0; i < n - 1; i++) {
            if (total_extra < (long)(i + 1) * (charging[i + 1] - charging[i])) {
                return charging[i] + total_extra / (long)(i + 1);
            }

            total_extra -= (long)(i + 1) * (charging[i + 1] - charging[i]);
        }

        return charging[n - 1] + total_extra / n;        
    }
}
