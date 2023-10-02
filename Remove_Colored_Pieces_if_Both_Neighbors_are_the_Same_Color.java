class Solution {
    public boolean winnerOfGame(String colors) {
        if (colors.length() <= 2) {
            return false;
        }

        int aliceTurn = 0;
        int bobTurn = 0;

        for (int i = 1; i < colors.length() - 1; i++) {
            if (colors.charAt(i - 1) == colors.charAt(i) && colors.charAt(i) == colors.charAt(i + 1)) {
                if (colors.charAt(i) == 'A') {
                    aliceTurn++;
                } else {
                    bobTurn++;
                }
            }
        }

        return aliceTurn > bobTurn;        
    }
}
