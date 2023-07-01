class Solution {
    public int distributeCookies(int[] cookies, int k) {
        int[] distribution = new int[k];
        return backtracking(0, distribution, cookies, k, k);
    }

    private int backtracking(int i, int[] distribution, int[] cookies, int k, int zeroCount) {

        if (cookies.length - i < zeroCount) {
            return Integer.MAX_VALUE;
        }

        if (i == cookies.length) {
            int maxUnfairness = Integer.MIN_VALUE;
            for (int value : distribution) {
                maxUnfairness = Math.max(maxUnfairness, value);
            }
            return maxUnfairness;
        }
        
        int minUnfairness = Integer.MAX_VALUE;
        for (int childIndex = 0; childIndex < k; ++childIndex) {
            zeroCount -= (distribution[childIndex] == 0) ? 1 : 0;
            distribution[childIndex] += cookies[i];
            
            minUnfairness = Math.min(minUnfairness, backtracking(i + 1, distribution, cookies, k, zeroCount));
            
            distribution[childIndex] -= cookies[i];
            zeroCount += (distribution[childIndex] == 0) ? 1 : 0;
        }
        
        return minUnfairness;
    }

}
