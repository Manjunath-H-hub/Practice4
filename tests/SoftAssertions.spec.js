import {test,expect} from '@playwright/test'

test('Soft Assertions', async ({page})=>
{
   
    //Hard assertions
    /*await page.goto("https://demoblaze.com/")
    await expect(page).toHaveTitle("STORE123")
    await expect(page).toHaveURL("https://demoblaze.com/")
    const logo=page.locator(".navbar-brand")
    await expect(logo).toBeVisible()
    */


    await page.goto("https://demoblaze.com/")
    await expect.soft(page).toHaveTitle("STORE123")
    await expect.soft(page).toHaveURL("https://demoblaze.com/")
    const logo=page.locator(".navbar-brand")
    await expect.soft(logo).toBeVisible()




})


