//const {test,expect}=require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators',async ({page})=>
{
    await page.goto("https://demoblaze.com/")

    //property
    //await page.locator('id="login2').click()
    await page.click('id=login2')

    //css
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill("#loginusername",'pavanol')

    //css
    //await page.locator("//input[@id='loginpassword']").fill("test@123")
    await page.fill("//input[@id='loginpassword']","test@123")

    //x[path]
    //await page.locator("//button[normalize-space()='Log in']").click()
    await page.click("//button[normalize-space()='Log in']")

    const btnLogout=page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(btnLogout).toBeVisible()

    await page.close()




})