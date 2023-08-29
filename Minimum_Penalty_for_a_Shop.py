class Solution:
    def bestClosingTime(self, customers: str) -> int:
        res = 0
        customer_left = 0
        
        for i in range(len(customers)):
            if customers[i] == 'Y':
                customer_left += 1

                if customer_left > 0:
                    res = i + 1
                    customer_left = 0                
            else:
                customer_left -= 1
                    
        return res
