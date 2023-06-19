class Solution {
    public int largestAltitude(int[] gain) {
        int cur = 0;
        int highest = cur;

        for (int i = 0; i < gain.length; i++) {
            int a = gain[i];
            cur += a;
            highest = Math.max(highest, cur);
        }

        return highest;        
    }
}
