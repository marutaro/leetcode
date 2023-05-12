class Solution {
    public int numRescueBoats(int[] people, int limit) {
        int left = 0;
        int right = people.length - 1;
        int boat = 0;
        Arrays.sort(people);

        while (left <= right) {
            boat += 1;

            if (people[left] + people[right] <= limit) {
                left += 1;
            }
            right -= 1;
        }

        return boat;        
    }
}
