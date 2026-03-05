
import {test,expect} from '@playwright/test'

test('Mouse hover', async ({page})=>
{
    await page.locator("https://demo.opencart.com/")

    const desktop=await page.locator("//a[normalize-space()='Desktops']")

    const PC=await desktop.locator("//a[normalize-space()='PC (0)']")
    const Mac=await desktop.locator("//a[normalize-space()='Mac (1)']")

    await desktop.hover()
    await PC.hover()
    await Mac.hover()

})




