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
private:
    int min_diff;
    int prev_val;

    void inorder(TreeNode* node) {
        if (node->left) {
            inorder(node->left);
        }

        if (prev_val != INT_MAX) {
            min_diff = std::min(min_diff, node->val - prev_val);
        }
        prev_val = node->val;

        if (node->right) {
            inorder(node->right);
        }
    }

public:
    int getMinimumDifference(TreeNode* root) {
        min_diff = INT_MAX;
        prev_val = INT_MAX;

        inorder(root);
        return min_diff;        
    }
};
