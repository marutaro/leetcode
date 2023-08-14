class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        k = nums.size() - k;

        std::random_device rd;
        std::mt19937 gen(rd());
        for (int i = nums.size() - 1; i >= 0; i--) {
            int j = gen() % (i + 1);
            std::swap(nums[i], nums[j]);
        }

        return quickSelect(nums, 0, nums.size() - 1, k);        
    }

private:
    int quickSelect(std::vector<int>& nums, int left, int right, int k) {
        int pivot = nums[right];
        int p = left;

        for (int i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                std::swap(nums[i], nums[p]);
                p++;
            }
        }
        std::swap(nums[p], nums[right]);

        if (p > k) {
            return quickSelect(nums, left, p - 1, k);
        } else if (p < k) {
            return quickSelect(nums, p + 1, right, k);
        } else {
            return nums[p];
        }
    }    
};
