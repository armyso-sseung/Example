from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from bs4 import BeautifulSoup
import time


# 옵션을 사용하겠습니다.
options = webdriver.ChromeOptions()

# headless 옵션 설정
options.add_argument('headless')
options.add_argument("no-sandbox")

# 사람처럼 보이게 하는 옵션들
options.add_argument("disable-gpu")   # 가속 사용 x
options.add_argument("lang=ko_KR")    # 가짜 플러그인 탑재
options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')  # user-agent 이름 설정


# 네이버 웹툰 사이트 점속
url = 'https://comic.naver.com/webtoon?tab=tue'
driver = webdriver.Chrome('./chromedriver.exe', chrome_options=options)
# driver = webdriver.Chrome('./chromedriver.exe')
driver.get(url)
action = ActionChains(driver)

# 사이트 전체 크기로
driver.maximize_window()
time.sleep(2)

# 웹툰 정보를 갖고 있는 배열
naver = []

# 웹툰이 있는 div 부분 Element 찾기
webtoonList = driver.find_elements(By.CLASS_NAME, 'ContentList__content_list--q5KXY > li.item')

# 웹툰 하나하나를 탐색하여 정보 저장
for webtoon in webtoonList :
    try:
        w = {}
        w['title'] = webtoon.find_element(By.CLASS_NAME, 'ContentTitle__title--e3qXt > span').text
        w['writer'] = webtoon.find_element(By.CLASS_NAME, 'ContentAuthor__author--CTAAP').text
        naver.append(w)
    except:
        print(webtoon.get_attribute('outerHTML'))

# 담은 정보들 출력 부분
for webtoon in naver :
    print('웹툰 제목: {0}\n웹툰 작가: {1}\n\n'.format(webtoon['title'], webtoon['writer']))



# req = driver.page_source
# soup = BeautifulSoup(req, 'html.parser')
# print(soup)