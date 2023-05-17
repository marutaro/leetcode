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
    int pairSum(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode* second = nullptr;

        while (slow != nullptr) {
            ListNode* temp = slow->next;
            slow->next = second;
            second = slow;
            slow = temp;
        }

        int res = 0;
        while (second != nullptr) {
            res = std::max(res, head->val + second->val);
            head = head->next;
            second = second->next;
        }

        return res;        
    }
};
