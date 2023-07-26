class Solution {
    public int minSpeedOnTime(int[] dist, double hour) {
        int left = 1, right = 10_000_000;
        while (left < right) {
            int mid = (left + right) / 2;
            if (canReachOnTime(mid, dist, hour)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (canReachOnTime(left, dist, hour)) {
            return left;
        } else {
            return -1;
        }
    }

    // Check if it's possible to reach the office on time with a given speed
    boolean canReachOnTime(int speed, int[] dist, double hour) {
        double totalTime = 0.0;
        for (int i = 0; i < dist.length - 1; i++) {
            totalTime += Math.ceil((double) dist[i] / speed);
        }
        totalTime += dist[dist.length - 1] / (double) speed;
        return totalTime <= hour;
    }    
}
