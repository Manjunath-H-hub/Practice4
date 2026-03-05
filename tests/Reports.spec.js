
import {test,expect} from '@playwright/test'

test('Test 1', async ({page})=>
{
    await page.goto("https://demoblaze.com/index.html")
    await expect(page).toHaveTitle("STOR")

})

test('Test 2', async ({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHRM")

})

test('Test 3', async ({page})=>
{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo")
    await expect(page).toHaveTitle("OpenCart - Demo")

})

