
import {test,expect} from '@playwright/test'

let page

test.beforeAll( async ({browser})=>
{
     page=await browser.newPage()
       await page.goto("https://demoblaze.com/index.html")
   //login
   await page.locator("#login2").click()
   await page.locator("#loginusername").fill("pavanol")
   await page.locator("#loginpassword").fill("test@123")
   await page.locator("//button[normalize-space()='Log in']").click()

})

test.afterAll(  async ()=>
{ 
   //log out
   await page.locator("#logout2").click()

})

test('Home page test', async ()=>
{
   //Home page
   const products=await page.$$(".hrefch")
   await expect(products.length).toHaveLength(9)

 
})

test('Add product to the cart test', async ()=>
{
   //add to card

   await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
   await page.locator("//a[@class='btn btn-success btn-lg']").click()

   page.on('dialog', async dailog=>
   {
       expect(dailog.message()).toContain("Product added.")
       await dailog.accept()
   })

})

