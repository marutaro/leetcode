class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        k = len(nums) - k

        for i in range(len(nums) - 1, -1, -1):
            j = random.randint(0, i)
            nums[i], nums[j] = nums[j], nums[i]

        def quick_select(left, right):
            pivot, p = nums[right], left

            for i in range(left, right):
                if nums[i] <= pivot:
                    nums[p], nums[i] = nums[i], nums[p]
                    p += 1
            nums[p], nums[right] = nums[right], nums[p]

            if p > k:
                return quick_select(left, p - 1)
            elif p < k:
                return quick_select(p + 1, right)
            else:
                return nums[p]

        return quick_select(0, len(nums) - 1)
