class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:

        actual_sum = sum(nums)
        duplicate = actual_sum - sum(set(nums))

        n = len(nums)
        expected_sum = n * (1 + n) // 2

        missing = expected_sum + duplicate - actual_sum

        return [duplicate, missing]
