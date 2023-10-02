class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        if len(colors) <= 2:
            return False

        alice_turn = 0
        bob_turn = 0
        
        for i in range(1, len(colors) - 1):
            if colors[i - 1] == colors[i] == colors[i + 1]:
                if colors[i] == "A":
                    alice_turn += 1
                else:
                    bob_turn += 1
        
        return alice_turn > bob_turn
