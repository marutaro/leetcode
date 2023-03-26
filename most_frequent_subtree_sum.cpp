/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> findFrequentTreeSum(TreeNode* root) {
        unordered_map<int, int> freq;
        dfs(root, freq);
        
        int maxFreq = 0;
        for (auto& [sum, count] : freq) {
            maxFreq = max(maxFreq, count);
        }
        
        vector<int> res;
        for (auto& [sum, count] : freq) {
            if (count == maxFreq) {
                res.push_back(sum);
            }
        }
        
        return res;        
    }

private:
    int dfs(TreeNode* node, unordered_map<int, int>& freq) {
        if (node == nullptr) {
            return 0;
        }
        
        // calculate the subtree sum recursively
        int leftSum = dfs(node->left, freq);
        int rightSum = dfs(node->right, freq);
        int subtreeSum = leftSum + rightSum + node->val;
        
        // increment the frequency of the subtree sum
        freq[subtreeSum]++;

        return subtreeSum;
    }    
};
