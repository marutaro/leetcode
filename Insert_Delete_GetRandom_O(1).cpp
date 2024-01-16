class RandomizedSet {

private:
    vector<int> values;
    unordered_map<int, int> valuesIdx;    

public:
    RandomizedSet() {}

    bool insert(int val) {
        if (valuesIdx.find(val) != valuesIdx.end()) {
            return false;
        }

        valuesIdx[val] = values.size();
        values.push_back(val);

        return true;
    }

    bool remove(int val) {
        if (valuesIdx.find(val) == valuesIdx.end()) {
            return false;
        }

        int index = valuesIdx[val];
        valuesIdx[values.back()] = index;
        valuesIdx.erase(val);
        values[index] = values.back();
        values.pop_back();

        return true;
    }

    int getRandom() {
        int index = rand() % values.size();
        return values[index];
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */
