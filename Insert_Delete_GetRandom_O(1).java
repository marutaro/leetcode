class RandomizedSet {

    private List<Integer> values;
    private Map<Integer, Integer> valuesIdx;

    public RandomizedSet() {
        this.values = new ArrayList<>();
        this.valuesIdx = new HashMap<>();
    }

    public boolean insert(int val) {
        if (valuesIdx.containsKey(val)) {
            return false;
        }

        valuesIdx.put(val, values.size());
        values.add(val);

        return true;
    }

    public boolean remove(int val) {
        if (!valuesIdx.containsKey(val)) {
            return false;
        }

        int index = valuesIdx.get(val);
        valuesIdx.put(values.get(values.size() - 1), index);
        valuesIdx.remove(val);
        values.set(index, values.get(values.size() - 1));
        values.remove(values.size() - 1);

        return true;
    }

    public int getRandom() {
        int index = (int) (Math.random() * values.size());
        return values.get(index);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
