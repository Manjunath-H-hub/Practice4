
import {test,expect} from '@playwright/test'

test('MouseRightClick', async ({page})=>
{
   await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

   const button=page.locator(".context-menu-one")

   await button.click({button:'right'})
   //await button.click({button:'left'})


})


