from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from bs4 import BeautifulStoneSoup
from urllib import request
import ssl
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


while True:
    try:
        url = input('로고 확인이 필요한 사이트를 입력해주세요.\nURL: ')
        if 'http' not in url :
            raise Exception('주소가 아닙니다.')
    except:
        print('정상적인 주소를 입력해주시기 바랍니다.')
        continue
    
    
    driver = webdriver.Chrome('./chromedriver.exe', chrome_options=options)
    driver.get(url)
    logo = driver.find_element(By.CSS_SELECTOR, 'a > img')
    src = logo.get_attribute('src')

    ssl._create_default_https_context = ssl._create_unverified_context
    request.urlretrieve(src, 'a.jpg')


    try:
        programResponse = int(input('종료하시겠습니까?\n1.종료 2.계속 진행\n\n=> '))
        if programResponse == 1 :
            driver.close()
            break
        else :
            print('\n\n')
            continue
    except:
        print('입력 문자 오류로 프로그램을 종료합니다.')
        driver.close()
        break