
import {test,expect} from '@playwright/test'

test('Autosuggestdropdown',  async ({page})=>
{
    await page.goto("https://www.redbus.in/")

    await page.locator("label___57eda7").first().fill("Delhi")

    await page.waitForSelector(".searchCategory___993266 .listHeader___90a8b7")

    const cityOptions=await page.$$(".searchCategory___993266 .listHeader___90a8b7")

    for(const city of cityOptions)
    {
        const names=await city.textContent()
       
       //console.log(names)

       if(names.includes("Anandvihar"))
       {
           await city.click()
           break
       }
    }


})