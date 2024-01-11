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
    int maxAncestorDiff(TreeNode* root) {
        return dfs(root, root->val, root->val);        
    }

private:
    int dfs(TreeNode* node, int min_val, int max_val) {
        if (!node) {
            return max_val - min_val;
        }

        min_val = min(node->val, min_val);
        max_val = max(node->val, max_val);

        int left_diff = dfs(node->left, min_val, max_val);
        int right_diff = dfs(node->right, min_val, max_val);

        return max(left_diff, right_diff);
    }    
};
