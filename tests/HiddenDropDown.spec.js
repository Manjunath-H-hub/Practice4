
import {test,expect} from '@playwright/test'

test('HiddenDropDown', async ({page})=>
{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.locator("//input[@placeholder='Username']").fill("Admin")
   await page.locator("//input[@placeholder='Password']").fill("admin123")
   await page.locator("//button[@type='submit']").click()
   await page.locator("//a[normalize-space()='PIM']").click()
   await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click()

   await page.waitForTimeout(3000)

   const options=await page.$$("//div[@role='listbox']//span")

   for(let option of options)
   {
        const jobTitle=await option.textContent()
        console.log(jobTitle)
        if(jobTitle.includes("QA Engineer"))
        {
            await option.click()
            break
        }
   }

})

