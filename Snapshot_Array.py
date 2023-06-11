class SnapshotArray:

    def __init__(self, length: int):
        self.records = [[(0, 0)] for _ in range(length)] # snap id, val
        self.snap_id = 0

    def set(self, index: int, val: int) -> None:
        self.records[index].append((self.snap_id, val))

    def snap(self) -> int:
        self.snap_id += 1
        return self.snap_id - 1        

    def get(self, index: int, snap_id: int) -> int:
        record = self.records[index]
        left = 0
        right = len(record) - 1

        while left <= right:
            mid = (left + right) // 2
            if record[mid][0] <= snap_id:
                left = mid + 1
            else:
                right = mid - 1
        
        return record[right][1]



# Your SnapshotArray object will be instantiated and called as such:
# obj = SnapshotArray(length)
# obj.set(index,val)
# param_2 = obj.snap()
# param_3 = obj.get(index,snap_id)
