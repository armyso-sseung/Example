i = 1
while(i <= 100) :
    numType = "짝수" if i % 2 == 0 else "홀수"
    print("{0} 은 {1} 입니다.".format(i, numType))
    i += 1