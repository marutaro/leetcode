/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
       unordered_map<TreeNode*, vector<TreeNode*>> neighbors;

        buildNeighbors(root, nullptr, neighbors);

        queue<pair<TreeNode*, int>> q;
        unordered_set<TreeNode*> visited;
        vector<int> result;

        q.push(make_pair(target, 0));
        visited.insert(target);

        while (!q.empty()) {
            TreeNode* node = q.front().first;
            int dist = q.front().second;
            q.pop();

            if (dist == k) {
                result.push_back(node->val);
            }

            if (dist > k) {
                break;
            }

            for (TreeNode* nei : neighbors[node]) {
                if (visited.find(nei) == visited.end()) {
                    visited.insert(nei);
                    q.push(make_pair(nei, dist + 1));
                }
            }
        }

        return result;        
    }

private:
    void buildNeighbors(TreeNode* node, TreeNode* parent, unordered_map<TreeNode*, vector<TreeNode*>>& neighbors) {
        if (!node) {
            return;
        }

        if (neighbors.find(node) == neighbors.end()) {
            neighbors[node] = vector<TreeNode*>();
        }

        if (parent) {
            neighbors[node].push_back(parent);
            neighbors[parent].push_back(node);
        }

        buildNeighbors(node->left, node, neighbors);
        buildNeighbors(node->right, node, neighbors);
    }    
};
