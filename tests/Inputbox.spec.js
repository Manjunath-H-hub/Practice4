
import {test,expect} from '@playwright/test'

test('Inputbox assertion', async ({page})=>
{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page.locator('#FirstName')).toBeVisible()
    await expect(page.locator('#FirstName')).toBeEnabled()
    await expect(page.locator('#FirstName')).toBeEditable()
    await expect(page.locator('#FirstName')).toBeEmpty()

    await page.locator('#FirstName').fill("Manjunath")

    await page.locator("#gender-male").check()
    await expect(page.locator("#gender-male")).toBeChecked()
    await expect(await page.locator("#gender-male").isChecked()).toBeTruthy()

    await expect(await page.locator("#gender-female").isChecked).toBeFalsy()


}) 

