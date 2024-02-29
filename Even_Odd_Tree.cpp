// BFS
class Solution {
public:
    bool isEvenOddTree(TreeNode* root) {
       if (root == nullptr) return true;
        
        queue<pair<TreeNode*, int>> q;
        q.push({root, 0});

        while (!q.empty()) {
            int prev = -1;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                auto [node, level] = q.front();
                q.pop();
                
                if (level % 2 == 0) {
                    if (node->val % 2 == 0 || (prev != -1 && prev >= node->val)) {
                        return false;
                    }
                } else {
                    if (node->val % 2 == 1 || (prev != -1 && prev <= node->val)) {
                        return false;
                    }
                }
                
                prev = node->val;
                
                if (node->left != nullptr) {
                    q.push({node->left, level + 1});
                }
                if (node->right != nullptr) {
                    q.push({node->right, level + 1});
                }
            }
        }
        return true;        
    }
};

// DFS
class Solution {
public:
    bool isEvenOddTree(TreeNode* root) {
        vector<int> prev;
        return dfs(root, 0, prev);
    }

private:
    bool dfs(TreeNode* node, int level, vector<int>& prev) {
        if (node == nullptr) {
            return true;
        }

        if (prev.size() <= level) {
            prev.push_back(0);
        }

        if (level % 2 == 0) {
            if (node->val % 2 == 0 || (prev[level] != 0 && prev[level] >= node->val)) {
                return false;
            }
        } else {
            if (node->val % 2 == 1 || (prev[level] != 0 && prev[level] <= node->val)) {
                return false;
            }
        }

        prev[level] = node->val;

        bool isLeftValid = dfs(node->left, level + 1, prev);
        bool isRightValid = dfs(node->right, level + 1, prev);

        return isLeftValid && isRightValid;
    }
};
