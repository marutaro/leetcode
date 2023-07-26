class Solution {
public:
    int minSpeedOnTime(vector<int>& dist, double hour) {
        // check if it's possible to reach the office on time with a given speed
        auto canReachOnTime = [&](int speed) -> bool {
            double total_time = std::accumulate(dist.begin(), dist.end() - 1, 0.0, [&](double acc, int d) { return acc + std::ceil((double) d / speed); }) + dist.back() / (double) speed;
            return total_time <= hour;
        };

        int left = 1, right = 10'000'000;
        while (left < right) {
            int mid = (left + right) / 2;
            if (canReachOnTime(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (canReachOnTime(left)) {
            return left;
        } else {
            return -1;
        }        
    }
};
