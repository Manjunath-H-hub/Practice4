
import {test,expect} from '@playwright/test'


test('Date Picker', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //await page.locator("//input[@id='datepicker']").fill("09/25/2026")

    const year="2026"
    const month="September"
    const date="25"

    await page.locator("//input[@id='datepicker']").click()

    while(true)
    {
       const currentMonth=await page.locator(".ui-datepicker-month")
       const currentYear=await page.locator(".ui-datepicker-year")

       if(currentMonth==month && currentYear==year)
       {
         break
       }

       await page.locator("[title='Next']").click()  //next button
       //await page.locator("[title='Prev']").click()  // previous button

       // date selection using loop appraoch 1
        
     /* const dates=await page.$$(".ui-state-default")

      for( let dt of dates)
      {
          currentDate=await dt.textContent()
          if (currentDate==date)
          {
            await dt.click()
            break
          }
      } */

    // date selection withiut loop using locator appraoch 2

    //await page.locator("//a[@class='ui-state-default'] [text()='17']").click()

    // instead of hard coading value we are mentioning genaric 

    await page.locator(`//a[@class='ui-state-default'] [text()='${date}']`).click()


    }


})