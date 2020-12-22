#@FeatureAutomationTest
Feature: User Story 1
  As a user if there is an item already inside my basket
  I want to be able to delete the item from the basket page
  So that I can see the basket is empty

  Acceptance-Criteria
  Shopping cart has delete button
  item is removed from basket /cart
  banner must display your shopping cart it empty


  Scenario: Delete button is present on the shopping cart
    Given I have an item already in my shopping basket
    When I go to shopping basket
    Then I should see a delete button

  Scenario: user able to delete an item from shopping cart
    Given I have an item already in my shopping basket
    And I go to shopping basket
    When I delete an item
    Then the item has to be removed from my shopping cart

  Scenario: user able to delete an item from shopping cart
    Given I have an item already in my shopping basket
    And I go to shopping basket
    When I delete an item
    Then a banner saying "Your shopping cart is empty." is displayed