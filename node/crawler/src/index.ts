import * as puppeteer from "puppeteer"


const initBrowser = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
    })

    return browser
}

(async () => {
    const browser = await initBrowser()
    const page = await browser.newPage()

    /**
     * 크롤러 동작 정의
     */
    

    await browser.close();
})()