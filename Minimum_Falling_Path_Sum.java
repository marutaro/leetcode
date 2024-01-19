class Solution {
    public int minFallingPathSum(int[][] m) {
        for (int r = 1; r < m.length; ++r)
            for (int c = 0; c < m.length; ++c)
                m[r][c] += Math.min(
                    m[r - 1][c],
                    Math.min(m[r - 1][Math.max(0, c - 1)], m[r - 1][Math.min(m.length - 1, c + 1)])
                );

        return Arrays.stream(m[m.length - 1]).min().getAsInt();    
    }
}
