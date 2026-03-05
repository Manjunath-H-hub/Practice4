import {test,expect} from '@playwright/test'

test('LocateMultipleElements', async ({page})=>
{
    await page.goto("https://demoblaze.com/index.html")
   /* const allLinks=await page.$$('a')
    //console.log(allLinks)
    for(const link of allLinks)
    {
        const linkText=await link.textContent()
        console.log(linkText)
    }
   */


    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const productNames=await page.$$("//div[@id='tbodyid']//div//h4/a")  // CSS  div h4 a
    for(const product of productNames)
    {
        const names=await product.textContent()
        console.log(names)
    }

})

