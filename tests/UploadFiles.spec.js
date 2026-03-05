import {test,expect} from '@playwright/test'

test.skip('Single File Upload', async ({page})=>
{
   await page.goto("https://www.foundit.in/web/en/home")


   await page.waitForSelector("//a[@class='btn block resume-btn btn-orange mt20']")
   await page.locator("//a[@class='btn block resume-btn btn-orange mt20']").click()

   await page.locator("button.line-btn").setInputFiles("tests\UploadFiles\PJSSS.docx")

})


test('Multiple File Upload', async ({page})=>
{
   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   await page.locator("//input[@id='filesToUpload']") 
             .setInputFiles(["tests\UploadFiles\PJSSS copy.docx","tests\UploadFiles\PJSSS.docx"])

  
    await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("PJSSS copy.docx")
    await expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("PJSSS.docx")


    // to remove multiple files uploade

    await page.locator("//input[@id='filesToUpload']") 
             .setInputFiles([])
    await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected")
  


})

