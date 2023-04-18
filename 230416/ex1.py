import requests
from bs4 import BeautifulSoup


url = 'https://webtoon.kakao.com/original-webtoon?tab=tue'
res = requests.get(url)


if res.status_code == 200:
    soup = BeautifulSoup(res.text, 'html.parser')
    print(soup)