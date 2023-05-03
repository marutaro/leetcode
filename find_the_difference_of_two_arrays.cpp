class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        std::set<int> set1(nums1.begin(), nums1.end());
        std::set<int> set2(nums2.begin(), nums2.end());

        std::set<int> diff1(set1);
        for (int num : set2) {
            diff1.erase(num);
        }

        std::set<int> diff2(set2);
        for (int num : set1) {
            diff2.erase(num);
        }

        std::vector<std::vector<int>> result;
        result.push_back(std::vector<int>(diff1.begin(), diff1.end()));
        result.push_back(std::vector<int>(diff2.begin(), diff2.end()));

        return result;       
    }
};
