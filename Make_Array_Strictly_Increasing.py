class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
        prev = {-1: 0}
        arr2.sort()

        def binary_search(target):
            left = 0
            right = len(arr2) - 1
            
            while left <= right:
                mid = (left + right) // 2
                
                if arr2[mid] <= target:
                    left = mid + 1
                else:
                    right = mid - 1
            
            return left

        for n in arr1:
            temp = defaultdict(lambda: float('inf'))

            for key in prev:
                if n > key:
                    temp[n] = min(temp[n], prev[key])
                
                idx = binary_search(key)

                if idx < len(arr2):
                    temp[arr2[idx]] = min(temp[arr2[idx]], prev[key] + 1)

            prev = temp

        return min(prev.values()) if prev else -1
