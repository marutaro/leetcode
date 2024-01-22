class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int actualSum = 0;
        unordered_set<int> uniqueSet;

        for (int num : nums) {
            actualSum += num;
            uniqueSet.insert(num);
        }

        int duplicate = actualSum - accumulate(uniqueSet.begin(), uniqueSet.end(), 0);

        int n = nums.size();
        int expectedSum = n * (1 + n) / 2;

        int missing = expectedSum + duplicate - actualSum;

        return {duplicate, missing};        
    }
};
