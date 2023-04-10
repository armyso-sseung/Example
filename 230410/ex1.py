def one() :
    questionList.append( input( '등록할 질문을 입력해주세요\n\n=> ' ) )
    return

def two() :
    for index, question in enumerate( questionList ) :
        print( '{}. {}'.format( index + 1, question ) )


    while True :
        try :
            answer = int(input( '\n\n위 질문들 중 답변할 질문을 선택해주세요\n\n=> ' ))    
            print(questionList[answer - 1])
            
            break
        except :
            print('\n\n위 질문 목록에서 선택해주시기 바랍니다.\n\n')
            continue
    

    
        
    return

def three() :
    return



questionList = []
answerList = []



while True :
    try :
        firstAnswer = int(input( '아래 보기에서 메뉴를 선택해주시기 바랍니다.\n1.질문등록\n2.답변하기\n3.질문보기\n\n=> ' ))
    except :
        print('\n\n\n\n')
        continue

    if firstAnswer == 1 :
        one()
    elif firstAnswer == 2 :
        two()
        break
    elif firstAnswer == 3 :
        three()
        break
    