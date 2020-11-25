Feature: Mobile Section in Vodafone Ziggo

  Scenario Outline: Verify if user can checkout a mobile device with all required details
    Given User Navigates to Vodafone-Ziggo home page
    When User clicks on mobile devices icon from home page
    When User filters mobile devices brand to "<Brand>"
    Then User check for mobile device brand "<Brand>" and model "<Model>"
    And User chooses colour "<Colour>" in mobile device brand "<Brand>" and model "<Model>"
    Then User Selects mobile device brand "<Brand>" and model "<Model>" in colour "<Colour>"
    And User accepts he is not Ziggo Customer
    Then User clicks on Next step Button to Proceed Checkout
    Then User clicks on Next step Button in Shopping Cart to Proceed
    Then User enters his personal details in Data page to Proceed
    And User enters his address details in Data page to Proceed
    Then User enters his Identity details in Data page to Proceed
    Then User enters his Bank account details in Data page to Proceed
    When User clicks on Next step Button in Data Page to Proceed
    And User enters his Income and Loan details to Proceed
    And User clicks on Next step Button in Number Portability page to Proceed
    Then Verify user is in Overview of the booking page
    Examples:
      | Brand   | Model           | Colour |
      | apple   | iphone-11-128gb | yellow |
      | sony    | xperia-10-64gb  | black  |
      | samsung | galaxy-s20-plus | blue   |
