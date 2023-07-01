class Solution {
public:
    int distributeCookies(vector<int>& cookies, int k) {
        std::vector<int> distribution(k, 0);
        return backtracking(0, distribution, cookies, k, k);        
    }

private:
    int backtracking(int i, std::vector<int>& distribution, std::vector<int>& cookies, int k, int zeroCount) {
        if (cookies.size() - i < zeroCount) {
            return std::numeric_limits<int>::max();
        }

        if (i == cookies.size()) {
            int maxUnfairness = std::numeric_limits<int>::min();
            for (int value : distribution) {
                maxUnfairness = std::max(maxUnfairness, value);
            }
            return maxUnfairness;
        }
        
        int minUnfairness = std::numeric_limits<int>::max();
        for (int childIndex = 0; childIndex < k; ++childIndex) {
            zeroCount -= (distribution[childIndex] == 0) ? 1 : 0;
            distribution[childIndex] += cookies[i];
            
            minUnfairness = std::min(minUnfairness, backtracking(i + 1, distribution, cookies, k, zeroCount));
            
            distribution[childIndex] -= cookies[i];
            zeroCount += (distribution[childIndex] == 0) ? 1 : 0;
        }
        
        return minUnfairness;
    }
};
