class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        res = []
        groups = defaultdict(list)

        for i, size in enumerate(groupSizes):
            groups[size].append(i)

            if len(groups[size]) == size:
                res.append(groups.pop(size))
        
        return res
