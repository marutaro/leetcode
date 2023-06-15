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
    int maxLevelSum(TreeNode* root) {
        int res = 0;
        int curLevel = 0;
        int curMax = INT_MIN;
        std::queue<TreeNode*> queue;
        
        queue.push(root);
        
        while (!queue.empty()) {
            int curTotal = 0;
            curLevel++;
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                TreeNode* node = queue.front();
                queue.pop();
                curTotal += node->val;
                
                if (node->left) {
                    queue.push(node->left);
                }
                if (node->right) {
                    queue.push(node->right);
                }
            }
            
            if (curTotal > curMax) {
                res = curLevel;
                curMax = curTotal;
            }
        }
        
        return res;        
    }
};
