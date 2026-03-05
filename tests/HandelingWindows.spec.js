
import {test,expect,chromium} from '@playwright/test'

test('Handeling WIndows/Pgaes',  async ( )=>
{
    //if you do not want to use existing page then you can create new chrome page as below

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1= await context.newPage()
    const page2= await context.newPage()

    const allPages=await context.pages()
    console.log("Number of total windows/Pages :",allPages.length)

   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await expect(page1).toHaveTitle("OrangeHRM")

   await page2.goto("https://www.orangehrm.com/")
   await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

})


test.only('Handeling multiple WIndows/Pgaes',  async ( )=>
{
    //if you do not want to use existing page then you can create new chrome page as below

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1= await context.newPage()
 
   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await expect(page1).toHaveTitle("OrangeHRM")
   
   const pagePromise= context.waitForEvent('page')
   await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
   
   const newPage=await pagePromise
   await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

   await page1.waitForTimeout(3000)
   await newPage.waitForTimeout(3000)

   await browser.close()  // here in this test we only created pages so we have to close


})



