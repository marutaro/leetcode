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
    vector<TreeNode*> generateTrees(int n) {
        if (n == 0) {
            return vector<TreeNode*>();
        }
        
        unordered_map<string, vector<TreeNode*>> memo;

        return generateTreesHelper(1, n, memo);        
    }

private:
    vector<TreeNode*> generateTreesHelper(int start, int end, unordered_map<string, vector<TreeNode*>>& memo) {
        string key = to_string(start) + "-" + to_string(end);
        if (memo.find(key) != memo.end()) {
            return memo[key];
        }
        
        vector<TreeNode*> trees;
        if (start > end) {
            trees.push_back(nullptr);
            return trees;
        }
        
        for (int rootVal = start; rootVal <= end; rootVal++) {
            vector<TreeNode*> leftTrees = generateTreesHelper(start, rootVal - 1, memo);
            vector<TreeNode*> rightTrees = generateTreesHelper(rootVal + 1, end, memo);
            
            for (TreeNode* leftTree : leftTrees) {
                for (TreeNode* rightTree : rightTrees) {
                    TreeNode* root = new TreeNode(rootVal);
                    root->left = leftTree;
                    root->right = rightTree;
                    trees.push_back(root);
                }
            }
        }
        
        memo[key] = trees;
        return trees;
    }    
};
