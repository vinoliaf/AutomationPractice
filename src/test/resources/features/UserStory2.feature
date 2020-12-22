#@FeatureAutomationTest
Feature: User Story 2
  As a user i want to select summer dresses option from the navigation menu
  So that I can view an item from the summer collection

  Acceptance-Criteria
  on mouse hover button 'WOMAN',sub navigation options will appear
  Summer items only display inside the search results

  Scenario: User able to navigate to summer dresses from menu WOMAN
    Given I am on the home page
    When I navigate to summer dresses from menu WOMAN
    Then I landed on the summer dresses page


  Scenario: Summer items only display inside the search results
    Given I am on the home page
    When I navigate to summer dresses from menu WOMAN
    Then I could see the items are displayed inside the search results