
import {test,expect} from '@playwright/test'

test.beforeAll( async ()=>
{
   console.log("This is beforeAll hook...........")

})

test.afterAll( async ()=>
{
   console.log("This is afterAll hook...........")

})


test.beforeEach( async ()=>
{
   console.log("This is beforeEach hook...........")

})

test.afterEach( async ()=>
{
   console.log("This is afterEach hook...........")

})

test.describe('Grouping 1', ()=>
{
    test('Test 1 Grouping validation ', async ({page})=>
{
    console.log("This is test 1 ........................")
    
})

test('Test 2 Grouping validation ', async ({page})=>
{
    console.log("This is test 2 ........................")
    
})

})


test.describe('Grouping 2', ()=>
{
    test('Test 3 Grouping validation ', async ({page})=>
{
    console.log("This is test 3 ........................")
    
})

test('Test 4 Grouping validation ', async ({page})=>
{
    console.log("This is test 4 ........................")
    
})

})

