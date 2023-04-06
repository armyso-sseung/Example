def negative( num ) :
    return "음수이며" if num < 0 else "양수이며" 


def odd( num ) :
    return "짝수입니다." if num % 2 == 0 else "홀수입니다."

num = int(input("임의의 임력된 숫자 : "))
print("숫자 {}은 {} {}".format( num, negative( num ), odd( num ) ))