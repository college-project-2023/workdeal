a=list(input().strip().split(" "))
a=[int(x) for x in a]

b=[]

for i in range(a[len(a)-1]+1):
    if i in a:
        b.append(1)
    else:
        b.append(0)

print(b)