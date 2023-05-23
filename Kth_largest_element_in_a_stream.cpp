class KthLargest {
private:
    int k;
    std::priority_queue<int, std::vector<int>, std::greater<int>> nums;

public:
    KthLargest(int k, vector<int>& nums) {
        this->k = k;
        for (int num : nums) {
            this->nums.push(num);
            if (this->nums.size() > k) {
                this->nums.pop();
            }
        }        
    }
    
    int add(int val) {
        nums.push(val);
        if (nums.size() > k) {
            nums.pop();
        }
        return nums.top();        
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
