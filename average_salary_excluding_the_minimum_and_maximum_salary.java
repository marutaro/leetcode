class Solution {
    public double average(int[] salary) {
        int min_s = salary[0];
        int max_s = salary[0];
        int total = 0;
        int count = 0;

        for (int s : salary) {
            if (s < min_s) {
                min_s = s;
            } else if (s > max_s) {
                max_s = s;
            }
            total += s;
            count++;
        }

        return (double)(total - min_s - max_s) / (double)(count - 2);        
    }
}
