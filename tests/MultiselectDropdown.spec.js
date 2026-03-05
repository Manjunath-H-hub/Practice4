import { test,expect } from "@playwright/test";


test('Multiselect dropdown', async ({page})=>
{
   await page.goto("https://testautomationpractice.blogspot.com/")

   // select multiple options from multi select dropdown 

    await page.locator("#colors").selectOption('red','green','white')
   //await page.selectOption('#color',['red','green','white'])

   // Assertions 

   //check number of values in the dropdown
   //const options=page.locator('#colors option')
   //await expect(options).toHaveCount(7)

   //check number of options present by using javascript array
   const options =await page.$$("#colors option")
   console.log("Number of options:", options.length)
   await expect(options.length).toBe(7)
   
   //check presence of value in the dropdown
   const content=await page.locator('#colors').textContent()
   await expect(content.includes('Red')).toBeTruthy()
   await expect(content.includes('black')).toBeFalsy()


})

