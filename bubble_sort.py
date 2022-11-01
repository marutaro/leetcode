# typical Bubble Sort
def bubble_sort(input):
    last_index = len(input) - 1

    for _ in range(last_index):
        for i in range(last_index):
            if input[i] > input[i+1]:
                temp = input[i]
                input[i] = input[i+1]
                input[i+1] = temp
    
    return input

# Optimize Bubble Sort  
def bubble_sort(input):
    last_index = len(input) - 1

    time = 0
    for j in range(last_index):
        for i in range(last_index - j):
            time += 1
            if input[i] > input[i+1]:
                temp = input[i]
                input[i] = input[i+1]
                input[i+1] = temp
        print(input)
    print(time)
    return input  
  
# Clean up and improve the code
def bubble_sort(input):
    last_index = len(input) - 1

    for j in range(last_index):
        for i in range(last_index - j):
            if input[i] > input[i+1]:
                input[i], input[i+1] = input[i+1], input[i]

    return input 
  
# Optimize Bubble Sort for input that is already sorted   
def bubble_sort(input):
    last_index = len(input) - 1
    sorted = True

    for j in range(last_index):
        sorted = False
        for i in range(last_index - j):
            if input[i] > input[i+1]:
                sorted = True
                input[i], input[i+1] = input[i+1], input[i]
        if not sorted: break

    return input  

print(bubble_sort([1,25,3,7,5,6,4,2,62]))
print(bubble_sort([1,2,3,4,5,6]))
