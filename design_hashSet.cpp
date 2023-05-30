class MyHashSet {
private:
    int size;
    vector<vector<int>> hashset;

    int _hash(int key) {
        return hash<int>{}(key) % size;
    }

public:
    MyHashSet() {
        size = 1000;
        hashset.resize(size);        
    }
    
    void add(int key) {
        int index = _hash(key);
        vector<int>& bucket = hashset[index];
        for (int value : bucket) {
            if (value == key) {
                return;
            }
        }
        bucket.push_back(key);        
    }
    
    void remove(int key) {
        int index = _hash(key);
        vector<int>& bucket = hashset[index];
        for (int i = 0; i < bucket.size(); i++) {
            if (bucket[i] == key) {
                bucket.erase(bucket.begin() + i);
                return;
            }
        }        
    }
    
    bool contains(int key) {
        int index = _hash(key);
        vector<int>& bucket = hashset[index];
        for (int value : bucket) {
            if (value == key) {
                return true;
            }
        }
        return false;        
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */
