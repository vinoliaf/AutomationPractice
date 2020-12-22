#@FeatureAutomationTest
Feature: User Story 4
  As a user
  I want to create a new account
  So that I can start buying items using my personal account

  Acceptance Criteria
  1. Form can only accept valid information
  2. Invalid information will give an error message
  3. Completing registration will take user to "MY ACCOUNT' page
  4. User can see account name on top right


  Scenario Outline: Form can only accept valid information
    Given I am on the create account page with random email address
    And title as "<title>"
    And first name as "<firstName>"
    And last name as "<lastname>"
    And password as "<password>"
    And date of Birth as "<DOB>"
    And sign in for newspaper as "<newspaper>"
    And opt in for offers as "<offers>"
    And address as "<address>"
    And city as "<city>"
    And state as "<state>"
    And postalCode as "<postalCode>"
    And country as "<country>"
    And mobilePhone as "<mobilePhone>"
    When I create an account
    Then an account is created
    Examples:
      | title | firstName | lastname | password    | DOB          | address    | city  | state   | postalCode | country       | mobilePhone |
      | Mr    | Test      | User     | abcdefg1234 | 22-June-1945 | Leeds road | Leeds | Alabama | 01123      | United Status | 07987654342 |



  Scenario Outline: Invalid information will give an error message
    Given I am on the create account page with random email address
    And title as "<title>"
    And first name as "<firstName>"
    And last name as "<lastname>"
    And password as "<password>"
    And date of Birth as "<DOB>"
    And sign in for newspaper as "<newspaper>"
    And opt in for offers as "<offers>"
    And address as "<address>"
    And city as "<city>"
    And state as "<state>"
    And postalCode as "<postalCode>"
    And country as "<country>"
    And mobilePhone as "<mobilePhone>"
    When I create an account
    Then an "<error>" message is displayed
    Examples:
      | title | firstName | lastname | password    | DOB          | address    | city  | state   | postalCode | country       | mobilePhone | error |
      | Mr    |           | User     | abcdefg1234 | 22-June-1945 | Leeds road | Leeds | Alabama | 01123      | United Status | 07987654342 |firstname is required.|


  Scenario Outline: Completing registration will take user to "MY ACCOUNT' page
    Given I am on the create account page with random email address
    And title as "<title>"
    And first name as "<firstName>"
    And last name as "<lastname>"
    And password as "<password>"
    And date of Birth as "<DOB>"
    And sign in for newspaper as "<newspaper>"
    And opt in for offers as "<offers>"
    And address as "<address>"
    And city as "<city>"
    And state as "<state>"
    And postalCode as "<postalCode>"
    And country as "<country>"
    And mobilePhone as "<mobilePhone>"
    When I create an account
    Then I am on my account page
    Examples:
      | title | firstName | lastname | password    | DOB          | address    | city  | state   | postalCode | country       | mobilePhone |
      | Mr    | Test      | User     | abcdefg1234 | 22-June-1945 | Leeds road | Leeds | Alabama | 01123      | United Status | 07987654342 |

  Scenario Outline: User can see account name on top right
    Given I am on the create account page with random email address
    And title as "<title>"
    And first name as "<firstName>"
    And last name as "<lastname>"
    And password as "<password>"
    And date of Birth as "<DOB>"
    And sign in for newspaper as "<newspaper>"
    And opt in for offers as "<offers>"
    And address as "<address>"
    And city as "<city>"
    And state as "<state>"
    And postalCode as "<postalCode>"
    And country as "<country>"
    And mobilePhone as "<mobilePhone>"
    When I create an account
    Then I can see account name on top right "<firstName> <lastname>"

    Examples:
      | title | firstName | lastname | password    | DOB          | address    | city  | state   | postalCode | country       | mobilePhone |
      | Mr    | Test      | User     | abcdefg1234 | 22-June-1945 | Leeds road | Leeds | Alabama | 01123      | United Status | 07987654342 |
