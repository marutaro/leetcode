class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        left = 0
        right = len(people) - 1
        boat = 0
        people.sort()

        while left <= right:
            boat += 1

            if people[left] + people[right] <= limit:
                left += 1
            right -= 1
        
        return boat
