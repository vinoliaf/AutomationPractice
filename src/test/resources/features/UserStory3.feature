@FeatureAutomationTest
Feature: User Story 3
  As a user when searching for a summer dress
  I want to change the price range $16 - $20
  so that I see the search result change

  Acceptance Criteria
  1. slider changes the price range
  2. Search results are updated
  3. Items returned are within price range

  Scenario: slider changes the price range
    Given I navigate to summer dresses from menu WOMAN
    And the price range is "$16.00 - $32.00"
    And I move the slider to "$20"
    Then the price range is changed to "$16.00 - $20.00"

  Scenario: Search results are updated
    Given I navigate to summer dresses from menu WOMAN
    And the price range is "$16.00 - $32.00"
    When I move the slider to "$20"
    Then the search results are updated

  Scenario: Items returned are within price range
    Given I navigate to summer dresses from menu WOMAN
    And the price range is "$16.00 - $32.00"
    When I move the slider to "$20"
    Then the items returned are within price range

