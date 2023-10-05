class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int majority1 = 0;
        int majority2 = 0;
        int count1 = 0;
        int count2 = 0;

        for (const int num : nums) {
            if (num == majority1) {
                count1++;
            } else if (num == majority2) {
                count2++;
            } else if (count1 == 0) {
                majority1 = num;
                count1++;
            } else if (count2 == 0) {
                majority2 = num;
                count2++;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;

        for (const int num : nums) {
            if (num == majority1) {
                count1++;
            } else if (num == majority2) {
                count2++;
            }
        }

        std::vector<int> res;

        if (count1 > nums.size() / 3) {
            res.push_back(majority1);
        }
        if (count2 > nums.size() / 3) {
            res.push_back(majority2);
        }

        return res;        
    }
};
