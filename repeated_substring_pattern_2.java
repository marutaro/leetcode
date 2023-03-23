class Solution {
    public boolean repeatedSubstringPattern(String s) {
        String concatenated = s + s;
        return concatenated.substring(1, concatenated.length() - 1).contains(s);
    }
}
