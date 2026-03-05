
import {test,expect} from '@playwright/test'

test('Keyboardvalidations',  async ({page})=>
{
   await page.goto("https://gotranscript.com/text-compare")

   await page.locator('name="text1"').fill("Welcome to automation testing")

   //Ctl A

    await page.keyboard.press('Control+A')   // if we want to use two buttons at a time use press method


   //Ctl C
   await page.keyboard.press('Control+C')

   //Tab
   
   await page.keyboard.down('Tab')
   await page.keyboard.up('Tab')

    //Ctl V
    
    await page.keyboard.press('Control+V')


})

