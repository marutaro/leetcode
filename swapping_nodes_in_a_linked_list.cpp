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
    ListNode* swapNodes(ListNode* head, int k) {
      ListNode* dummy = head;

      for (int i = 0; i < k - 1; i++) {
          dummy = dummy->next;
      }
      ListNode* first = dummy;

      ListNode* second = head;
      while (dummy->next != nullptr) {
          dummy = dummy->next;
          second = second->next;
      }

      int temp = first->val;
      first->val = second->val;
      second->val = temp;

      return head;        
    }
};
