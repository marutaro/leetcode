#include <queue>
using namespace std;

class SmallestInfiniteSet {
private:
    priority_queue<int, vector<int>, greater<int>> heap;
    unordered_set<int> seen;
    int min_num;

public:
    SmallestInfiniteSet() {
        min_num = 1;
    }
    
    int popSmallest() {
        if (!heap.empty()) {
            int smallest = heap.top();
            heap.pop();
            seen.erase(smallest);
            return smallest;
        }
        min_num += 1;
        return min_num - 1;        
    }
    
    void addBack(int num) {
        if (min_num > num && seen.find(num) == seen.end()) {
            heap.push(num);
            seen.insert(num);
        }
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */
