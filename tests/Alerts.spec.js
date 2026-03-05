import {test,expect} from '@playwright/test'

test.skip('Alert with OK',  async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Enabling alert handaling // dialog window handler
    page.on('dialog', async dialog=>
    { 
       expect(dialog.type()).toContain('alert')
       expect(dialog.message()).toContain("I am an alert box!")
       await dialog.accept()

    })
    
    await page.locator("//button[@id='alertBtn']").click()


})

test.skip('Confirmation alert with OK and Cancel',  async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Enabling alert handaling // dialog window handler
    page.on('dialog', async dialog=>
    { 
       expect(dialog.type()).toContain('confirm')
       expect(dialog.message()).toContain("Press a button!")
       await dialog.accept()
       //await dialog.dismiss()

    })
    
    await page.locator("//button[@id='confirmBtn']").click()
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")


})

test('Prompt dialog',  async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Enabling alert handaling // dialog window handler
    page.on('dialog', async dialog=>
    { 
       expect(dialog.type()).toContain('prompt')
       expect(dialog.message()).toContain("Please enter your name:")
       expect(dialog.defaultValue()).toContain("Harry Potter")
       await dialog.accept("John")
       //await dialog.dismiss()

    })
    
    await page.locator("//button[@id='promptBtn']").click()
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?")
    console.log("Practice 2nd push")

})

