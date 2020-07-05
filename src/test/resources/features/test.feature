Feature: CarTaxCheck test

  @FeatureAutomationTest
  Scenario Outline: carcheck test
    Given I use the input file "<inputFile>"
    And we get the regex from the file
    When I search for the regex in "<Website>" website
    Then the result should match the details in the output file "<outputFileName>"
    Examples:
      | inputFile     | Website | outputFileName |
      | car_input.txt |         | car_output.txt |
