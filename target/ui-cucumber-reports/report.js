$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory4.feature");
formatter.feature({
  "line": 1,
  "name": "User Story 4",
  "description": "As a user\nI want to create a new account\nSo that I can start buying items using my personal account\n\nAcceptance Criteria\n1. Form can only accept valid information\n2. Invalid information will give an error message\n3. Completing registration will take user to \"MY ACCOUNT\u0027 page\n4. User can see account name on top right",
  "id": "user-story-4",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 80,
  "name": "User can see account name on top right",
  "description": "",
  "id": "user-story-4;user-can-see-account-name-on-top-right",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "I am on the create account page with random email address",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "title as \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "first name as \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "last name as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "date of Birth as \"\u003cDOB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "sign in for newspaper as \"\u003cnewspaper\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "opt in for offers as \"\u003coffers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "address as \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "city as \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "state as \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "postalCode as \"\u003cpostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "country as \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "mobilePhone as \"\u003cmobilePhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I create an account",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "I can see account name on top right \"\u003cfirstName\u003e \u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 97,
  "name": "",
  "description": "",
  "id": "user-story-4;user-can-see-account-name-on-top-right;",
  "rows": [
    {
      "cells": [
        "title",
        "firstName",
        "lastname",
        "password",
        "DOB",
        "address",
        "city",
        "state",
        "postalCode",
        "country",
        "mobilePhone"
      ],
      "line": 98,
      "id": "user-story-4;user-can-see-account-name-on-top-right;;1"
    },
    {
      "cells": [
        "Mr",
        "Test",
        "User",
        "abcdefg1234",
        "22-June-1945",
        "Leeds road",
        "Leeds",
        "Alabama",
        "01123",
        "United Status",
        "07987654342"
      ],
      "line": 99,
      "id": "user-story-4;user-can-see-account-name-on-top-right;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5063328456,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "User can see account name on top right",
  "description": "",
  "id": "user-story-4;user-can-see-account-name-on-top-right;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 79,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "I am on the create account page with random email address",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "title as \"Mr\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "first name as \"Test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "last name as \"User\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "password as \"abcdefg1234\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "date of Birth as \"22-June-1945\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "sign in for newspaper as \"\u003cnewspaper\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "opt in for offers as \"\u003coffers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "address as \"Leeds road\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "city as \"Leeds\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "state as \"Alabama\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "postalCode as \"01123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "country as \"United Status\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "mobilePhone as \"07987654342\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I create an account",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "I can see account name on top right \"Test User\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory4Steps.iAmOnTheCreateAccountPageWithRandomEmailAddress()"
});
formatter.result({
  "duration": 3151782894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 10
    }
  ],
  "location": "UserStory4Steps.titleAs(String)"
});
formatter.result({
  "duration": 58840231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 15
    }
  ],
  "location": "UserStory4Steps.firstNameAs(String)"
});
formatter.result({
  "duration": 118868722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 14
    }
  ],
  "location": "UserStory4Steps.lastNameAs(String)"
});
formatter.result({
  "duration": 120095972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefg1234",
      "offset": 13
    }
  ],
  "location": "UserStory4Steps.passwordAs(String)"
});
formatter.result({
  "duration": 144061789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-June-1945",
      "offset": 18
    }
  ],
  "location": "UserStory4Steps.dateOfBirthAs(String)"
});
formatter.result({
  "duration": 262441838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnewspaper\u003e",
      "offset": 26
    }
  ],
  "location": "UserStory4Steps.signInForNewspaperAs(String)"
});
formatter.result({
  "duration": 60561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003coffers\u003e",
      "offset": 22
    }
  ],
  "location": "UserStory4Steps.optInForOffersAs(String)"
});
formatter.result({
  "duration": 41079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds road",
      "offset": 12
    }
  ],
  "location": "UserStory4Steps.addressAs(String)"
});
formatter.result({
  "duration": 98858191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 9
    }
  ],
  "location": "UserStory4Steps.cityAs(String)"
});
formatter.result({
  "duration": 75643680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alabama",
      "offset": 10
    }
  ],
  "location": "UserStory4Steps.stateAs(String)"
});
formatter.result({
  "duration": 78290607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01123",
      "offset": 15
    }
  ],
  "location": "UserStory4Steps.postalcodeAs(String)"
});
formatter.result({
  "duration": 75166625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Status",
      "offset": 12
    }
  ],
  "location": "UserStory4Steps.countryAs(String)"
});
formatter.result({
  "duration": 95103093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07987654342",
      "offset": 16
    }
  ],
  "location": "UserStory4Steps.mobilephoneAs(String)"
});
formatter.result({
  "duration": 97669551,
  "status": "passed"
});
formatter.match({
  "location": "UserStory4Steps.iCreateAnAccount()"
});
formatter.result({
  "duration": 1339915368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test User",
      "offset": 37
    }
  ],
  "location": "UserStory4Steps.iCanSeeAccountNameOnTopRight(String)"
});
formatter.result({
  "duration": 65658085,
  "status": "passed"
});
formatter.after({
  "duration": 95637443,
  "status": "passed"
});
});