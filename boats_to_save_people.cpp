class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        int left = 0;
        int right = people.size() - 1;
        int boat = 0;
        std::sort(people.begin(), people.end());

        while (left <= right) {
            boat += 1;

            if (people[left] + people[right] <= limit) {
                left += 1;
            }
            right -= 1;
        }

        return boat;        
    }
};
