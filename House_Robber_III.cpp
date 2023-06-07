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
    int rob(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }

        vector<int> result = dfs(root);
        return max(result[0], result[1]);        
    }

private:
    vector<int> dfs(TreeNode* node) {
        if (node == nullptr) {
            return vector<int>{0, 0};
        }

        vector<int> left = dfs(node->left);
        vector<int> right = dfs(node->right);

        int robCur = node->val + left[1] + right[1];
        int notRobCur = max(left[0], left[1]) + max(right[0], right[1]);

        return vector<int>{robCur, notRobCur};
    }    
};
