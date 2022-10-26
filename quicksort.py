def quick_sort(seq):
    length = len(seq)

    if length <= 1:
        return seq
    else:
        pivot = seq.pop()

    more = []
    less = []

    for val in seq:
        if val > pivot:
            more.append(val)
        else:
            less.append(val)
    
    return quick_sort(less) + [pivot] + quick_sort(more)

print(quick_sort([1,3,4,23,7,4,6,8,9,5,4,3]))
print(quick_sort([1,3,4,23,2,3,6,4,2,5,4,6,3,9]))
