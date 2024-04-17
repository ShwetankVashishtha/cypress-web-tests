Feature: Home Page Functionality
  Validate web app home page components and functionality

  @sanity
  Scenario Outline: Verify the consistency of the decimal points on switching the languages
    Given user is on the homepage
    When user switches the '<language>'
    Then user should be able to verify the consistency of digits after the separator 
    Examples:
            | language |
            | English  |
            | Deutsch  |
            | Polish   |