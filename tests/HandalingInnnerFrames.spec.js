
import {test,expec} from '@playwright/test'

test('Innner frame handaling',  async ({page})=>
{
   await page.goto("https://ui.vision/demo/webtest/frames/")

   const fram3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
   await frame3.fill("//input[@name='mytext3']", "It is your 3rd box")


   //innner frame
   const childframes=fram3.childFrames()
   await childframes[0].locator(".AB7Lab").check()

})
