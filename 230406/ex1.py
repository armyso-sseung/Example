def negative(n) :
    if(n<0) :
        return "숫자는 음수이며 "
        
    return "숫자는 양수이며 "


def odd(n) :
    if(n%2 == 0) :
        return "짝수입니다."
        
    return "홀수입니다."

n = int(input("임의의 임력된 숫자 : "))
print("{} {}".format( negative(n), odd(n) ))