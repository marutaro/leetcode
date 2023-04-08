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
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        vector<TreeNode*> res;
        unordered_map<string, vector<TreeNode*>> subtrees;

        traverse(root, subtrees);

        for (auto nodes : subtrees) {
            if (nodes.second.size() > 1) {
                res.push_back(nodes.second[0]);
            }
        }

        return res;        
    }

private:
    string traverse(TreeNode* node, unordered_map<string, vector<TreeNode*>>& subtrees) {
        if (node == nullptr) {
            return "#";
        }

        string key = to_string(node->val) + "," + traverse(node->left, subtrees) + "," + traverse(node->right, subtrees);

        subtrees[key].push_back(node);

        return key;
    }
};
