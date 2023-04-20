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
    int longestZigZag(TreeNode* root) {
        if (!root) {
            return 0;
        }

        int max_length = 0;

        dfs(root, true, 0, max_length);
        return max_length;
    }

private:
    void dfs(TreeNode* node, bool is_left, int length, int& max_length) {
        if (!node) {
            return;
        }

        max_length = std::max(max_length, length);

        if (is_left) {
            dfs(node->left, false, length + 1, max_length);
            dfs(node->right, true, 1, max_length);
        } else {
            dfs(node->right, true, length + 1, max_length);
            dfs(node->left, false, 1, max_length);
        }
    }    
};
