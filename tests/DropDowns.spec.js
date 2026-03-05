
import {test,expect} from '@playwright/test'




test('Dropdown validations', async ({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

     //multiple ways to select options from the dropdown

     //await page.locator("#country").selectOption({label: 'India'})   // by label
     //await page.locator("#country").selectOption({value:'uk'})       // by value
     //await page.locator("#country").selectOption("India")           // direct passing value
     //await page.locator("#country").selectOption({index:3})         // by index
     //await page.selectOption('#country','India')                    // another way of writing 

     // if there is no select tag then we have to use the looping method to select the option from the dropdown 

    const options=await page.$$("#country option")

    for(const option of options)
    {
        let value=await option.textContent()

        if(value.includes('France'))
        {

            await page.selectOption('#country','India') 
            break
              
        }
    }

})


     // check number of options from the dropdown   approach 1
    //  const options=page.$$("#country option")
    //  console.log("Number of options: ", options.length)
    //  await expect(options.length).toBe(10)

        // check number of options from the dropdown   approach 2
    
    // const options=page.locator("#country option")
    // await expect(options).toHaveCount(10)

    //check presence of value in the dropdown approach 1  using textContent

    // const content=await page.locator("#country").textContent()
    // await expect(content.includes('India')).toBeTruthy()


    //check presence of value in the dropdown approach 1  using for each loop

    const options=await page.$$("#country option")

    let status=false

    for(const option of options)
    {
        let value=await option.textContent()

        if(value.includes('France'))
        {

            status=true
            break
              
        }
    }

    expect(status).toBeTruthy()








