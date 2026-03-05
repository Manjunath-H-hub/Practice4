
import {test,expect} from '@playwright/test'

test('Frames handaling',  async ({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames

    const allFrames=await page.frames()
    console.log("Total frames:", allFrames.length)

    // Approach 1: Using name or url

    const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.fill("//input[@name='mytext1']", "My name is Manjunath")

    // Approach 2: Using frame locator

    const inputBox=page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']")
    await inputBox.fill("You are a good man")


})