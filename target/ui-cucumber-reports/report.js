$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory2.feature");
formatter.feature({
  "line": 2,
  "name": "User Story 2",
  "description": "As a user i want to select summer dresses option from the navigation menu\nSo that I can view an item from the summer collection\n\nAcceptance-Criteria\non mouse hover button \u0027WOMAN\u0027,sub navigation options will appear\nSummer items only display inside the search results",
  "id": "user-story-2",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5614509498,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Summer items only display inside the search results",
  "description": "",
  "id": "user-story-2;summer-items-only-display-inside-the-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I navigate to summer dresses from menu WOMAN",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I could see the items are displayed inside the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 107907746,
  "status": "passed"
});
formatter.match({
  "location": "UserStory2Steps.iNavigateToSummerDressesFromMenuWOMAN()"
});
formatter.result({
  "duration": 2719866508,
  "status": "passed"
});
formatter.match({
  "location": "UserStory2Steps.iCouldSeeTheItemsAreDisplayedInsideTheSearchResults()"
});
formatter.result({
  "duration": 62080721,
  "status": "passed"
});
formatter.after({
  "duration": 97644659,
  "status": "passed"
});
});