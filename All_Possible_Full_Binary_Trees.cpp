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
    vector<TreeNode*> allPossibleFBT(int n) {
        if (n % 2 == 0) {
            return {};
        }

        unordered_map<int, vector<TreeNode*>> memo;

        return generateFBT(n, memo);
    }

private:
    vector<TreeNode*> generateFBT(int n, unordered_map<int, vector<TreeNode*>>& memo) {
        if (n == 1) {
            return {new TreeNode(0)};
        }

        if (memo.count(n)) {
            return memo[n];
        }

        vector<TreeNode*> trees;
        for (int left = 1; left < n; left += 2) {
            vector<TreeNode*> leftSubtrees = generateFBT(left, memo);
            vector<TreeNode*> rightSubtrees = generateFBT(n - left - 1, memo);

            for (TreeNode* l : leftSubtrees) {
                for (TreeNode* r : rightSubtrees) {
                    TreeNode* root = new TreeNode(0, l, r);
                    trees.push_back(root);
                }
            }
        }

        memo[n] = trees;
        return trees;
    }
};
