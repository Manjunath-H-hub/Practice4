
import {test,expect} from '@playwright/test'

 /*test('Checkboxes validation', async ({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#monday').check()
    await expect(page.locator('#monday')).toBeChecked()
    expect(page.locator('#monday').isChecked).toBeTruthy()

    expect(page.locator('#sunday').isChecked).toBeTruthy()
    
    const checkboxLocators=["page.locator('#monday')","page.locator('#wednesday')","page.locator('#friday')"]

    for (const locators of checkboxLocators)
    {
        await page.locator(locators).check()
    }
  */

   

test('Checkboxes validation', async ({ page }) => 
{
  await page.goto("https://testautomationpractice.blogspot.com/")

  await page.locator('#monday').check()
  await expect(page.locator('#monday')).toBeChecked()
  expect(await page.locator('#monday').isChecked()).toBeTruthy()
  expect(await page.locator('#sunday').isChecked()).toBeFalsy()

  // ✅ only selectors, not Playwright calls
  const checkboxLocators = ['#monday', '#wednesday', '#friday']

  for (const selector of checkboxLocators) {
    await page.locator(selector).check()
    await expect(page.locator(selector)).toBeChecked()

     for (const selector of checkboxLocators) 
        {
            if (await page.locator(selector).isChecked())
            {
              await page.locator(selector).uncheck()
              await expect(page.locator(selector)).toBeChecked.toBeFalsy()
            }
        
       }
    
}
})