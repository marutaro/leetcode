class ParkingSystem {

    private Map<Integer, Integer> slots;

    public ParkingSystem(int big, int medium, int small) {
        slots = new HashMap<>();
        slots.put(1, big);
        slots.put(2, medium);
        slots.put(3, small);        
    }
    
    public boolean addCar(int carType) {
        if (slots.get(carType) == null || slots.get(carType) == 0) {
            return false;
        }

        slots.put(carType, slots.get(carType) - 1);
        return true;        
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * boolean param_1 = obj.addCar(carType);
 */
