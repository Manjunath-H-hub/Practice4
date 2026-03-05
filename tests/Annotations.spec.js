
import {test,expect, chromium} from '@playwright/test'

//only

test('Test 1', async ({page})=>
{
   console.log("This is my test 1 ..........................")
    

})


//skip

test.skip('Test 2', async ({page})=>
{
   console.log("This is my test 2 ..........................")
    

})

// If we want to skip the test in certain condition 

test('Test 3', async ({page,browserName})=>
{
   console.log("This is my test 3 ..........................")
   if(browserName==='chromium')
   {
    test.skip()
   }   

})

//Fixme

test('Test 4', async ({page})=>
{
   test.fixme()
   console.log("This is my test 4 ..........................")
    

})

//Fail

test('Test 5', async ({page})=>
{
   test.fail()
   console.log("This is my test 5 ..........................")
   //expect(1).toBe(1)
   expect(1).toBe(2) // if both exp and actaul is failed then test pass

})

// Fail the test case based on the condition 

test('Test 6', async ({page,browserName})=>
{
   console.log("This is my test 6 ..........................")

   if(browserName==='chromium')
   {
       test.fail()
   }

})

// slow
test('Test 7 ', async ({page})=>
{
   test.slow()
   await page.goto("https://demoblaze.com/prod.html?idp_=1#")
   console.log("This is my test 7 ..........................")
    

})
