// Solution 1
class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        int res = root->val;

        while (!q.empty()) {
            res = q.front()->val;
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                if (node->left) {
                    q.push(node->left);
                }
                if (node->right) {
                    q.push(node->right);
                }
            }
        }

        return res;        
    }
};

// Solution 2
class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        int res = root->val;

        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            res = node->val;
            if (node->right) {
                q.push(node->right);
            }
            if (node->left) {
                q.push(node->left);
            }
        }

        return res;        
    }
};

// Solution 3
class Solution {
private:
    int maxDepth = 0;
    int res = -1;

    void dfs(TreeNode* node, int depth) {
        if (!node) return;

        if (depth > maxDepth) {
            maxDepth = depth;
            res = node->val;
        }

        dfs(node->left, depth + 1);
        dfs(node->right, depth + 1);
    }

public:
    int findBottomLeftValue(TreeNode* root) {
        dfs(root, 1);
        return res;        
    }
};
