class ParkingSystem {
private:
    std::unordered_map<int, int> slots;

public:
    ParkingSystem(int big, int medium, int small) {
        slots = { {1, big}, {2, medium}, {3, small} };        
    }
    
    bool addCar(int carType) {
        if (slots.find(carType) == slots.end() || slots[carType] == 0) {
            return false;
        }

        slots[carType]--;
        return true;        
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 */
