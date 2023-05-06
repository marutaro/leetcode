class Solution {
public:
    int numSubseq(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<int> pow(n, 1);
        const int mod = 1e9 + 7;
        
        for(int i = 1; i < n; i++){
            pow[i] = (2 * pow[i-1]) % mod;
        }
        
        int left = 0, right = n-1;
        long long res = 0;
        
        while(left <= right){
            if(nums[left] + nums[right] > target){
                right--;
            } else {
                res = (res + pow[right - left]) % mod;
                left++;
            }
        }
        
        return res;
    }
};
