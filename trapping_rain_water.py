class Solution:
    def trap(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        left_h = height[left]
        right_h = height[right]
        water = 0
        
        while left < right:
            if left_h < right_h:
                left += 1
                left_h = max(left_h, height[left])
                water += left_h - height[left]
            else:
                right -= 1
                right_h = max(right_h, height[right])
                water += right_h - height[right]
        
        return water
