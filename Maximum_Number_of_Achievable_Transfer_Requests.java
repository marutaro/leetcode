class Solution {
    int answer = 0;

    void maxRequest(int[][] requests, int[] indegree, int n, int index, int count) {
        if (index == requests.length) {
            for (int i = 0; i < n; i++) {
                if (indegree[i] != 0) {
                    return;
                }
            }
            
            answer = Math.max(answer, count);
            return;
        }
        
        indegree[requests[index][0]]--;
        indegree[requests[index][1]]++;

        maxRequest(requests, indegree, n, index + 1, count + 1);

        indegree[requests[index][0]]++;
        indegree[requests[index][1]]--;
        
        maxRequest(requests, indegree, n, index + 1, count);
    }
    
    public int maximumRequests(int n, int[][] requests) {
        int[] indegree = new int[n];
        maxRequest(requests, indegree, n, 0, 0);
        
        return answer;
    }
}
