class Solution {
public:
    int answer = 0;

    void maxRequest(std::vector<std::vector<int>>& requests, std::vector<int>& indegree, int n, int index, int count) {
        if (index == requests.size()) {
            for (int i = 0; i < n; i++) {
                if (indegree[i] != 0) {
                    return;
                }
            }

            answer = std::max(answer, count);
            return;
        }

        indegree[requests[index][0]]--;
        indegree[requests[index][1]]++;

        maxRequest(requests, indegree, n, index + 1, count + 1);

        indegree[requests[index][0]]++;
        indegree[requests[index][1]]--;

        maxRequest(requests, indegree, n, index + 1, count);
    }

    int maximumRequests(int n, vector<vector<int>>& requests) {
        std::vector<int> indegree(n, 0);
        maxRequest(requests, indegree, n, 0, 0);

        return answer;
    }
};
