class Solution {
public:
    int strangePrinter(string s) {
        std::unordered_map<std::string, int> memo;
        return min_turns_to_print(0, s.length() - 1, s, memo);        
    }

private:
    int min_turns_to_print(int start, int end, const std::string& s, std::unordered_map<std::string, int>& memo) {
        if (start > end) {
            return 0;
        }
        
        std::string key = std::to_string(start) + "-" + std::to_string(end);
        if (memo.count(key)) {
            return memo[key];
        }
        
        int res = min_turns_to_print(start, end - 1, s, memo) + 1;

        for (int middle = start; middle < end; middle++) {
            if (s[middle] == s[end]) {
                res = std::min(res, min_turns_to_print(start, middle, s, memo) + min_turns_to_print(middle + 1, end - 1, s, memo));
            }
        }
        
        memo[key] = res;
        return res;
    }    
};
