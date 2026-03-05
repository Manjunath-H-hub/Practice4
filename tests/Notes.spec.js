// page is a fixture which contains several commands which is used for our test like click, visible, etc
// by using this page fixture we can access all the commands 
// async keyword makes the function return a promise 
// await keyword makes the function wait for the promise
// ex: async will wait till page load and then every command in page works after loading page 
// To make it synchronize we use async and wait keywords
// npx playwright
// npx playwright test HomePageTest.spec.js
// npx playwright test HomePageTest.spec.js --project=chromium
// npx playwright test HomePageTest.spec.js --project chromium
// npx playwright test HomePageTest.spec.js --project=chromium --headed 
// npx playwright test HomePageTest.spec.js --project=chromium --headed --debug
// we can find the locators using property (ex: id,name..), xpath, css
// In playwright we can locate the elements in 2 ways 
    //A) await page.locator('locator').click()
    //B) await page.click('locator')
// We can use both //const {test,expect}=require('@playwright/test') or //import {test,expect} from '@playwright/test'
// To locate the multiple webelements use await page.$$('locator) and to print webelements use for each loop (ex: for (const product of products))
// built-in locators
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
// We need to just pass value in the () for above built in locators 
// npx playwright codegen --help is used to check what are all possible options we can use using codegen (record and play script)
// Hard assertion: If any assertion fails rest of the code will not be executed, it terminates the code
// Soft assertion: failed soft assertions do not terminate the execution, but mark the test as failed
// If we use only expect in the assertion then it will become hard assertion and if we use expect.soft then it will be used as soft assertions 
// expect(locator).toBeChecked(), expect(locator).not.toBeChecked(), expect(locator).soft.toBeChecked()
// Methods which are associated with locator will be with locator and the methods which are associated with expect will be with expect
// (note while writing script for assertions)
// We can select the option from the dropdown using following ways by selectOption({lable: '  '}),selectOption({value: '  '})
// selectOption() and selectOption({index: })
// if there is no select tag then we have to use the looping method to select the option from the dropdown 
// Whenever if you write $$ (ex: page.$$(locator)) it will return the result in array form 
// In playwright before clicking on any alert or prompt we need to write dialog windown handler statement 
// .frame = name or url   and .frameLocator(locator)
// For inner frames from parent frame take the childframes, then by using index of childframe locate the element and perform action
// Parent frame --> Child frames --> Child frame index --> child frame index+locator+action
// length no () but count()
// Context click or Right click ,we have direct dblClick() method in playwright for double click action
// will use .toHaveValue method to validate already present text in the input feild 
// Before we drap and drop we should know source and target element
// For keyborad action for a single button we use page.keyboard.up/down('Tab') where as for 2 buttons we use page.keyboard.press('Control+A')
// We have only one method to upload single or multiple files i.e setInputFiles()
// Playwright hooks before each/after each/ before all/after all will not accept page fixture directly here we use browser fixture
// In playwright describe always represents a group
// For normal page screenshot page.screenshot, for full page page.screenshot({ path+timestamp+filename, fullpage:true}), for element screenshot page.locator().screenshot({})
// To run tagged test cases we need to use --grep @Sanity/@Reg ex: npx playwright test Tags.spec.js project=chromium –headed –grep @Sanity
// If we want to exclude the any one of the tagged cases (if 1 test case has multiple tags like @Sanity and @Regression)
// In the terminal we have to mention --grep-invert @Regression (if we want to exclude Reg and execute only sanity)
// Whenever we are using annotations like fixme/fail that should be written in first and then in next lines rest of the statements can be written
// test.slow() wait for three folds the time whatever the time set in the configuration file (ex: if timeout: 1000 in config file, it will wait uptp 3000 ms)
// If we want to set time out for individual test case then we have to use test.setTimeout(50000)
// Timeout for each test case by default is 30 secs
// Every POM classes contains elements and its corresponding actions later will refer those POM classes in multiple test cases 
// What is constructor whenever we create object of that class, constructor will autometically invoke
// In the constroctor will mentain all the locators
// .. refers the current project 
// In the test cases we create object for POM class and invoke the methods, same thing repeats to all POM pages and cases
// In POM classes intially we do not add all the elements we keep on adding the elements as an when required as per the test cases
// Main advantage of using POM is to achieve reusability we can find locator once and use them multiple times
// chromium.launch --> browser --> newContext --> newPage
// If any page has multiple links which navigates to another page so before clicking on that link we have to use (context.waitForEvent('page))
// For allure report install allure playwright module, then install allure command line then Run the tests then run 2 command lines as below
// By using playwright fixture "request" we can do API testing like (request.get,request.post,request.put & request.delete)

// playwright.config.js is a test runner file
// package.json will be created for every node projects
// playwright built in fixtures page, context, browser, browserName, request
// playwright =package
// test=annotation
// browser= fixture
// npx is the path which will point to the path of playwright module in node modules
// when you save a locator in a varible you should not perform any action at the RHS of the variable 
// for check boxes and radio button we an use the check()/click() method
// traceviewer/debugger/--UI
// single . means in the same folder
// double .. means outside of the folder

// to debug API things first we have to go to package.json file and enter the testname/command for which you want to debug under script
// then shift+contrl+P then click on debug npm script put the debug point and run

// if we want to run the test case for deffreent parameters then we should wrapt that test in one for loop

// and to diffrentiate test case name/parameter name use ${data.productname} in the test description and replace single quotes with tilt symbols

// We can also send the data not only from json but also from fixture (this can be possible with only 1 set of data and not possible for parameterized data)

// 3 way we can do DDT

// npm run webTests/npm run ApiTests/npm run regression can be used to run/trigger tests when we custome scripts in the package.json file

// majnunath.sdet@gmail.com  /  manju@SDET1

// page.locator("text=Checkout")
// page.locator("h3:has-text('ZARA COAT 3')")
// npx playwright test 
// npx playwright test --headed
// npx playwright test tests/ClientApp.spec.js
// npx playwright test --debug
// npx playwright test test --ui (to open the test runner)


// npx playwright test tests/Pomtest.spec.js --project chromium --headed

//Allure
//allure generate allure-results -o allure-report --clean
//allure open allure-report

//WebSites
//https://demoblaze.com/index.html
//https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
//https://demo.nopcommerce.com/
//https://ui.vision/demo/webtest/frames/
//https://demo.opencart.com/
//https://swisnl.github.io/jQuery-contextMenu/demo.html
//https://gotranscript.com/text-compare
//https://www.foundit.in/web/en/home
//https://davidwalsh.name/demo/multiple-file-upload.php