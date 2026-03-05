
import {test,expect} from '@playwright/test'

test('MouseDoubleClick', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const copyText=await page.locator("//button[normalize-space()='Copy Text']")
    await copyText.dblclick()

    const f2=page.locator("#field2")
    await expect(f2).toHaveValue("Hello World!")


})


