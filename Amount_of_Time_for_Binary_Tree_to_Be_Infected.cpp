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
    int amountOfTime(TreeNode* root, int start) {
        unordered_map<int, vector<int>> nodeRelation = get_node_relation(root);
        int minutes = -1;
        queue<int> q;
        unordered_set<int> visited;

        q.push(start);
        visited.insert(start);

        while (!q.empty()) {
            minutes += 1;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int curVal = q.front();
                q.pop();
                for (int relatedVal : nodeRelation[curVal]) {
                    if (visited.count(relatedVal)) continue;
                    q.push(relatedVal);
                    visited.insert(relatedVal);
                }
            }
        }

        return minutes;        
    }

private:
    unordered_map<int, vector<int>> get_node_relation(TreeNode* root) {
        unordered_map<int, vector<int>> relation;
        queue<pair<TreeNode*, int>> q;
        q.push({root, 0});

        while (!q.empty()) {
            auto [node, parent] = q.front();
            q.pop();

            if (parent != 0) {
                relation[parent].push_back(node->val);
                relation[node->val].push_back(parent);
            }

            if (node->left) q.push({node->left, node->val});
            if (node->right) q.push({node->right, node->val});
        }

        return relation;
    }    
};
