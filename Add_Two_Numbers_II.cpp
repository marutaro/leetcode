/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        std::stack<int> stack1, stack2;

        // Push digits of l1 to stack1
        while (l1) {
            stack1.push(l1->val);
            l1 = l1->next;
        }

        // Push digits of l2 to stack2
        while (l2) {
            stack2.push(l2->val);
            l2 = l2->next;
        }

        int carry = 0, val1, val2;
        ListNode* dummyHead = NULL;

        // Pop digits from both stacks and add them
        while (!stack1.empty() || !stack2.empty() || carry) {
            if (!stack1.empty()) {
                val1 = stack1.top();
                stack1.pop();
            }
            else
                val1 = 0;
            
            if (!stack2.empty()) {
                val2 = stack2.top();
                stack2.pop();
            }
            else
                val2 = 0;
            
            int total = val1 + val2 + carry;
            carry = total / 10;

            ListNode* new_node = new ListNode(total % 10);
            new_node->next = dummyHead;
            dummyHead = new_node;
        }

        return dummyHead;
    }
};
