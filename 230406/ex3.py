import requests
from bs4 import BeautifulSoup
import random

url = 'https://pann.nate.com/talk/119960152'

response = requests.get(url)


qes = []
if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    questionBox = soup.select_one('#contentArea')
    questions = questionBox.select('font > p > p > font')
    
    for question in questions :
        qes.append(question.get_text().replace(' :', '').split(' ')[1] + '?')
        if len(qes) == 100 : 
            break

    # print(qes)
else : 
    print(response.status_code)

    
while True : 
    answer = []
    q = random.sample(qes,3)
    try:
        choose = int(input("1. 질문을 패스할 수 있다 \n2. 질문에 무조건 답해야한다 \n3. 일단 패스하고 나중에 답을 쓸 수 있다 \n*모든 답안은 공백을 제외하고 10자 이상 적어야한다\n"))
    except:
        print('위 보기에서만 골라주시기 바랍니다.')
        continue

    if choose == 1 :
        for i, v in enumerate(q) :
            print(str(i+1)+'. ', v)
            a = input("답변: ")
            answer.append('') if len(a.replace(" ", "")) < 10 else answer.append(a)

        for i, j in zip(q, answer) :
            print(i, j, end="\n")
        
    elif choose == 2 :
        for i, v in enumerate(q) :
            print(str(i+1)+'. ', v)
            while True : 
                a = input("답변: ")
                if len(a.replace(" ", "")) > 10 :
                    answer.append(a)
                    break
        
        for i, j in zip(q, answer) :
            print(i, j, end="\n")
        
    elif choose == 3 :
        dictionary = {}
        for i, v in enumerate(q) :
            dictionary[str(i+1)+'. '+ v] = ""
            
        while True : 
            for key, value in dictionary.items() :
                if value == "" :
                    print(key)
                    value = input("답변: ")
                    if (len(value.replace(" ", ""))<10) :
                        value = ""
                    else :
                        dictionary[key] = value
                else :
                    continue
            
            if "" in dictionary.values() :    
                continue
            else : 
                break
            
        for key, value in dictionary.items() :
            print(key, end=' ')
            print(value)        
        
    else :
        print("1,2,3번 중에 고르시오")


    try:
        again = int(input("종료하려면 1을 누르시오."))
    except:
        again = 0

    if (again == 1) :
        break