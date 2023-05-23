import requests
import bs4
from lxml import html


def unipass_api( hblNos ):
    for hblNo in hblNos :
        url = "https://unipass.customs.go.kr:38010/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?crkyCn=q220h213t025o176b020z010c0&hblNo={0}&blYy=2023".format(hblNo)
        print(url)
        headers = {'Content-Type': 'application/json', 'charset': 'UTF-8', 'Accept': '*/*'}

        response = requests.get(url).text
        xmlData = bs4.BeautifulSoup(response, 'lxml-xml')
        # print(xmlData)
        print("송장번호: " + hblNo)
        try :
            print("상품명: " + xmlData.find("prnm").text)
            print("통관진행상태: " + xmlData.find("csclPrgsStts").text)
            print("최종상태: " + xmlData.find("prgsStts").text)
        except :
            print("아직 관세청에 등록되지 않았습니다.")
        print("\n\n")



hblNos = ['WJ00001260616', '6079530034012', '6079449736486', '570776427326']
unipass_api(hblNos)



'''
    N0000022808543(오링)                            -   반출완료
    6079530034012(Princess Switch)                 -   미등록
    WJ00001260616(8008 키캡)                        -   반입기간연장 승인
    6079530034012(보라색 키캡)                        -   미등록
    WJ00001251433(GMK67)                           -   반출완료(수령완료)
    6079449163665(LMK81)                           -   반출완료
    6079449019909(CreamYellow Switch, 9009 키캡)    -   반출완료(수령완료) 
    6079449736486(보라색 키캡)                        -   사용소비 심사진행
    570776427326(Monsgeek M3)                      -   하선신고 수리완료
'''