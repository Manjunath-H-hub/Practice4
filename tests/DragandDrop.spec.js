
import {test,expect} from '@playwright/test'

test('DragandDrop', async ({page})=>
{
    await page.goto("https://www.w3schools.com/html/html5_draganddrop.asp")

    const SE=page.locator("//img[@id='img1']")
    const TE=page.locator("//div[@id='div2']")

    // approach 1

    await SE.hover()
    await page.mouse.down()

    await TE.hover()
    await page.mouse.up()


    // approach 2

   await SE.dragTo(TE)


})