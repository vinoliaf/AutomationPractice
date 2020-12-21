$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory2.feature");
formatter.feature({
  "line": 2,
  "name": "User Story 2",
  "description": "As a user i want to select summer dresses option from the navigation menu\nSo that I can view an item from the summer collection\n\nAcceptance-Criteria\non mouse hover button \u0027WOMAN\u0027,sub navigation options will appear\nSummer items only display inside the search results",
  "id": "user-story-2",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.before({
  "duration": 5012734845,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User able to navigate to summer dresses from menu WOMAN",
  "description": "",
  "id": "user-story-2;user-able-to-navigate-to-summer-dresses-from-menu-woman",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to summer dresses from menu WOMAN",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I landed on the summer dresses page",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 147352668,
  "status": "passed"
});
formatter.match({
  "location": "UserStory2Steps.iNavigateToSummerDressesFromMenuWOMAN()"
});
formatter.result({
  "duration": 35305836643,
  "status": "passed"
});
formatter.match({
  "location": "UserStory2Steps.iLandedOnTheSummerDressesPage()"
});
