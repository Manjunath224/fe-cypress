# cypress-vodafone-test

###### ****How to Execute test scenarios .?****

Step 1] Install node packages 
   ~~~~
        npm install
   ~~~~

Step 2] Open Cypress and Click on Run All Specs in Cypress window by choosing browser to execute
   ~~~~
        cypress open 
   ~~~~
   ~~~~
    OR use 'npm run' with one of the following commands for respective script
    "c:o": "cypress open",
    "t:c": "cypress run -b chrome",
    "t:f": "cypress run -b firefox",
    "t:c:h": "cypress run -b chrome --headless"
   ~~~~


##### ****Challenges Faced****

~~~~
 1] Uncaught DOM Exception
    Problem : One of the console Errors was unrecognised by Cypress and scenarios were failing because of that.
    Solution : Using Cypress.on method returned false for all uncaught exceptions.
    
 2] Session Storage was not cleared ( Storing Mobile Brand to Filter )
    Problem : When user filters the required brand AUT stores it in SessionStorage and loads page with filtered brand in next scenario.
    Solution : Had to clear Session Storage before each scenario.
    
 3] Kinda A/B Test Experiment was present in **Next Step Button** in Mobile Description Page
    Problem : A/B is running in Mobile description page were sometimes 2 buttons get displayed and sometimes 1 button with different locators.
    Solution : Handled both logic ( Note: its an assumption that as A/B test ., it may be a business rule which am not aware of ).
~~~~


