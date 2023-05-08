class Solution:
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        n = len(obstacles)
        res = [0] * n
        stack = []

        for i in range(n):
            left, right = 0, len(stack) - 1

            while left <= right:
                mid = (left + right) // 2
                if stack[mid] <= obstacles[i]:
                    left = mid + 1
                else:
                    right = mid - 1
            
            res[i] = left + 1

            if left == len(stack):
                stack.append(obstacles[i])
            else:
                stack[left] = obstacles[i]
        
        return res
