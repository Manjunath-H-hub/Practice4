
import {test,expect} from '@playwright/test'

test('Assertions', async ({page})=>
{
  
   await page.goto("https://demo.nopcommerce.com/register")
   await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

   await expect(page).toHaveTitle("nopCommerce demo store. Register")

   const logo= page.locator(".header-logo")
   await expect(logo).toBeVisible()

   const searchBox=page.locator("#small-searchterms")
   await expect(searchBox).toBeEnabled()

   const radioBTN=page.locator("#gender-male")
   await radioBTN.click()
   await expect(radioBTN).toBeChecked()

   const ckb=page.locator("#Newsletter")
   await expect(ckb).toBeChecked()

   const rbtn=page.locator("#register-button")
   await expect(rbtn).toHaveAttribute('type','submit')

   const tht=page.locator(".page-title h1")
   await expect(tht).toHaveText('Register')

    const tct=page.locator(".page-title h1")
    await expect(tct).toContainText('Reg')

    const email=page.locator("#Email")
    await email.fill("Test@gmail.com")
    expect(email).toHaveValue("Test@gmail.com")
    
    const dropdown=page.locator("select[Name='DateOfBirthMonth'] option")
    await expect(dropdown).toHaveCount(13)


})