
import {test,expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'

import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

test('Pomtest ',  async ({page})=>
{

 /*  // without POM

   await page.goto("https://demoblaze.com/index.html")
   await page.locator("#login2").click()
   await page.locator("#loginusername").fill("pavanol")
   await page.locator("#loginpassword").fill("test@123")
   await page.locator("#//button[normalize-space()='Log in']").click()

   */

   //Login

   const login=new LoginPage(page)
   await login.gotoLoginPage()
   await login.login('pavanol','test@123')

   //Home

   const homepage=new HomePage(page)
   await homepage.addProductToCart("Nexus 6")
   await page.waitForTimeout(3000)
   await homepage.gotoCart()

   //Cart
   
   const cartPage=new CartPage(page)
   const status=await cartPage.checkProductInCart("Nexus 6")
   await expect(status).toBe(true)

})