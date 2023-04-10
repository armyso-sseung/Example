def one() :
    questionList.append( input( '등록할 질문을 입력해주세요\n\n=> ' ) )
    answerList.append('')

    return

def two() :
    for index, question in enumerate( questionList ) :
        print( '{}. {}'.format( index + 1, question ) )

    while True :
        try :
            question = int(input( '\n\n위 질문들 중 답변할 질문을 선택해주세요\n\n=> ' ))    
            print('{}\n\n'.format(questionList[question - 1]))
            answerList[question - 1] = input('=> ')
            break

        except :
            print('\n\n위 질문 목록에서 선택해주시기 바랍니다.\n\n')
            continue

    return

def three() :
    while True :
        try :
            answer = int( input( '\n\n1.전체보기\n2.답변달린 질문만 보기\n\n=> ' ) )
            if answer == 1 :
                for i in range(len(questionList)) :
                    print('{}. {}\n답변: {}\n\n'.format( i, questionList[i], answerList[i] ))

            elif answer == 2 :
                for i in range(len(questionList)) :
                    if answerList[i] != '' :
                        print('{}. {}\n답변: {}\n\n'.format( i, questionList[i], answerList[i] ))

        except :
            print('\n\n위 보기에서 선택해주시기 바랍니다.\n\n')
            continue
    
        break

    return



questionList = []
answerList = []



while True :
    try :
        firstAnswer = int(input( '아래 보기에서 메뉴를 선택해주시기 바랍니다.\n1.질문등록\n2.답변하기\n3.질문보기\n4.종료하기\n\n=> ' ))
    except :
        print('\n\n\n\n')
        continue

    if firstAnswer == 1 :
        one()
    elif firstAnswer == 2 :
        two()
    elif firstAnswer == 3 :
        three()
    elif firstAnswer == 4 :
        break
    