from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common import action_chains, keys, by

from bs4 import BeautifulStoneSoup
import time



driver = webdriver.Chrome('./chromedriver.exe')