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
        print("상품명: " + xmlData.find("prnm").text)
        print("통관진행상태: " + xmlData.find("csclPrgsStts").text)
        print("최종상태: " + xmlData.find("prgsStts").text)
        print("\n\n")



hblNos = ['WJ00001251433', 'WJ00001260616', '6079449163665', '6079449019909', '6079449330310']
unipass_api(hblNos)



'''
    WJ00001251433   -   통관목록접수
    WJ00001260616   -   통관목록접수
    6079449163665   -   통관목록접수
    6079449019909   -   통관목록접수
    6079449330310   -   수입신고수리
'''