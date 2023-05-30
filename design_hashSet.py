class MyHashSet:

    def __init__(self):
        self.size = 1000
        self.hashset = [[] for _ in range(self.size)]
    
    def _hash(self, key):
        return hash(key) % self.size

    def add(self, key: int) -> None:
        index = self._hash(key)
        bucket = self.hashset[index]
        for value in bucket:
            if value == key:
                return
        bucket.append(key)
        
    def remove(self, key: int) -> None:
        index = self._hash(key)
        bucket = self.hashset[index]
        for i in range(len(bucket)):
            if bucket[i] == key:
                del bucket[i]
                return

    def contains(self, key: int) -> bool:
        index = self._hash(key)
        bucket = self.hashset[index]
        for value in bucket:
            if value == key:
                return True
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
