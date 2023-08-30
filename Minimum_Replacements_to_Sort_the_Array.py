class Solution:
    def minimumReplacement(self, nums: List[int]) -> int:
        current_largest = nums[-1]
        total_replacements = 0
        
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] <= current_largest:
                current_largest = nums[i]
                continue

            if nums[i] % current_largest:
                num_elements = nums[i] // current_largest + 1
                current_largest = nums[i] // num_elements
            else:
                num_elements = nums[i] // current_largest
            
            total_replacements += num_elements - 1
        
        return total_replacements
