import requests
import bs4
from lxml import html


def unipass_api( hblNos ):
    for hblNo in hblNos :
        url = "https://unipass.customs.go.kr:38010/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?crkyCn=q220h213t025o176b020z010c0&hblNo={0}&blYy=2023".format(hblNo)
        headers = {'Content-Type': 'application/json', 'charset': 'UTF-8', 'Accept': '*/*'}

        response = requests.get(url).text.encode('utf-8')
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



hblNos = ['N0000022808543', 'WJ00001260616', '6079449163665', '6079449736486', '570776427326']
unipass_api(hblNos)



'''
    N0000022808543  -   수입 ( 사용소비 ) 심사진행
    WJ00001260616   -   통관목록접수
    WJ00001251433   -   반출완료
    6079449163665   -   통관목록접수
    6079449019909   -   통관완료 
    6079449736486   -   미등록
    570776427326    -   미등록
'''