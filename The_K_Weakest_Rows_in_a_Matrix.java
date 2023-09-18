class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> {
            int strengthA = a[0];
            int strengthB = b[0];
            if (strengthA != strengthB) {
                return Integer.compare(strengthA, strengthB);
            } else {
                return Integer.compare(a[1], b[1]);
            }
        });

        for (int i = 0; i < mat.length; i++) {
            int soldiersCount = 0;

            for (int j = 0; j < mat[i].length; j++) {
                if (mat[i][j] == 1) {
                    soldiersCount++;
                } else {
                    break;
                }
            }

            minHeap.offer(new int[]{soldiersCount, i});
        }

        int[] weakestRows = new int[k];
        for (int i = 0; i < k; i++) {
            weakestRows[i] = minHeap.poll()[1];
        }

        return weakestRows;        
    }
}
