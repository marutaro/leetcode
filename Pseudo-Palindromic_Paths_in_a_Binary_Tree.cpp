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
    int pseudoPalindromicPaths (TreeNode* root) {
        return dfs(root, std::unordered_set<int>());        
    }

private:
    int dfs(TreeNode* node, std::unordered_set<int> pairs) {
        if (!node) {
            return 0;
        }

        if (pairs.count(node->val)) {
            pairs.erase(node->val);
        } else {
            pairs.insert(node->val);
        }

        if (!node->left && !node->right) {
            return pairs.size() <= 1 ? 1 : 0;
        }

        int left = dfs(node->left, pairs);
        int right = dfs(node->right, pairs);

        return left + right;
    }    
};
