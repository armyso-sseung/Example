d = {}

while True : 
    try :
        c = int(input("1. 질문등록 / 2. 답변하기 / 3. 질문보기"))
    except :
        print("1.2.3번 숫자만 치세요 쫌")
        continue
    
    if c == 1 :
        while True :
            q = input("질문을 등록하세요: ")
            d[q] = ""
            
            try :
                a = int(input("질문을 계속해서 등록허쉴? 맞으면 1, 아니면 2"))
            except :
                print("1.2 치라는 것만 치라구요...")
            if a == 1 :
                continue
            elif a == 2 :
                break

    elif c == 2 :
        while True : 
            kl = list(d.keys())
            print(kl)
            # for key in keyList :
                # print(key)
            for index, (key, elem) in enumerate(d.items()) :
                print(index+1, key, elem)
            p = int(input("몇 번에 답변을 달겠습니까잉?"))
            ques = kl[p-1]
            print(ques)
            answer = input("답변을 달아효: ")
            d.update({ques: answer})
            a = int(input("답변 계속 허쉴? 그럴거면 1, 아니면 2"))
            if a == 1 :
                continue
            elif a == 2 :
                break

    elif c == 3 :
        which = int(input("1.전체보기 / 2. 답변있는 질문보기"))
        if which == 1 :
            print(list(d.items()))
        elif which == 2 :
            for index, (key, elem) in enumerate(d.items()) :
                if elem == "" :
                    continue
                else :
                    print(index+1, key, elem)
        else :
            print("미안하지만 다른 선택지는 없어요")
            break
    else :
        print("어이형씨 1.2.3번 중에서만 고르라구요")