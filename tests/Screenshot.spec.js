import{test,expect} from '@playwright/test'

test('Page screenshot', async ({page})=>
{
 await page.goto("https://demo.opencart.com/")
 await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})

})

test('Full page screenshot', async ({page})=>
{
 await page.goto("https://demo.opencart.com/")
 await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
    
})

test.only('Element screenshot', async ({page})=>
{
 await page.goto("https://demo.opencart.com/")
 await page.locator("//*[@id='content']/div[2]/div[1]").screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'})
    
})





